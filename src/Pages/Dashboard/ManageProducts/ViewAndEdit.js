import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ViewAndEdit() {
  const { productsId } = useParams();

  const [product, setProducts] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (updateData) => {
    const urlLink = `http://localhost:8008/product/${productsId}`;
    fetch(urlLink, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        window.location.reload(false);
        toast("Student Infomation Updated Successfully!");
      });
  };

  useEffect(() => {
    const url = `https://two-start-manufacturer-backend.vercel.app/product/${productsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="shadow-lg card  pb-3"
              style={{ borderRadius: "30px" }}
            >
              <img
                style={{ borderRadius: "30px 30px  0 0", height: "300px" }}
                src={product.img}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  <b>Price:</b> $ {product.price}
                </p>
                <p className="card-text">
                  <b>Available Quantity:</b> {product.quantity}
                </p>
                <div className="">
                  <p className="card-text">
                    <b>Minimum Order Quantity:</b> {product.orderQuantity}
                  </p>
                  <p className="">
                    <b>Description:</b> {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h1>
              update <span className="text-danger">Product</span>
            </h1>
            <form
              className="d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Group className="">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product Name"
                  defaultValue={product?.name}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name?.message}</p>
                )}
              </Form.Group>

              <Form.Group className="">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  defaultValue={product?.price}
                  {...register("price", { required: "Price is required" })}
                />
                {errors.price && (
                  <p className="text-danger">{errors.price?.message}</p>
                )}
              </Form.Group>
              <Form.Group className="">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Quantity"
                  defaultValue={product?.quantity}
                  {...register("quantity", {
                    required: "Quantity is required",
                  })}
                />
                {errors.quantity && (
                  <p className="text-danger">{errors.quantity?.message}</p>
                )}
              </Form.Group>

              <Form.Group className="">
                <Form.Label>Order Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Order Quantity"
                  defaultValue={product?.orderQuantity}
                  {...register("orderQuantity", {
                    required: "Order Quantity is required",
                  })}
                />
                {errors.orderQuantity && (
                  <p className="text-danger">{errors.orderQuantity?.message}</p>
                )}
              </Form.Group>
              <Form.Group className="">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Description"
                  defaultValue={product?.description}
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <p className="text-danger">{errors.description?.message}</p>
                )}
              </Form.Group>

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                className="btn btn-primary my-2"
                value="Update Product"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAndEdit;
