import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [workPage, setWorkPage] = useState(null);

  return (
    <div className="">
      <Navbar setCurrentPage={setCurrentPage} setWorkPage={setWorkPage} />

      {currentPage === "home" && (
        <>
          <Hero />
          <About />
          <Projects setCurrentPage={setCurrentPage} setWorkPage={setWorkPage} />
        </>
      )}

      {currentPage === "work" && workPage === "dashboard" && <Dashboard />}
      {currentPage === "work" && workPage === "weather" && <Weather />}
    </div>
  );
}

export default App;
