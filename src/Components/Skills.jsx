import React from "react";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import animationData from "../assets/skills.json"; // Your Lottie animation

const Skills = () => {
  const skills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Socket.IO", category: "Backend" },
    { name: "API Handling", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "VS Code", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "C", category: "Programming" },
    { name: "C++", category: "Programming" },
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
  ];

  // Filter for combined categories
  const fullStackSkills = skills.filter(
    (skill) =>
      skill.category === "Frontend" ||
      skill.category === "Backend" ||
      skill.category === "Database"
  );
  const programmingAndTools = skills.filter(
    (skill) => skill.category === "Programming" || skill.category === "Tools"
  );

  // Slider settings with autoplay and no dots
  const settings = {
    autoplay: true, // Enables auto-scroll
    autoplaySpeed: 2000, // Auto-scroll every 2 seconds
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 1, // Scroll 1 slide at a time
    dots: false, // Disable navigation dots
    responsive: [
      {
        breakpoint: 1024, // For tablets and desktops
        settings: {
          slidesToShow: 3, // Show 3 slides at once
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 2, // Show 2 slides at once
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // For smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide at once
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="flex flex-col justify-center items-center bg-slate-900 md:w-[65%] md:ml-[370px] md:mt-3 rounded-3xl md:h-[90vh] text-white">
      <h2 className="text-4xl md:mt-6 font-bold text-white mb-6 text-center">Skills</h2>

      {/* Lottie Animation */}
      <div className="w-full h-1/6 flex justify-center items-center">
        <Lottie animationData={animationData} loop={true}  className="w-[400px] md:mt-24"/>
      </div>

      <div className="container mx-auto px-6 h-5/6 md:mt-32">

        {/* Full Stack Skills */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-white mb-4 text-center">Full Stack Skills</h3>
          <Slider {...settings}>
            {fullStackSkills.map((skill, index) => (
              <div key={index} className="p-4">
                <div className="bg-gray-200 p-4 rounded-lg text-center h-[100px]">
                  <p className="text-xl font-bold text-blue-900">{skill.name}</p>
                  <p className="text-sm text-gray-600">{skill.category}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Programming & Tools */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-white mb-4 text-center">Programming & Tools</h3>
          <Slider {...settings}>
            {programmingAndTools.map((skill, index) => (
              <div key={index} className="p-4">
                <div className="bg-gray-200 p-4 rounded-lg text-center h-[100px]">
                  <p className="text-xl font-bold text-blue-900">{skill.name}</p>
                  <p className="text-sm text-gray-600">{skill.category}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Skills;
