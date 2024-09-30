import { useState } from "react";
import "./index.css";
import SideBar from "./pages/SideBar";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
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
          {activeSection === "Portfolio" && <Portfolio />}
          {activeSection === "Blog" && <Blog />}
          {activeSection === "Contact" && <Contact />}
        </div>
      </main>
    </>
  );
}

export default App;
