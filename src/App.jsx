import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Focus from "./components/Focus";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";
import ExperienceStrip from "./components/ExperienceStrip";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] font-display text-[#e8e4dc]">
      <Nav />
      <Hero />
      <Ticker />
      <ExperienceStrip />
      <Projects />
      <Focus />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
