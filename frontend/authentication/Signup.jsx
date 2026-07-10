import React from "react";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        <div className="mb-4">
          <p className="font-semibold mb-1">Username</p>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-1">Email</p>
          <input
            type="email"
            className="w-full border-2 border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-1">Password</p>
          <input
            type="password"
            className="w-full border-2 border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
          />
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg">
          Sign Up
        </button>

        <p className="text-center mt-4">
          Already registered?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;