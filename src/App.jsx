import { useState } from "react";
import "./index.css";
import SideBar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <>
      <main>
        <SideBar />
        <div className="main-content">
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          {activeSection === "About" && <About />}
          {activeSection === "Skills" && <Skills />}
          {activeSection === "Projects" && <Projects />}
          {activeSection === "Achievements" && <Achievements />}
          {activeSection === "Contact" && <Contact />}
        </div>
      </main>
    </>
  );
}

export default App;
