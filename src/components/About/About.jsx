import React from "react";
import { photo } from "../helper/images";

const About = () => {
  return (
    <section className="mb-4">
      <div className="h-30 mb-5 max-w-sm">
        <img
          className="w-full bg-no-repeat"
          src={photo}
          alt="Marina Kovaleva"
        />
      </div>
      <p className="text-md mb-1 font-outfit font-bold tracking-wide text-black dark:text-gainsboro">
        Hi, I'm{" "}
      </p>
      <h1 className="mb-1 font-outfit text-2xl font-medium leading-5 tracking-wider text-black dark:text-azureish-white">
        Marina Kovaleva
      </h1>
      <p className="text-md mb-5 bg-gradient-to-r from-floral to-ultramarine-blue bg-clip-text font-outfit font-medium tracking-[.01em] text-transparent">
        Front-End Developer
      </p>
      <p className="font-normally mb-5 text-xs leading-5 text-fiord dark:text-gainsboro">
        I am looking for a full-time job as a Trainee/Junior Front-End
        Developer. I have ambition to qualify as a professional software
        developer. I am motivated to continue to grow professionally and
        personally.
      </p>
      <div className="mb-5">
        <a
          className="block max-w-xs rounded-md border-2 border-floral py-3 px-4 text-center text-base tracking-wide text-fiord transition-all hover:border-slate-400 hover:bg-gradient-to-r hover:from-floral hover:to-ultramarine-blue hover:text-azureish-white dark:text-crayola dark:hover:text-azureish-white"
          href="./CV_Junior_Frontend_Kovaleva.pdf"
          target="_blank"
        >
          Download CV .pdf
        </a>
      </div>
    </section>
  );
};

export default About;
