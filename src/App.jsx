import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Langueges from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col justify-center lg:flex-row">
          <aside className="md:mr-5">
            <About />
            <Contacts />
            <Socials />
            <Langueges />
          </aside>
          <main className="py-9 lg:pl-10 lg:pr-6">
            <Projects />
            <Experience />
            <Education />
            <Skills />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
