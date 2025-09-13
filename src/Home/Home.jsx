import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-[6rem] font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      
    </section>
  );
};

export default Home;
