import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Focus from "../components/Focus";
import Contact from "../components/Contact";
import Ticker from "../components/Ticker";
import ExperienceStrip from "../components/ExperienceStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <ExperienceStrip />
      <Projects />
      <Focus />
      <Team />
      <Contact />
    </>
  );
}
