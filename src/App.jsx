import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import {  } from "./Components/Button";
import { Routes, Route } from "react-router-dom"; 
function App() {
  return (
    <div className="flex flex-col h-screen justify-between">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

    </div>
  );
}

export default App;