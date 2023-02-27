import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Langueges from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <About />
      <Contacts />
      <Socials />
      <Langueges />
      <Projects />
    </div>
  );
}

export default App;
