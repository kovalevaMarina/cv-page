import React from "react";
import SocialItem from "./SocialItem";
import Facebook from "../Icons/Facebook";
import Gitgub from "../Icons/Github";
import Telegram from "../Icons/Telegram";
import Linkedin from "../Icons/Linkedin";

const socials = [
  {
    socialName: "Facebook",
    link: "@marina.koval.25",
    linkHref: "https://www.facebook.com/marina.koval.25/",
    icon: <Facebook className="h-5 w-5" />,
    colorClass: "bg-blue-700",
  },

  {
    socialName: "Gitgub",
    link: "@kovalevaMarina",
    linkHref: "https://github.com/kovalevaMarina",
    icon: <Gitgub className="h-5 w-5" />,
    colorClass: "bg-gray-900",
  },

  {
    socialName: "Telegram",
    link: "@MarinaKovaleva259",
    linkHref: "https://t.me/MarinaKovaleva259",
    icon: <Telegram className="h-5 w-5" />,
    colorClass: "bg-cyan-500",
  },

  {
    socialName: "Linkedin",
    link: "marina-kovaleva-b7470b166",
    linkHref: "https://www.linkedin.com/in/marina-kovaleva-b7470b166/",
    icon: <Linkedin className="h-5 w-5" />,
    colorClass: "bg-sky-600",
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
