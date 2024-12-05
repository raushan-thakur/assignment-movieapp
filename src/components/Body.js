import React from "react";
import Layout from "../Layout/Layout";

const Body = () => {
  return (
    <Layout title={"Movie-HomePage"}>
      <div className="h-screen w-full bg-[radial-gradient(circle,_rgba(0,0,0,1)_0%,_rgba(54,19,108,1)_100%)] flex flex-col gap-3">
        <div className="text-white flex justify-center pt-52">
          <h1 className=" text-2xl">Namaste!!!</h1>
        </div>
        <div className="text-white flex items-center justify-center ">
          <h1 className=" text-2xl">Innovision AI Assignment - Movie App</h1>
    
        </div>
        <div className="text-white flex items-center justify-center ">
          <h1 className=" ">Made with 🤍 by Raushan Thakur.</h1>
    
        </div>
      </div>
    </Layout>
  );
};

export default Body;
