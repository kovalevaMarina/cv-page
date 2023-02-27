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
  },

  {
    socialName: "Dribbble",
    link: "@angelolibero-designs",
    icon: <Dribbble />,
  },

  {
    socialName: "Twitter",
    link: "@angeloldesigns",
    icon: <Twitter />,
  },

  {
    socialName: "Linkedin",
    link: "angelo-libero-a42a0438",
    icon: <Linkedin />,
  },
];

const Socials = () => {
  return (
    <div className="socials">
      <h3>Socials</h3>
      <ul>
        {socials.map((social, index) => (
          <SocialItem key={index} {...social} />
        ))}
      </ul>
    </div>
  );
};

export default Socials;
