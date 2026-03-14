import Background from "../assets/Frame.svg";
import { Outlet } from "react-router-dom";

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

            <img
              src={Background}
              alt="Auth Illustration"
              className="w-[80%] max-w-139.5 h-auto object-contain"
            />

            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#4891B4] text-center">
              quorsotech@gmail.com
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center items-center p-8">
          <div className="w-full max-w-90">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
