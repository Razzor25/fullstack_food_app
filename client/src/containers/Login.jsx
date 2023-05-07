import React, { useState } from "react";
import { LoginBg, Logo } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* BG image */}
      <img
        src={LoginBg}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />

      {/* {Content box} */}
      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12">
        {/* {Top Logo Section } */}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} className="w-8" alt="" />
          <p className="text-headingColor font-semibold text-2xl">City</p>
        </div>

        {/* {Welcome text} */}
        <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
        <p className="text-xl text-textColor mb-4">
          {isSignUp ? "Sign Up" : "Sign In"} with following
        </p>

        {/* {input section} */}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />
          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirmPassword}
              inputStateFunc={setConfirmPassword}
              type="password"
              isSignUp={isSignUp}
            />
          )}
          {isSignUp ? (
            <p className="text-xl">
              Already have an account.{" "}
              <motion.button
                {...buttonClick}
                className="text-red-600 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(false)}
              >
                Sign-in here.
              </motion.button>
            </p>
          ) : (
            <p className="text-xl">
              Doesn't have account.{" "}
              <motion.button
                {...buttonClick}
                className="text-red-600 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(true)}
              >
                Create here.
              </motion.button>
            </p>
          )}

          {/* button Section */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className="w-full py-2 px-4 rounded-md bg-red-400 text-white text-xl cursor-pointer capitalize hover:bg-red-600"
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className="w-full py-2 px-4 rounded-md bg-red-400 text-white text-xl cursor-pointer capitalize hover:bg-red-600"
            >
              Sign In
            </motion.button>
          )}
        </div>

        <div className="flex flex-row items-center justify-between gap-16">
          <div className="w-24 h-[2px] rounded-md bg-white" />
          <p className="text-white">or</p>
          <div className="w-24 h-[2px] rounded-md bg-white" />
        </div>

        {isSignUp ? (
          <motion.div
            {...buttonClick}
            className="flex items-center justify-center px-20 py-2 mt-4 bg-lightOverlay bg-blur-md cursor-pointer rounded-3xl gap-4 hover:bg-white"
          >
            <p>Create with Google</p>
            <FcGoogle className="text-3xl" />
          </motion.div>
        ) : (
          <motion.div
            {...buttonClick}
            className="flex items-center justify-center px-20 py-2 mt-4 bg-lightOverlay bg-blur-md cursor-pointer rounded-3xl gap-4 hover:bg-white"
          >
            <p>Sign-in with Google</p>
            <FcGoogle className="text-3xl" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Login;
