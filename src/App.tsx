import { Introduction } from "./Components/Introduction";
import { NavBar } from "./Components/NavBar";
import { About } from "./Components/About";
import { GlobalStyle } from "./styles/global";
import { AbilityCard } from "./Components/AbilityCard";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

export function App() {
  return (
    <>
      <NavBar/>
      <Introduction/>
      <About/>
      <AbilityCard/>
      <Projects/>
      <Contact/>
      <Footer/>
      <GlobalStyle/>
    </>
  );
}

export default App;
