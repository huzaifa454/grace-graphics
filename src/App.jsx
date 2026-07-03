import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Packages from "./components/packages";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import AdminLayout from "./pages/AdminLayout";

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
        <Route path="/admin/login" element={<AdminLayout />} />
        <Route path="/admin/dashboard" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
