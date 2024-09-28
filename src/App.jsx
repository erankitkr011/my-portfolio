import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,2,52,1) 14%, rgba(5,5,78,1) 42%, rgba(38,38,162,1) 74%, rgba(9,9,121,1) 100%, rgba(5,90,175,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
