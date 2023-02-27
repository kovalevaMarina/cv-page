import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts/Contacts";
import Socials from "./components/Socials/Socials";
import Langueges from "./components/Languages/Languages";

function App() {
  return (
    <div className="App">
      <About />
      <Contacts />
      <Socials />
      <Langueges />
    </div>
  );
}

export default App;
