import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Langueges from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";
import Courses from "./components/Courses/Courses";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", "false");
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, [darkMode]);

  const onloadPage = () => {
    document.html.classList.toggle("darkMode", false);
  };

  document.addEventListener("DOMContentLoaded", onloadPage);

  return (
    <div className="App">
      {/* TODO: винести в окремий компонент Home */}
      <div className="container mx-auto px-4">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col justify-center xl:flex-row xl:gap-6">
          {/* TODO: винести в окремі компоненти aside та main */}
          <aside className="xl:max-w-sm slide-in-left">
            <About />
            <div className="md:flex md:justify-between xl:flex-col">
              <Contacts />
              <Socials />
              <Langueges />
            </div>
          </aside>
          <main className="py-9 xl:pl-10 slide-in-right">
            <Projects />
            <Experience />
            <Courses />
            <Skills />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
