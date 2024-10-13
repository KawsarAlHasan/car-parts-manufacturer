import React, { useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Button, Form, Spinner, Table } from "react-bootstrap";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "react-query";

function UpComing() {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading2, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const image = data.image[0];

    const formData = new FormData();
    formData.append("file", image);

    formData.append("upload_preset", "v3hakopx");
    const url = "https://api.cloudinary.com/v1_1/daizkkv04/image/upload";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.asset_id) {
          const parts = {
            name: data.name,
            email: data.email,
            img: imgData.secure_url,
          };
          // save Product
          const url = `https://manufacturer-website-server-side-y96m.vercel.app/upComing`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(parts),
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          })
            .then((res) => res.json())
            .then((result) => {
              window.location.reload(false);
              toast.success(`${data.name} is added successfully`);
              setIsLoading(false);
            });
        }
      });
  };

  const { data: upComing, isLoading } = useQuery("upComing", () =>
    fetch(
      "https://manufacturer-website-server-side-y96m.vercel.app/upComing"
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://manufacturer-website-server-side-y96m.vercel.app/upComing/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload(false);
          toast("Item Delete Successfully!");
        });
    }
  };

  return (
    <div>
      <h2 className="text-center py-4">
        Up Coming<span className="text-danger"> Products</span>
      </h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {upComing.map((uCng) => (
            <tr key={uCng._id}>
              <td>
                <img
                  style={{
                    borderRadius: "20px",
                    height: "40px",
                    width: "40px",
                    margin: "-5px 0 -5px 0",
                  }}
                  src={uCng.img}
                  alt=""
                />
              </td>
              <td>{uCng.name}</td>
              <td>
                <Button
                  onClick={() => handleDelete(uCng._id)}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2 className="text-center py-4 mt-5">
        Add Up<span className="text-danger"> Coming Products</span>
      </h2>

      <form
        className="d-flex flex-column mb-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* products name  */}
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-danger">{errors.name?.message}</p>}
        </Form.Group>

        {/* products image  */}
        <Form.Group className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Product Image"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image && (
            <p className="text-danger">{errors.image?.message}</p>
          )}
        </Form.Group>

        {/* email */}
        <Form.Group className="d-none">
          <Form.Control
            type="email"
            value={user?.email}
            readOnly
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
        </Form.Group>

        {errors.exampleRequired && <span>This field is required</span>}

        {isLoading2 ? (
          <Button variant="primary" disabled>
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
          <input
            className="btn btn-primary"
            value="Add Up Coming Products"
            type="submit"
          />
        )}
      </form>
    </div>
  );
}

export default UpComing;
