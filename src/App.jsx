import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Packages from "./components/packages";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <Packages />
      <Testimonials />
      <About />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
