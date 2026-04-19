import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";

const pageTransition = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }

      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] font-display text-[#e8e4dc]">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <HomePage />
              </AnimatedPage>
            }
          />
          <Route
            path="/resume"
            element={
              <AnimatedPage>
                <ResumePage />
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
