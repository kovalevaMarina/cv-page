import React from "react";
import ContactItem from "./ContactItem";
import Email from "../Icons/Email";
import LinkSimple from "../Icons/LinkSimple";
import Phone from "../Icons/Phone";
import Location from "../Icons/LocationMarker";

const contacts = [
  {
    title: "Email",
    text: "marinakovaleva259@gmail.com",
    linkHref: "mailto:marinakovaleva259@gmail.com",
    icon: <Email className="h-5 w-5" />,
  },

  {
    title: "Website",
    text: "https://kovalevamarina.com/",
    linkHref: "https://kovalevamarina.com/",
    icon: (
      <LinkSimple className="h-5 w-5 fill-waterloo dark:fill-azureish-white" />
    ),
  },

  {
    title: "Phone",
    text: "+38 (063) 599 65 71",
    linkHref: "tel:+380635996571",
    icon: <Phone className="h-5 w-5" />,
  },

  {
    title: "Address",
    text: "Dnipro, Ukraine",
    linkHref: "https://goo.gl/maps/JupyS6RAKmiAmLix7",
    icon: <Location className="h-5 w-5" />,
  },
];

const Contacts = () => {
  return (
    <section className="mb-4 border-t border-solid border-azureish-white pt-4 dark:border-gunmetal">
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem key={index} {...contact} />
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
