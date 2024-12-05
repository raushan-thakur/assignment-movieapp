
import React from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";

const Error = ({ message = "Something went wrong. Please try again later!" }) => {
  const navigate = useNavigate();
  return (
    <Layout title={"Error"}>
    <div className="flex  justify-center h-screen bg-gray-100">
      <div className=" mt-16 w-4/12 h-1/3 p-6 bg-white shadow-lg rounded-lg border border-red-200">
        <div className="mt-2 text-center">
          <h2 className="text-lg font-semibold text-gray-800">Error</h2>
          <p className="text-gray-600 mt-2">{message}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none"
          >
            Return to Home Page
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Error;
