import React from "react";
import { Link } from "react-router-dom";

function LoginSignUp() {
  return (
    <div
      className="text-white h-[91vh]  flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        background:
          "url(https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="">
        <h1>Login</h1>
        <form action="">
        <div className="">
          <input type="email" name="" id="" />
          <label htmlFor="">Your Email</label>
        </div>
        <div className="">
          <input type="email" name="" id="" />
          <label htmlFor="">Your Email</label>
        </div>
        <div>
            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me"></label>
            </div>
            <span className="">Forgot Password?</span>
        </div>
        <button type="submit" className="">Login</button>

        <div className="">
            {/* Link from npm i react-router-dom */}
            <span>New Here? <Link to='Register'>Create An Account</Link></span>
        </div>
        
        </form>
      </div>
    </div>
  );
}

export default LoginSignUp;
