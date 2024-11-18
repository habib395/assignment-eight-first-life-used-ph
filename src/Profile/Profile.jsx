import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-base-200">
    <Helmet>
      <title>Profile | LIFE COACH</title>
    </Helmet>
      <div className=" flex w-11/12 mx-auto">
        <div className="hero">
          <div className="flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-3xl font-bold">{user.displayName}</h1>
              <h2 className="text-lg py-6">Email : {user.email}</h2>
            </div>
            <img src={user.photoURL} className="w-72 rounded-lg" />
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 ">
            <h2 className="text-center font-bold py-5">Update Profile</h2>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
