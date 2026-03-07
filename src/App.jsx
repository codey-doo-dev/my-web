import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;