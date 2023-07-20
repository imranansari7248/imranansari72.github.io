import React from "react";

const About = () => {
  return (
    <section id="about">
      {/* card */}
      <div className="relative container min-h-screen w-full bg-center bg-cover">
        {/* main  */}
        <div className="relative flex items-center justify-center w-full flex-col p-10 md:p-16">
          <h2 className="uppercase text-4xl font-bold  text-darkblue">About</h2>

          <div className="mt-10 text-sm font-roboto font-light text-darkblue px-8 py-10 rounded-lg shadow-xl leading-7 md:text-xl md:leading-9">
            <p>
              I am a full stack web developer. I enjoy problem-solving and
              coding. Always strive to bring 100% to the work I do. I have
              worked on technologies like React, Node.js, JavaScript,ExpressJS,
              MySQL, PostgreSQL, MongoDB, HTML5,tailwindCSS, CSS, Python, C++
              during my bachelor's. I have 19 months of professional work
              experience which helped me strengthen my experience in
              React,JavaScript, ExpressJS, CSS and TailwindCSS. I am passionate
              about developing complex applications that solve real-world
              problems impacting millions of users.
            </p>

            <div className="flex space-x-2 text-lg md:text-xl mt-4 md:mt-6">
              <h2 className="font-bold">Languages:</h2>
              <p>Python, JavaScript, C, C++, HTML/CSS</p>
            </div>
            <div className="flex space-x-2 text-lg md:text-xl mt-6">
              <h2 className="font-bold">Databases:</h2>
              <p>MySQL, PostgreSQL, MongoDB</p>
            </div>
            <div className="flex space-x-2 text-lg md:text-xl mt-6">
              <h2 className="font-bold">Libraries:</h2>
              <p>Redux, Axios, NumPy, Pandas</p>
            </div>
            <div className="flex space-x-2 text-lg md:text-xl mt-6">
              <h2 className="font-bold">Frameworks:</h2>
              <p>React.js, Express.js, Node.js, TailwindCSS </p>
            </div>
            <div className="flex space-x-2 text-lg md:text-xl mt-6">
              <h2 className="font-bold">Tools & Technologies:</h2>
              <p>Git, AWS, Heroku</p>
            </div>

            <p className="mt-4">
              Looking for an opportunity to work in a challenging position
              combining my skills in Software Engineering, which provides
              professional development, interesting experiences and personal
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
