import React from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </>
  );
};

export default HomePage;
