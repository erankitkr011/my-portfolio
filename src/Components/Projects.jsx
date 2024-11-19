import React from "react";
import Lottie from "lottie-react";
import resturent from "../assets/images/resturent.png"

const Projects = () => {
  const projectData = [
    {
      title: "Home Rental App",
      description: [
        "Full-stack web application.",
        "Built with React, Node.js, and MongoDB.",
        "Responsive design with Tailwind CSS.",
        "Implemented RESTful APIs for data handling.",
        "Deployed on AWS EC2 instance.",
      ],
      imageUrl: resturent, // Placeholder image URL
      githubLink: "#",
      liveLink: "https://dularibhawan.store",
    },
    {
      title: "Eat Easy",
      description: [
        "Full-stack web application.",
        "Built with Ejs, Node.js, and MongoDB.",
        "Responsive design with Tailwind CSS.",
        "Implemented RESTful APIs for data handling.",
        "Deployed on render.",
      ],
      imageUrl: resturent, // Placeholder image URL
      githubLink: "https://github.com/erankitkr011/Eat_Easy",
      liveLink: "https://eat-easy-9ehc.onrender.com",
    },
    {
      title: "Project Beta",
      description: [
        "E-commerce platform with secure payment system.",
        "Tech stack: React, Redux, Express, MongoDB.",
        "Integrated Stripe API for payments.",
        "User authentication using JWT and bcrypt.",
        "Real-time order tracking feature.",
      ],
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOkzUOAR6IcznvOqngdw6yy8EnkXdWg5KlA&s", // Placeholder image URL
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center bg-slate-900 md:w-[65%] md:ml-[370px] md:mt-3 rounded-3xl md:h-[90vh] p-8">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-white mb-6">Showcase Our Projects</h1>

      {/* Projects */}
      <div className="w-full space-y-8 overflow-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-slate-800 rounded-lg p-6 shadow-lg"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-2/3 md:pl-6">
              <h2 className="text-2xl font-semibold text-white mb-4">{project.title}</h2>
              <ul className="text-sm text-gray-400 mb-6">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <span className="mr-2 text-green-500">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
