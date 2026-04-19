const easing = [0.22, 1, 0.36, 1];

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      type: "spring",
      stiffness: 140,
      damping: 18,
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.58,
      ease: easing,
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.58,
      ease: easing,
    },
  },
};
