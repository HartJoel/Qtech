import { Outlet, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransitions";

function RootLayout() {
  const location = useLocation();
  return (
    <>
      <div className="overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default RootLayout;
