import Background from "../assets/Frame.svg";
import { Outlet } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import {
  container,
  formVariant,
  imageVariant,
} from "../animations/authAnimation";

function AuthLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Image Section */}
        <div className="hidden lg:flex md:w-1/2 bg-[#DFF2FE] justify-center items-center">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-heading-primary">Welcome to</p>
              <p className="text-[18px] xl:text-[25px] font-semibold">
                <span className="text-[#054A52]">QTech Sheba </span>
                <span className="text-[#4891B4]">
                  - Where Innovation Meets Ambition
                </span>
              </p>
            </div>

            <motion.img
              src={Background}
              alt="Auth Illustration"
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              className="w-[80%] max-w-139.5 h-auto object-contain"
            />

            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#4891B4] text-center">
              quorsotech@gmail.com
            </p>
          </div>
        </div>

        {/* Right Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center items-center p-8"
        >
          <motion.div variants={formVariant} className="w-full max-w-90">
            <Outlet />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default AuthLayout;
