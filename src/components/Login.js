import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { validateData } from "../utils/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
const Login = () => {
  const [signup, setSignup] = useState(true);
  const handlebutton = () => {
    setSignup(!signup);
  };

  /// validation

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // using use state

  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  const handleclickvalidation = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = validateData(
      email.current.value,
      password.current.value,
      fullname.current.value
    );
    setError(message);

    if (message) return;

    //sign in/sign up

    if (!signup) {
      // sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/143307549?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...

              navigate("/browse");
            })
            .catch((error) => {
              setError(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
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
        onSubmit={(e) => e.preventDefault()}
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
            ref={fullname}
            className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm bg-gray-800 "
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          // onChange={(e) => setEmail(e.target.value)}
          className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm bg-gray-800 text-white "
          type="text"
          placeholder="Email or Phone number"
        />

        <input
          ref={password}
          // onChange={(e) => setPassword(e.target.value)}
          className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm text-gray-400 bg-gray-800 "
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700">{error}</p>
        <button
          className="p-2 mt-10 ml-10 text-center w-[300px] rounded-sm bg-red-700 text-white"
          onClick={handleclickvalidation}
        >
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
