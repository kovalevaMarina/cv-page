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
      <About />
      <Contacts />
      <Socials />
      <Langueges />
      <Projects />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
