import React from "react";
import { photo } from "../helper/images";

const About = () => {
  return (
    <div className="about mb-4">
      <div className="about-img w-40 h-20 overflow-hidden mb-4">
        <img
          className="w-full bg-no-repeat"
          src={photo}
          alt="Marina Kovaleva"
        />
      </div>
      <h1 className="font-outfit text-base font-medium leading-5 text-azureish-white">
        Marina Kovaleva
      </h1>
      <p className="font-outfit text-xs font-medium tracking-[.01em] mt-1 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-floral to-ultramarine-blue">
        Front-End Developer
      </p>
      <blockquote>
        <p className="text-[9px] leading-3 font-medium tracking-[.02em] text-gainsboro mb-0.5">
          People ignore design that ignore people.
        </p>
        <p className="font-dmsans text-[6px] leading-[8px] not-italic font-normal text-crayola">
          Frank Kimero
        </p>
      </blockquote>
    </div>
  );
};

export default About;
