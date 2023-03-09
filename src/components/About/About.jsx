import React from "react";
import { photo } from "../helper/images";

const About = () => {
  return (
    <div className="mb-4">
      <div className="h-30 mb-4 max-w-sm">
        <img
          className="w-full bg-no-repeat"
          src={photo}
          alt="Marina Kovaleva"
        />
      </div>
      <h1 className="mb-2 font-outfit text-2xl font-medium leading-5 text-azureish-white">
        Marina Kovaleva
      </h1>
      <p className="text-md mt-1 mb-4 bg-gradient-to-r from-floral to-ultramarine-blue bg-clip-text font-outfit font-medium tracking-[.01em] text-transparent">
        Front-End Developer
      </p>
      <p className="font-normally mb-0.5 text-xs leading-5 text-gainsboro">
        I am looking for a full-time job as a Trainee/Junior Front-End
        Developer. I have ambition to qualify as a professional software
        developer. I am motivated to continue to grow professionally and
        personally.
      </p>
    </div>
  );
};

export default About;
