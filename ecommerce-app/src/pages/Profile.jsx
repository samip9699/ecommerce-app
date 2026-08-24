import React from "react";

const Profile = () => {

  const email = localStorage.getItem("userEmail");

  return (
    <div className="container my-5">

      <div
        className="card shadow mx-auto p-5"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="text-center mb-4">
          My Profile
        </h2>

        <div className="mb-3">
          <label className="fw-bold">
            Email
          </label>

          <input
            type="text"
            className="form-control"
            value={email || ""}
            readOnly
          />
        </div>

        <button
          className="btn btn-dark w-100"
          onClick={() => alert("Profile Updated Successfully")}
        >
          Update Profile
        </button>

      </div>

    </div>
  );
};

export default Profile;