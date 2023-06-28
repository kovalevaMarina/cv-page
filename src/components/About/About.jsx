import React from "react";
import { photo } from "../helper/images";

const About = () => {
  return (
    <section className="mb-4 border-b border-solid border-azureish-white pb-6 pt-4 dark:border-gunmetal">
      <div className="flex flex-col items-center xl:items-stretch">
        <div className="avatar mb-4 justify-center">
          <div className="w-44 h-44 rounded-full ping">
            <img
              className="w-full h-full bg-no-repeat"
              src={photo}
              alt="Marina Kovaleva"
            />
          </div>
        </div>
        <p className="text-md mb-1 font-outfit font-bold tracking-wide text-black dark:text-gainsboro">
          Hi, I'm{" "}
        </p>
        <h1 className="mb-1 font-outfit tracking-in-expand-fwd text-2xl font-medium leading-5 tracking-wider text-black dark:text-azureish-white">
          Marina Kovaleva
        </h1>
        <p className="text-md mb-5 bg-gradient-to-r from-floral to-ultramarine-blue bg-clip-text font-outfit font-medium tracking-[.01em] text-transparent">
          Front-End Developer
        </p>
        <p className="font-normally mb-5 max-w-3xl text-xs leading-5 text-fiord dark:text-gainsboro text-center xl:text-left">
          Responsible developer with one year of experience in personal projects. Open to a new  opportunities and collaboration.
        </p>
         <div class="flex max-w-xs">
          {/* TODO: оновинити pdf резюме */}
          <a className="relative z-10 cursor-pointer items-center w-full overflow-hidden rounded-xl p-[1px]" href="./CV_Junior_Frontend_Kovaleva.pdf" target="_blank">
            <div class="animate-rotate absolute inset-0 h-full w-full rounded-md bg-[conic-gradient(#A478E8_20deg,transparent_120deg)]"></div>
            <span class="relative z-50 block rounded-xl bg-azureish-white dark:bg-gunmetal px-10 py-4 transition-all duration-700 text-center text-base tracking-wide text-waterloo hover:border-slate-400 hover:bg-gradient-to-r hover:from-floral hover:to-ultramarine-blue hover:text-azureish-white dark:text-crayola dark:hover:text-azureish-white">Download CV .pdf</span>
          </a>
         </div>
      </div>
    </section>
  );
};

export default About;
