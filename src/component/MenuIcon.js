import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import "./Component.css";
import emailLogo from "../images/email.png";
import reviewLogo from "../images/review.png";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link } from "react-router-dom";
import ReviewsPost from "./ReviewsPost";

function MenuIcon() {
  const [user] = useAuthState(auth);
  const [showEamil, setEmailShow] = useState(false);
  const handleEmailClose = () => setEmailShow(false);
  const handleEmailShow = () => setEmailShow(true);

  const [showReviews, setReviewsShow] = useState(false);
  const handleReviewsClose = () => setReviewsShow(false);
  const handleReviewsShow = () => setReviewsShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p1v12ya",
        "template_wipafiv",
        e.target,
        "Kf9t6D5m9U8K-RG8x"
      )
      .then(
        (result) => {
          toast("Success your Message!");
          window.location.reload(false);
        },
        (error) => {
          toast.error("Oh no! not success your message");
          window.location.reload(false);
        }
      );
  };

  return (
    <div className="custom-fixed">
      {user ? (
        <>
          <div onClick={handleEmailShow} className="menu">
            <img
              title="Email"
              width="30px"
              className="mx-2"
              src={emailLogo}
              alt=""
            />
          </div>
          <div className="mt-2">
            <div onClick={handleReviewsShow} className="menu">
              <img
                title="Review"
                width="30px"
                className="mx-2"
                src={reviewLogo}
                alt=""
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <Link className="d-flex" to="/login">
            <img
              title="Email"
              width="30px"
              className="mx-2"
              src={emailLogo}
              alt=""
            />
          </Link>
          <Link className="d-flex" to="/login">
            <img
              title="Review"
              width="30px"
              className="mx-2"
              src={reviewLogo}
              alt=""
            />
          </Link>
        </>
      )}

      <Modal show={showEamil} onHide={handleEmailClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Comments and Complaints</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="eName"
                placeholder="Enter Your Name..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="eEmail"
                value={user?.email}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Your Phone Number:</Form.Label>
              <Form.Control
                name="ePhone"
                type="number"
                placeholder="Your Email..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Your Text:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Start writing..."
                name="message"
                type="text"
                required
              />
            </Form.Group>
            <input
              type="submit"
              className="btn btn-info w-full input-sm max-w-xl"
              value="Please Submit"
            />
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showReviews} onHide={handleReviewsClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReviewsPost />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MenuIcon;
