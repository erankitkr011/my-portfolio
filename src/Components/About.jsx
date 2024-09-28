import React from "react";
import profilePic from "../assets/images/ak.png";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-900 md:w-[65%] md:ml-[370px] md:mt-3 rounded-3xl md:h-[90vh] text-white">
      {/* Profile Picture */}
      <img 
        src={profilePic}
        alt="Ankit Kumar" 
        className="w-40 h-40 rounded-full object-cover border-4 border-white mb-6"
      />

      {/* About Me Content */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a Computer Science student at Chitkara University, specializing
          in Full Stack Development, Web3, real-time systems, and AI-powered
          applications. I have hands-on experience with technologies like
          React.js, Node.js, and MongoDB, and enjoy solving real-world problems
          through coding.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          My certifications include the Hack Track (Cyber Security Intermediate
          Certification) and NPTEL's The Joy of Computing using Python. I'm
          always looking to learn more and contribute to meaningful projects.
        </p>
      </div>
    </section>
  );
};

export default About;
