import React from "react";
import ContactItem from "./ContactItem";
import Email from "../Icons/Email";
import LinkSimple from "../Icons/LinkSimple";
import Phone from "../Icons/Phone";
import Location from "../Icons/LocationMarker";

const contacts = [
  {
    title: "Email",
    text: "angelo.libero@gmail.com",
    icon: <Email />,
  },

  {
    title: "Website",
    text: "https://aldesign.it",
    icon: <LinkSimple />,
  },

  {
    title: "Phone",
    text: "(+39) 333 0123 765",
    icon: <Phone />,
  },

  {
    title: "Address",
    text: "Bologna, Italy",
    icon: <Location />,
  },
];

const Contacts = () => {
  return (
    <div className="mb-4 pt-4 border-t border-solid border-gunmetal">
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem key={index} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
