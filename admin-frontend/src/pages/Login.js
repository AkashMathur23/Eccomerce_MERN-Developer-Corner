import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        className="py-5"
        style={{ background: "#ffd333", minHeight: "100vh" }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="my-5 w-25  bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center title">Login</h3>
          <p className="text-center">Login To your account to continue</p>
          <form action="">
            <CustomInput type="text" label="Email Address" id="email" />
            <CustomInput type="Password" label=" Password" id="Pass" />
            <div className="mb-3 text-end">
              <Link to="forgot-password">Forgot Password?</Link>
            </div>
            <Link
              className="border-0 px-3 py-2 text-white text-center text-decoration-none fs-5 fw-bold w-100"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              submit
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
