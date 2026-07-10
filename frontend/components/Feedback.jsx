import React from "react";

const Feedback = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Feedback</h1>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Review</label>
          <textarea
            rows={5}
            placeholder="Write your feedback..."
            className="w-full p-2 border-2 border-gray-300 rounded-lg outline-none resize-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;