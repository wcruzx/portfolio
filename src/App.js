import Home from "./Sections/Home";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";
import Technologies from "./Sections/Technologies";
import Navbar from "./Sections/Navbar";

function App() {
  return (
    <div className="dark bg-dark-mode text-light-content">
    <Navbar />
      <div>
        <Home />
        <About />
        <Projects />
        <Technologies />
        <Contact />

      </div>
    </div>
  );
}

export default App;
