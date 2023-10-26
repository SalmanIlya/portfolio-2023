import React from "react";

const Projects = () => {
  return (
    <div classNameName="projects">
      <div classNameName="skills_section text-center flex flex-col justify-center items-center">
        <h1 classNameName="text-5xl font-extrabold pt-10 hover:text-6xl  transition-all duration-300">
          Projects
        </h1>
        <div classNameName="border-b-4 border-yellow-600 w-40 rounded-full mt-2  hover:w-48 transition-all duration-300 "></div>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/images/1.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
