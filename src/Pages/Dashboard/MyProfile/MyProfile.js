import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import profile from "../../../images/profile-logo.png";
import camera from "../../../images/camera.png";
import nobody from "../../../images/nobody.png";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MyProfile = (props) => {
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
      return urlData.url;
    } catch (error) {
      setUploadingImg(false);
      console.log(error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // if (!image ) return alert("Please upload your profile picture");
    const url1 = await uploadImage(image);
    const url = url1 || user.photoURL;
    await updateProfile({ displayName: data.name, photoURL: url });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="custom-relative">
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

      <p>{user.displayName}</p>

      {/* test  */}
      <>
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

              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-error">Name is required</span>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
      {/* test  */}
    </div>
  );
};

export default MyProfile;
