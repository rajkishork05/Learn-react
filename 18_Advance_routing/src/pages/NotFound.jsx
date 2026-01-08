import React from "react";
import { Link , useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black text-white px-4">
      
      {/* 404 */}
      <h1 className="text-8xl font-extrabold tracking-widest text-gray-700">
        404
      </h1>

      {/* Message */}
      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-400 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <button
        onClick={()=> navigate("/")}
        className="mt-6 px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition"
      >
        Go Back Home
      </button>

    </div>
  );
};

export default NotFound;
