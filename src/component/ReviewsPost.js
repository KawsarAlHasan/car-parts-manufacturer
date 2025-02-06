import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Rating } from "react-simple-star-rating";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

function ReviewsPost() {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const [loadingRating, setLoadingRating] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const userPic =
    "https://res.cloudinary.com/daizkkv04/image/upload/v1695101649/gpgh0jwdnh69bkvy3fyh.png";

  const onSubmit = async (data) => {
    setLoadingRating(true);
    const submitData = {
      userName: data.userName,
      rating: rating,
      userReview: data.userReview,
      userImage: user?.photoURL || userPic,
    };

    try {
      const response = await fetch(
        "https://two-start-manufacturer-backend.vercel.app/reviews",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submitData),
        }
      );

      await response.json();

      if (response.statusText === "Created") {
        toast.success("Sub Category added is successful");
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("oh no! Sub Category added is not successful");
    } finally {
      reset();
      setLoadingRating(false);
    }
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

        {loadingRating}

        <Button
          type="submit"
          className="btn btn-primary"
          disabled={loadingRating}
        >
          {loadingRating ? (
            <Spinner size="sm" animation="border" />
          ) : (
            "Add Reviews"
          )}
        </Button>

        {errors.exampleRequired && <span>This field is required</span>}
      </Form>
    </div>
  );
}

export default ReviewsPost;
