import React from "react";
import profilePic from "../assets/images/ak.png";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-900 md:w-[65%] md:ml-[370px] md:mt-3 rounded-3xl md:h-[90vh] text-white p-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Enhanced Title with Gradient */}
        <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent animate-fadeInUp text-center">
          Welcome
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 animate-fadeInUp">
          {/* Profile Picture with Enhanced Design */}
          <div className="relative w-full md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
            {/* Tilted Square Background */}
            <div className="absolute w-[350px] h-[350px] bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg transform rotate-6 -z-10 shadow-xl"></div>

            {/* Profile Image with Hover Effect */}
            <div className="w-[350px] h-[350px] overflow-hidden rounded-lg shadow-2xl ring-4 ring-emerald-500/20 transform hover:scale-105 transition-transform duration-300">
              <img
                src={profilePic}
                alt="Portrait of Ankit"
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm <span className="font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">ANKIT KUMAR</span>, a Full Stack Developer with a passion for creating dynamic web applications. Skilled in JavaScript, React.js, Node.js, and MongoDB, I aim to deliver exceptional user experiences.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              I thrive on collaboration and am always eager to learn new technologies to enhance my skills and drive innovation in software development.
            </p>

            {/* Skills Section */}
            <div className="bg-gray-800 rounded-lg p-6 mt-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Core Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>JavaScript | React.js | Node.js</li>
                <li>HTML | CSS | Tailwind CSS</li>
                <li>RESTful APIs | MongoDB</li>
                <li>Version Control | Git | GitHub</li>
                <li>Postman for API Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
