import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Form from "react-bootstrap/Form";

const AddParts = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
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
            quantity: data.quantity,
            price: data.price,
            orderQuantity: data.orderQuantity,
            description: data.description,
            img: imgData.secure_url,
          };
          console.log(parts);
          // save doctor
          const url = `http://localhost:5000/carParts`;
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
              console.log(result);
              window.location.reload(false);
              toast.success(`${data.name} is added successfully`);
            });
        }
      });
  };

  const [user] = useAuthState(auth);
  return (
    <div>
      <div className=" w-50 my-3">
        <h1>
          Add <span className="text-danger">Car Parts</span>
        </h1>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Parts Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Parts Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name?.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Parts Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Parts Image"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-danger">{errors.image?.message}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && (
              <p className="text-danger">{errors.price?.message}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Quantity"
              {...register("quantity", { required: "Quantity is required" })}
            />
            {errors.quantity && (
              <p className="text-danger">{errors.quantity?.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Order Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Order Quantity"
              {...register("orderQuantity", {
                required: "Order Quantity is required",
              })}
            />
            {errors.orderQuantity && (
              <p className="text-danger">{errors.orderQuantity?.message}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
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
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-danger">{errors.description?.message}</p>
            )}
          </Form.Group>

          {errors.exampleRequired && <span>This field is required</span>}

          <input className="btn btn-primary" value="Add Parts" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddParts;
