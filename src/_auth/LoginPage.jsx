import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { item } from "../animations/authAnimation";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className=" justify-center items-center ">
      <motion.div variants={item} className="pb-6 text-center">
        <div className="flex justify-center">
          <img src={Logo} alt="logo" />
        </div>

        <h1 className="text-heading-secondary">Log in to your account</h1>
        <p className="text-[16px] font-normal text-[#667085]">
          Welcome back! Please enter your details.
        </p>
      </motion.div>

      <motion.form variants={item} className="flex flex-col gap-5 mb-3">
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
            placeholder="Enter your password"
            className="border border-[#D0D5DD] rounded-lg px-4 py-2 w-full"
          />
        </label>

        <div className="flex justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="w-4 h-4" />
            Remember me
          </label>
          <p className="text-link">Forgot password</p>
        </div>

        <button type="submit" className="btn-auth btn-auth-text ">
          Sign in
        </button>
      </motion.form>

      <motion.div variants={item} className="flex justify-center">
        <p className="text-body-regular">
          Don’t have an account?
          <span
            className="text-link cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default LoginPage;
