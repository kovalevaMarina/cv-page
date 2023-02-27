import React from "react";
import { photo } from "../helper/images";

const About = () => {
  return (
    <div className="about">
      <div className="about-img w-40 h-20 overflow-hidden mb-4">
        <img
          className="w-full bg-no-repeat"
          src={photo}
          alt="Marina Kovaleva"
        />
      </div>
      <h1 className="font-dmsans text-base leading-5 text-azureish-white">
        Marina Kovaleva
      </h1>
      <p className="title-h2 bg-clip-text text-transparent bg-gradient-to-r from-floral to-ultramarine-blue">
        UX Designer
      </p>
      <blockquote>
        <p className="text-gainsboro">
          People ignore design that ignore people.
        </p>
        <span>Frank Kimero</span>
      </blockquote>
    </div>
  );
};

export default About;
