import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Langueges from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto flex max-w-[1018px] px-3.5">
        <aside className="max-w-[180px] pr-5">
          <About />
          <Contacts />
          <Socials />
          <Langueges />
        </aside>
        <main className="max-w-[842px] py-9 pl-4 pr-6">
          <Projects />
          <Education />
          <Experience />
        </main>
      </div>
    </div>
  );
}

export default App;
