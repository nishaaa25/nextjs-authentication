"use client";
import { authFormSubmit } from "@/actions/submit";
import React, { useActionState } from "react";

export default function AuthForm() {
  const [state, formAction] = useActionState(authFormSubmit, {});

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p className="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-lg font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white relative ">
        <form className="bg-white w-1/2 relative" action={formAction}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again</h1>
          <p className="text-base font-normal text-gray-600 mb-7">
            Welcome Back
          </p>

          {/* Full Name Input */}
          <div className="mb-6 relative">
            <input
              className="px-3 outline-purple-400 py-2 border-2 w-full rounded-lg"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full name"
              defaultValue={state?.userData?.fullname}
            />
            {state?.errors?.fullName && (
              <p className="text-red-500 text-xs mt-2 ml-1">
                {state.errors.fullName}
              </p>
            )}
          </div>
          {/* User Name Input */}
          <div className="relative mb-6">
            <input
              className="px-3 outline-purple-400  border-2 py-2 w-full rounded-lg relative"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              defaultValue={state?.userData?.username}
            />
            {state?.errors?.userName && (
              <p className="text-red-500 text-xs mt-2 ml-1">
                {state.errors.userName}
              </p>
            )}
          </div>
          {/* User Email Input */}
          <div className="relative mb-6">
            <input
              className="px-3 outline-purple-400  border-2 py-2 rounded-lg w-full relative"
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              defaultValue={state?.userData?.email}
            />
            {state?.errors?.email && (
              <p className="text-red-500 text-xs mt-2 ml-1">
                {state.errors.email}
              </p>
            )}
          </div>
          {/* User Password Input */}
          <div className="relative mb-10">
            <input
              className="px-3 outline-purple-400 border-2 py-2 rounded-lg w-full relative"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              defaultValue={state?.userData?.password}
            />
            {state?.errors?.password && (
              <p className="text-red-500 text-xs mt-2 ml-1">
                {state.errors.password}
              </p>
            )}
          </div>
          {/*Form Submit Button */}
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-lg text-white font-semibold mb-2"
          >
            Sign Up
          </button>
          <span className="text-base ml-2 hover:text-blue-500 cursor-pointer">
            Don&apos;t have an account?
          </span>
          {state?.message && (
            <p className="text-xs w-full py-2 rounded-md bg-green-600 text-center mt-6 text-white ">
              {state.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
