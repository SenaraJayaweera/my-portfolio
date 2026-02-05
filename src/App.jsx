import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
