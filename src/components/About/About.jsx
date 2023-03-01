import React from "react";
import { photo } from "../helper/images";

const About = () => {
  return (
    <div className="about mb-4">
      <div className="about-img mb-4 h-20 w-40 overflow-hidden">
        <img
          className="w-full bg-no-repeat"
          src={photo}
          alt="Marina Kovaleva"
        />
      </div>
      <h1 className="font-outfit text-base font-medium leading-5 text-azureish-white">
        Marina Kovaleva
      </h1>
      <p className="mt-1 mb-4 bg-gradient-to-r from-floral to-ultramarine-blue bg-clip-text font-outfit text-xs font-medium tracking-[.01em] text-transparent">
        Front-End Developer
      </p>
      <blockquote className="relative">
        <span className="leading-none; absolute -top-3 -left-3 mr-2 font-outfit text-2xl text-crayola opacity-25">
          &ldquo;
        </span>
        <p className="mb-0.5 text-[9px] font-medium leading-3 tracking-[.02em] text-gainsboro">
          People ignore design that ignore people.
        </p>
        <p className="font-dmsans text-[6px] font-normal not-italic leading-[8px] text-crayola">
          Frank Kimero
        </p>
      </blockquote>
    </div>
  );
};

export default About;
