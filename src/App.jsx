import "./index.css";
import SideNav from "../src/components/side-nav";
import Main from "./components/main";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="w-full min-h-screen">
      <SideNav />
      <Main />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
