import { button } from "motion/react-client";
import React from "react";
import { Link } from "react-router";

const Error = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b form-gray-300 text-center px-6">
      <img
        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
        alt="404 Not Found"
        className="w-40 md:w-72  animate-bounce"
      />
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Oops!</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        {message || "Something went wrong while loading data."}
      </p>
      {onRetry ? (
        <button
          onclick={onRetry}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full duration-300 shadow-md hover:shadow-lg"
        >
          🔄 Retry
        </button>
      ) : (
        <Link
          to= "/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration300 shadow-md hover:shadow-lg"
        >
          {" "}
          ⬅ Back to Home
        </Link>
      )}
    </div>
  );
};

export default Error;
