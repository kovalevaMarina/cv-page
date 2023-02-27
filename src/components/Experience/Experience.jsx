import React from "react";
import Location from "../Icons/LocationMarker";
import Apple from "../Icons/Apple";

const Experience = () => {
  return (
    <div className="xxperience">
      <h2>Experience</h2>
      <div>
        <div>
          <div>
            <time>Jul 20 - Jan 2022</time>
            <div>
              <Location />
              <p>Cupertino</p>
            </div>
          </div>
          <div>
            <div>
              <Apple />
            </div>
            <h4>Front End Developer</h4>
            <h3>Apple,Inc.</h3>
          </div>
        </div>
        <div>
          <p>
            Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa
            illum optio dolorum aut maxime ipsa. Laborum incidunt enim
            consectetur perspiciatis. Dolore ullam dolor impedit dolorum
            recusandae facilis quo et. Et ipsam vel sunt qui ut officia
            voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
