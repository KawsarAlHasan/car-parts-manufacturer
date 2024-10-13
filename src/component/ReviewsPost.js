import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Rating } from "react-simple-star-rating";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

function ReviewsPost() {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userPic =
    "https://res.cloudinary.com/daizkkv04/image/upload/v1695101649/gpgh0jwdnh69bkvy3fyh.png";

  const onSubmit = async (data) => {
    const result = {
      userName: data.userName,
      rating: rating,
      userReview: data.userReview,
      userImage: user?.photoURL || userPic,
    };
    fetch("https://manufacturer-website-server-side-y96m.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast(`Sub Category added is successful`);
          window.location.reload(false);
        } else {
          toast.error(`oh no! Sub Category added is not successful`);
        }
      });
  };
  return (
    <div>
      <Form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            {...register("userName", { required: "Name is required" })}
          />
          {errors.userName && (
            <p className="text-danger">{errors.userName?.message}</p>
          )}
        </Form.Group>

        <Rating onClick={handleRating} className="mb-3" />

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Your Review:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Start writing..."
            type="text"
            {...register("userReview", { required: "Your Review is required" })}
          />
        </Form.Group>

        <input
          className="btn btn-primary w-full"
          value="Add Reviews"
          type="submit"
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </Form>
    </div>
  );
}

export default ReviewsPost;
