import React, { useContext} from "react";
import { contactIcons } from "../../assets/data";
import { SidebarContext } from "../store/SidebarContext";

const Contact = () => {
  const { observersRef } = useContext(SidebarContext);
  const contactClass =
    "group text-md md:text-xl flex gap-2 items-center hover:scale-105 hover:text-gray-400 transition duration-200 cursor-pointer";
  return (
    <section  id="contact">
      <div className="bg-darkblue w-full">
        <div className="flex flex-col items-start justify-center p-16 md:p-20 space-y-4 text-white">
          <h1 className="text-4xl font-bold ">Contact</h1>
          <p className="">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="flex flex-col animate-fade-up space-y-6">
            {/* phone */}
            <div className={contactClass}>
              <div>{contactIcons.phoneIcon}</div>
              <span>+91 9389772652</span>
            </div>

            {/* email */}
            <div className={contactClass}>
              <div>{contactIcons.emailIcon}</div>
              <a href="mailto:imranansari7248@gmail.com">
                imranansari7248@gmail.com
              </a>
            </div>
            {/* github */}
            <div className={contactClass}>
              <div>{contactIcons.githubIcon}</div>
              <a href="https://github.com/imranansari72">
                github.com/imranansari72
              </a>
            </div>
            {/* linkedin */}
            <div className={contactClass}>
              <div>{contactIcons.linkedinIcon}</div>
              <a href="https://www.linkedin.com/in/imranansari7248/">
                linkedin.com/in/imranansari7248
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
