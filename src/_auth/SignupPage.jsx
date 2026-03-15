import Logo from "../assets/logo.svg";

function SignupPage() {
  return (
    <div className=" justify-center items-center ">
      <div className="pb-6 text-center">
        <div className="flex justify-center">
          <img src={Logo} alt="logo" />
        </div>

        <h1 className="text-heading-secondary">Create an account</h1>
        <p className="text-[16px] font-normal text-[#667085]">
          Start your QTech Sheba
        </p>
      </div>

      <form className="flex flex-col gap-5 mb-3">
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
      </form>

      <div className="flex justify-center">
        <p className="text-body-regular">
          Already have an account?<span className="text-link">Log in</span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
