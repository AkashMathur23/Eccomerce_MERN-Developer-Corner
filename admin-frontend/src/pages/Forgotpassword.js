import React from "react";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
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
          <h3 className="text-center title">Forget Password</h3>
          <p className="text-center">
            Please enter registered email to get reset password on email
          </p>
          <form action="">
            <CustomInput type="Password" lable="New Password" id="Pass" />
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              send link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;