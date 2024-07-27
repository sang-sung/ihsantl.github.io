import React, { useEffect } from "react";

import Head from "./section/Head";
import Information from "./section/Information";
import Personal from "./section/Personal";
import Experience from "./section/Experience";
import Education from "./section/Education";
import Skill from "./section/Skill";
import Contact from "./section/Contact";

import "./main.css";
import "../css/slick.css";

import imgProfile from "../assets/profile.jpg";

export default function Main() {
  return (
    <div className="main">
      <Head />
      <section id="information">
        <Information />
      </section>
      <section
        id="personal"
        className="py-[90px] px-5 bg-custom-50 text-custom-600"
      >
        <Personal />
      </section>
      <section
        id="experience"
        className="py-[90px] px-5 bg-custom-300 text-white"
      >
        <Experience />
      </section>
      <section
        id="education"
        className="py-[90px] px-5 bg-custom-50 text-custom-600"
      >
        <Education />
      </section>
      <section
        id="skill"
        className="relative py-[90px] px-5 bg-local text-custom-500"
      >
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${imgProfile})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundPositionY: "-300px",
            backgroundSize: "cover",
            filter: "grayscale(80%)",
            opacity: 0.2,
          }}
        ></div>
        <div className="relative">
          <Skill />
        </div>
      </section>
      <section
        id="contact"
        className="pt-[90px] pb-10 px-5 bg-custom-50 text-custom-600"
      >
        <Contact />
      </section>
    </div>
  );
}
