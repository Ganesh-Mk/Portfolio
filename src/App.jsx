import { useState } from "react";
import "./index.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

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
          {activeSection === "Resume" && <Resume />}
          {activeSection === "Portfolio" && <Portfolio />}
          {activeSection === "Blog" && <Blog />}
          {activeSection === "Contact" && <Contact />}
        </div>
      </main>
    </>
  );
}

export default App;
