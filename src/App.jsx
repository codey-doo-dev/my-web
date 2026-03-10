import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import { Button } from "./Components/Button";
import {Card} from "./Components/Card";
import { User } from "./Components/User";
    const App = () => {
  return (
    <div>
      <Button content="Sign Up" />
      <Button content="Register" />
      <Button content="Log in" />
      <Button content="Sign In" />
      <br/><hr />


      <div className='flex'>
        <Card name="Ali" age="22" role="Admin" />
        <Card name="Ahmed" age="25" role="Editor" />
        <Card name="Sara" age="21" role="User" />
        <Card name="Usman" age="24" role="Moderator" />
        <Card name="Ayesha" age="23" role="Admin" />
        <Card name="Hassan" age="26" role="User" />
        <Card name="Fatima" age="20" role="Editor" />
        <Card name="Bilal" age="27" role="Admin" />
        <Card name="Zain" age="22" role="User" />
        <Card name="Mariam" age="24" role="Moderator" />
      </div>

      <br /> <hr />
      <Users />

    </div>
  );
}

export default App;























/*
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

    </div>*/