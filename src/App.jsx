import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/pages/About";
import { Navbar } from "./components/templates/Navbar";
import { Home } from "./components/pages/Home";
import { Projects } from "./components/pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="container w-auto md:max-w-5xl mx-auto mb-3 sm:mb-10 rounded-lg shadow-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
