import React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Experience = () => {
  return (
    <section id="experience">
      <div className=" flex flex-col space-y-10 items-center justify-center relative py-12 container min-h-screen bg-darkblue text-darkblue">
        <h2 className=" uppercase text-4xl font-bold text-center  text-cream">
          Experience
        </h2>

        {/* ex-2 */}
        <div className="bg-cream text-darkblue flex flex-col max-w-sm md:max-w-2xl rounded-lg">
          <div className="flex flex-col justify-between items-center rounded-lg shadow-sm shadow-white px-4">
            {/* main header */}
            <div className="flex flex-col items-center justify-between w-full pb-2 pt-4 md:space-x-20 md:flex-row border-b border-gray-400">
              <h2 className="text-xl uppercase">College Web Team</h2>
              <h2 className="text-lg">Webmaster</h2>
            </div>

            {/* main content */}
            <div className= "m-8 font-roboto text-sm leading-6 md:leading-9 md:text-md">
              <ul className=" list-disc">
                <li>
                  Led the college web team as the Webmaster, overseeing the
                  development and maintenance of the college website.
                </li>
                <li>
                  Managed a team of web developers and designers, coordinating
                  their efforts to ensure seamless collaboration and timely
                  delivery.
                </li>
                <li>
                  Utilized React.js and Express.js to create interactive and
                  dynamic features on the college website, enhancing the user
                  experience.
                </li>
                <li>
                  Implemented best practices in web development, including
                  responsive design, accessibility, and optimization techniques.
                </li>
                <li>
                  <span className="px-2 font-bold">Tools:</span>
                  React.js, Express.js, Node.js, MySQL, HTML/CSS, JavaScript,
                </li>
              </ul>
              <div className="mt-4">
                August 2021 - Present | GBPUAT, Pantnagar
              </div>
            </div>
          </div>
        </div>
        {/* ex -1 */}
        <div className="bg-cream text-darkblue flex flex-col max-w-sm md:max-w-2xl rounded-lg">
          <div className="flex flex-col justify-between items-center rounded-lg shadow-sm shadow-white px-4">
            {/* main header */}
            <div className="flex flex-col items-center justify-between w-full pb-2 pt-4 md:space-x-20 md:flex-row border-b border-gray-400">
              <h2 className="text-xl uppercase">Student Data Manager App</h2>
              <h2 className="text-lg">Personal Project</h2>
            </div>

            {/* main content */}
            <div className="m-8 font-roboto text-sm leading-6 md:leading-9 md:text-md">
              <ul className=" list-disc">
                <li>
                  Developed a Student Data Manager application as a personal
                  project during my time at JNV, Haridwar.
                </li>
                <li>
                  Created the application using C++, utilizing SQL and Excel
                  sheets for efficient storage and management of student data.
                </li>
                <li>
                  Integrated Excel sheets as an interface to facilitate data
                  entry and retrieval by school staff.
                </li>
                <li>
                  Collaborated closely with school administrators and teachers
                  to understand their requirements and ensure the application
                  met their needs.
                </li>
                <li>
                  <span className="px-2 font-bold">Tools:</span>
                  C++, SQL, Excel
                </li>
              </ul>
              <div className="mt-4">
                December 2018 - February 2019 | JNV, Haridwar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
