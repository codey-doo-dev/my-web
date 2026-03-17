import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Button from "./Components/Button";
import Clock from "./Components/Clock";
import Cursor from "./Components/cursor";
import Work from "./Components/Work"
import ConfettiButton from "./components/ConfettiButton";


import { Routes, Route } from "react-router-dom"; 
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cursor/>
 
        <Navbar />

        <main className="flex-grow bg-black">

  <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/about" element={<About />} />

    <Route path="/services" element={<Services />} />

    <Route path="/contact" element={<Contact />} />

    <Route path="/clock" element={<Clock />} />

  </Routes>

</main>
        {/*
         <div className="flex justify-center items-center h-screen">
      <ConfettiButton variant="gradient" size="lg">
        Click Me 🎉
      </ConfettiButton>
    </div>*/}

        <Footer />

    </div>
  );
}

export default App;