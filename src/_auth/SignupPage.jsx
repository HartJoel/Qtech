import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { item } from "../animations/authAnimation";

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className=" justify-center items-center ">
      <motion.div variants={item} className="pb-6 text-center">
        <div className="flex justify-center">
          <img src={Logo} alt="logo" />
        </div>

        <h1 className="text-heading-secondary">Create an account</h1>
        <p className="text-[16px] font-normal text-[#667085]">
          Start your QTech Sheba
        </p>
      </motion.div>

      <motion.form variants={item} className="flex flex-col gap-5 mb-3">
        <label className="text-body-medium flex flex-col gap-1">
          Name
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-[#D0D5DD] rounded-lg px-4 py-2 w-full"
          />
        </label>
        <label className="text-body-medium flex flex-col gap-1">
          Student ID
          <input
            type="text"
            placeholder="Enter your student Id"
            className="border border-[#D0D5DD] rounded-lg px-4 py-2 w-full"
          />
        </label>
        <label className="text-body-medium">
          Password
          <input
            type="password"
            placeholder="Create your password"
            className="border border-[#D0D5DD] rounded-lg px-4 py-2 w-full"
          />
          <p className="text-body-regular">Must be at least 8 characters.</p>
        </label>

        <button type="submit" className="btn-auth btn-auth-text ">
          Get started
        </button>
      </motion.form>

      <motion.div variants={item} className="flex justify-center">
        <p className="text-body-regular">
          Already have an account?
          <span
            className="text-link cursor-pointer"
            onClick={() => navigate("/")}
          >
            Log in
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default SignupPage;
