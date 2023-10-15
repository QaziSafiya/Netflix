import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const signoutfunction = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full bg-black ">
      <div>
        <img className="w-[250px]" src="./logo.png" alt="" />
      </div>
      {user && (
        <div>
          <img
            className="bg-white w-8 h-8 rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <button className="text-white" onClick={signoutfunction}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
