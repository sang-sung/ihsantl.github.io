import React from "react";
import Head from "./section/Head";
import Information from "./section/Information";
import Personal from "./section/Personal";
import "./main.css";
import Experience from "./section/Experience";
import Education from "./section/Education";
import Skill from "./section/Skill";
import Contact from "./section/Contact";

export default function Main() {
  return (
    <div className="main">
      <Head />
      <div id="">
        <Information />
      </div>
      <div
        id="personal"
        className="pt-[90px] px-5 bg-custom-50 text-custom-600 "
      >
        <Personal />
      </div>
      <div id="experience" className="py-[90px] px-5 bg-custom-300 text-white">
        <Experience />
      </div>
      <div
        id="education"
        className="pt-[90px] px-5 bg-custom-50 text-custom-600 "
      >
        <Education />
      </div>
      <div id="skill" className="py-[90px] px-5 bg-custom-300 text-white">
        <Skill />
      </div>
      <div
        id="contact"
        className="pt-[90px] px-5 bg-custom-50 text-custom-600 "
      >
        <Contact />
      </div>
    </div>
  );
}
