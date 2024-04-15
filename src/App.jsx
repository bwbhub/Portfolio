import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/app.scss";
import ToggleLang from "./components/functionnalities/ToggleLang";

export default function App() {
  return (
    <main id="home">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <ToggleLang />
    </main>
  );
}
