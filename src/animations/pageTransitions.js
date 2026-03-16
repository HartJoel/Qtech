export const pageVariants = {
  initial: {
    opacity: 0,
    x: 80,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -80,
  },
};

export const pageTransition = {
  duration: 0.35,
  ease: "easeInOut",
};
