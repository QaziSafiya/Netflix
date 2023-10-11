import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [signup, setSignup] = useState(true);
  const handlebutton = () => {
    setSignup(!signup);
  };
  return (
    <div className="w-full h-full flex ">
      <Header />
      <div className="w-full  h-full  ">
        <img
          className="w-full h-screen object-fill "
          src="https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg"
          alt=""
        />
      </div>
      <div className="w-full h-full flex absolute bg-black/20" />

      <form
        action=" "
        className="relative w-[400px] ml-[-1000px] mt-[90px] bg-black/80"
      >
        {signup ? (
          <h1 className="text-white mt-8 mx-10 text-2xl">Sign In</h1>
        ) : (
          <h1 className="text-white mt-8 mx-10 text-2xl">Sign up</h1>
        )}

        {!signup && (
          <input
            className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm bg-gray-800 "
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm bg-gray-800 "
          type="text"
          placeholder="Email or Phone number"
        />
        <input
          className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm text-gray-400 bg-gray-800 "
          type="text"
          placeholder="Password"
        />

        <button className="p-2 mt-10 ml-10 text-center w-[300px] rounded-sm bg-red-700 text-white">
          Sign In
        </button>

        <div className="flex text-white  mt-4 ">
          <div className="flex w-22 ml-7 ">
            <input type="checkbox" className="w-4 m-2" />
            <p className="mx-2"> Remember me</p>
          </div>
          <div className="ml-[70px] flex justify-end  w-22 ">
            <p>Need help ?</p>
          </div>
        </div>

        <div className=" h-30 mt-[60px] text-white w-[300px]  ml-10">
          <p onClick={handlebutton} className="cursor-pointer">
            {signup ? " New to MovieReels ?" : "Already registered ?"}{" "}
            <span className="font-bold">
              {signup ? "Sign up now." : "Sign In now"}
            </span>
          </p>
          <p className="mt-6">
            This page is protected by Google raCAPTCHA to ensure you are no a
            bot . <span className="text-blue-400">Learn more.</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
