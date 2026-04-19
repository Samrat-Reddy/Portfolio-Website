import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Focus from "./components/Focus";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] font-display overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <Projects />
      <Team />
      <Focus />
      <Contact />
      <Footer />
    </div>
  );
}
