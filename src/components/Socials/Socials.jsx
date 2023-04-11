import React from "react";
import SocialItem from "./SocialItem";
import Facebook from "../Icons/Facebook";
import Gitgub from "../Icons/Github";
import Telegram from "../Icons/Telegram";
import Linkedin from "../Icons/Linkedin";
import Instagram from "../Icons/Instagram";

const socials = [
  {
    socialName: "Facebook",
    link: "@marina.koval.25",
    linkHref: "https://www.facebook.com/marina.koval.25/",
    icon: <Facebook className="h-5 w-5" />,
    colorClass: "bg-blue-700",
  },

  {
    socialName: "Instagram",
    link: "@marinkakoval",
    linkHref: "https://www.instagram.com/marinkakoval/",
    icon: <Instagram className="h-5 w-5" />,
    colorClass: "bg-gradient-to-r from-orange-500 to-pink-500",
  },

  {
    socialName: "GitHub",
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
    <section className="mb-4 border-t border-solid border-azureish-white pt-4 dark:border-gunmetal">
      <h5 className="title-h5 mb-3">Socials</h5>
      <ul>
        {socials.map((social, index) => (
          <SocialItem key={index} {...social} />
        ))}
      </ul>
    </section>
  );
};

export default Socials;
