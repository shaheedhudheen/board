import googleLogo from "../assets/google.svg";
import appleLogo from "../assets/apple.svg";

import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

const SignInPage = () => {
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="bg-black flex justify-center items-center font-montserrat font-bold text-7xl">
        <div>
          <p className="text-white">Board.</p>
        </div>
      </div>

      <div className="bg-[#F5F5F5] col-span-2 flex items-center justify-center">
        <div className="flex gap-7 flex-col">
          <div>
            <h2 className="text-4xl font-montserrat font-bold">
              {location.pathname === "/register" ? "Sign Up" : "Sign In"}
            </h2>
            <p className="font-lato text-base font-normal">
              {location.pathname === "/register"
                ? "Create a New Account"
                : "Sign in to your account"}
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-2 bg-white rounded-[10px] px-4 py-2 items-center cursor-pointer">
              <img src={googleLogo} alt="google icon" />
              <p className="whitespace-nowrap text-xs font-montserrat text-[#858585]">
                Sign in with Google
              </p>
            </div>
            <div className="flex gap-2 bg-white rounded-[10px] px-4 py-2 items-center cursor-pointer">
              <img src={appleLogo} alt="apple logo" />
              <p className="whitespace-nowrap text-xs font-montserrat text-[#858585]">
                Sign in with Apple
              </p>
            </div>
          </div>
          <Outlet />
          <div>
            <p className="text-center">
              {location.pathname === "/register"
                ? "Already have an account? "
                : " Don’t have an account?"}
              <Link
                to={location.pathname === "/register" ? "/" : "/register"}
                href=""
                className="text-[#346BD4]"
              >
                {location.pathname === "/register" ? "Sign In" : "Sign Up"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
