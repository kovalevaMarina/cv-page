import React from "react";
import SocialItem from "./SocialItem";
import Instagram from "../Icons/Instagram";
import Dribbble from "../Icons/Dribbble";
import Twitter from "../Icons/Twitter";
import Linkedin from "../Icons/Linkedin";

const socials = [
  {
    socialName: "Instagram",
    link: "@angelolibero.designs",
    icon: <Instagram />,
    colorClass: "gradient-to-r from-orange-500 to-pink-500",
  },

  {
    socialName: "Dribbble",
    link: "@angelolibero-designs",
    icon: <Dribbble />,
    colorClass: "pink-500",
  },

  {
    socialName: "Twitter",
    link: "@angeloldesigns",
    icon: <Twitter />,
    colorClass: "cyan-500",
  },

  {
    socialName: "Linkedin",
    link: "angelo-libero-a42a0438",
    icon: <Linkedin />,
    colorClass: "sky-600",
  },
];

const Socials = () => {
  return (
    <div className="mb-4 border-t border-solid border-gunmetal pt-4">
      <h4 className="title-h4 mb-3">Socials</h4>
      <ul>
        {socials.map((social, index) => (
          <SocialItem key={index} {...social} />
        ))}
      </ul>
    </div>
  );
};

export default Socials;
