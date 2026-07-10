"use client"
import React from "react";

const Doodleform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here
    console.log("Form Submitted");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Upload Doodle
        </h1>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Image</label>
          <input
            type="file"
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter doodle name"
            className="w-full border-2 border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Date</label>
          <input
            type="date"
            className="w-full border-2 border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Published By</label>
          <input
            type="text"
            placeholder="Artist name"
            className="w-full border-2 border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Doodleform;