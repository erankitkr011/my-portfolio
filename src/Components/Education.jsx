import React from "react";
import Lottie from "lottie-react";
import educationAnimation from "../assets/Education.json";

const Education = () => {
  const educationData = [
    {
      institution: "St. Joseph Academy",
      qualification: "10th Grade",
      year: "2019",
      percentage: "82%",
      address: "Khandakpar, Biharsharif, Nalanda",
    },
    {
      institution: "SPM College",
      qualification: "12th Grade",
      year: "2021",
      percentage: "78%",
      address: "Biharsharif, Nalanda, Bihar",
    },
    {
      institution: "Chitkara University",
      qualification: "Bachelor of Technology in Computer Science",
      year: "2022 - 2026",
      cgpa: "9.0",
      address: "Himchal Pradesh",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center bg-slate-900 md:w-[65%] md:ml-[370px] md:mt-3 rounded-3xl md:h-[90vh] p-8">
      <div className="w-full flex flex-col items-center">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-white mb-6">Education</h1>

        {/* Lottie Animation */}
        <div className="flex justify-center items-center mb-6">
          <Lottie
            animationData={educationAnimation}
            loop={true}
            className="w-[300px]"
          />
        </div>

        {/* Education Details */}
        <div className="text-white w-full md:w-4/5 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
          {/* First Row: First Two Items */}
          {educationData.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold">{item.institution}</h2>
              <p className="text-sm text-gray-400">
                {item.qualification} ({item.year})
              </p>
              {item.percentage && (
                <p className="text-sm mt-2">
                  <span className="font-bold">Percentage:</span>{" "}
                  {item.percentage}
                </p>
              )}
              {item.cgpa && (
                <p className="text-sm mt-2">
                  <span className="font-bold">CGPA:</span> {item.cgpa}
                </p>
              )}
              {item.specialization && (
                <p className="text-sm mt-2">
                  <span className="font-bold">Specialization:</span>{" "}
                  {item.specialization}
                </p>
              )}
              <p className="text-sm mt-2 text-gray-400">{item.address}</p>
            </div>
          ))}

          {/* Second Row: One Item in the Center */}
          <div className="w-full md:col-span-2 flex justify-center">
            {educationData.slice(2).map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800 rounded-lg shadow-lg w-full md:w-2/3"
              >
                <h2 className="text-2xl font-semibold">{item.institution}</h2>
                <p className="text-sm text-gray-400">
                  {item.qualification} ({item.year})
                </p>
                {item.percentage && (
                  <p className="text-sm mt-2">
                    <span className="font-bold">Percentage:</span>{" "}
                    {item.percentage}
                  </p>
                )}
                {item.cgpa && (
                  <p className="text-sm mt-2">
                    <span className="font-bold">CGPA:</span> {item.cgpa}
                  </p>
                )}
                {item.specialization && (
                  <p className="text-sm mt-2">
                    <span className="font-bold">Specialization:</span>{" "}
                    {item.specialization}
                  </p>
                )}
                <p className="text-sm mt-2 text-gray-400">{item.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
