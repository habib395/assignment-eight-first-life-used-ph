import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {
  const {handleLogin, handleLogOut} = useContext(AuthContext);
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    handleLogin(email, password)
}
  return (
    <div>
    <form
      action=""
      onSubmit={handleSubmit}
      className="card-body bg-base-200 min-h-screen w-1/2 mx-auto rounded-lg my-10"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          name="email"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          name="password"
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-accent">Login</button>
      </div>
    </form>
      <button className="btn btn-accent" onClick={handleLogOut}>logout</button>
      New to the website please <NavLink to="/register">register</NavLink>
     <button onClick={handleLogin}>Google Login</button>
      New to the website please <NavLink to="/register">register</NavLink>
    
    </div>
  );
};

export default Login;
