import React from "react";
import profilePic from "../assets/images/ak.png";
import home from "../assets/Home.json";
import Lottie from "lottie-react";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-900 md:w-[65%] md:ml-[370px] md:mt-3 rounded-3xl md:h-[90vh]">
      <div className="mt-[-120px]">
        <Lottie animationData={home} className="h-[400px] md:h-[600px]" />
      </div>

      <h1 className="text-white text-5xl font-bold">Hi, I'm Ankit Kumar</h1>
      <p className="text-white mt-3  text-2xl">Full Stack Developer</p>
      <div className=" mt-6">
        <a
          href="https://github.com/erankitkr011"
          className="text-white text-2xl p-5"
        >
          {" "}
          <button className="bg-blue-900 text-white text-lg px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            GitHub
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/erankitkr011/"
          className="text-white text-2xl p-4"
        >
          {" "}
          <button className="bg-blue-900 text-white text-lg px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            linkedin
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
