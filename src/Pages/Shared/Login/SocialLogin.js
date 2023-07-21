import React from "react";
import googleImg from "../../../images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import auth from "../../../firebase.init";
import useToken from "../Hooks/UseToken";

const SocialLogin = (props) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(user);

  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let erroElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    erroElement = (
      <div>
        <p className="text-danger">Error: {error?.message} </p>
      </div>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {erroElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          <img
            style={{ width: "50px" }}
            className="img-fluid px-2"
            src={googleImg}
            alt=""
          />
          Google sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
