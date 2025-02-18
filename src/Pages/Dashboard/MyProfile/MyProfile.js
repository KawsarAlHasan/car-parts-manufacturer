import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import profile from "../../../images/profile-logo.png";
import camera from "../../../images/camera.png";
import nobody from "../../../images/nobody.png";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MyProfile = (props) => {
  document.title = "My Profile || Two Star Fashion";

  const [user] = useAuthState(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1 MB");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "v3hakopx");
    try {
      setUploadingImg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/daizkkv04/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setUploadingImg(false);
      window.location.reload(false);
      return urlData.url;
    } catch (error) {
      setUploadingImg(false);
      window.location.reload(false);
      console.log(error);
    }
  }

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = async (data) => {
    const url1 = await uploadImage(image);
    const url = url1 || user.photoURL;
    await updateProfile({ photoURL: url });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="text-center custom-relative mt-2">
        <img
          src={user.photoURL || profile}
          style={{
            borderRadius: "75px",
            height: "150px",
            width: "150px",
          }}
          alt=""
        />
        <img
          className="custom-cursor-pointer costum-camera"
          style={{
            height: "40px",
            width: "40px",
          }}
          onClick={handleShow}
          src={camera}
          alt=""
        />
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Update Profile Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              style={{
                borderRadius: "75px",
                height: "150px",
                width: "150px",
              }}
              src={imagePreview || user.photoURL || nobody}
              alt="nobody"
              className=""
            />
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              onChange={validateImg}
            />
          </Modal.Body>
          <Modal.Footer>
            {uploadingImg ? (
              <Button className="cursor-not-allowed" variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            ) : (
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            )}
          </Modal.Footer>
        </form>
      </Modal>

      <div className="container mt-2">
        <h5>Name: {user?.displayName}</h5>
        <h5>Email: {user?.email}</h5>
        <h5>Phone: {user?.phoneNumber ? user?.phoneNumber : "No Number"}</h5>
      </div>
    </div>
  );
};

export default MyProfile;
