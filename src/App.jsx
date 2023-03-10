import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Langueges from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto flex flex-col justify-center px-4 lg:flex-row">
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
  );
}

export default App;
