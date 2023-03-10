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
    icon: <Email className="h-5 w-5" />,
  },

  {
    title: "Website",
    text: "https://aldesign.it",
    icon: <LinkSimple className="h-5 w-5 fill-azureish-white" />,
  },

  {
    title: "Phone",
    text: "(063) 599 65 71",
    icon: <Phone className="h-5 w-5" />,
  },

  {
    title: "Address",
    text: "Dnipro, Ukraine",
    icon: <Location className="h-5 w-5" />,
  },
];

const Contacts = () => {
  return (
    <div className="mb-4 border-t border-solid border-gunmetal pt-4">
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem key={index} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
