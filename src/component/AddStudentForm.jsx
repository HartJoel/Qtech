import { useState } from "react";
import { ChevronDown, Camera, Eye, EyeOff } from "lucide-react";
import StudentLogo from "../assets/school_logo (2).svg";

const TABS = ["Basic Information", "Parent Details", "Additional Details"];

function Field({ label, placeholder, type = "text", options }) {
  if (options) {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-gray-600">{label}</label>
        <div className="relative">
          <select className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 outline-none focus:border-blue-500 cursor-pointer bg-white">
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-400 outline-none focus:border-blue-500 placeholder-gray-300"
      />
    </div>
  );
}

export default function AddStudentForm() {
  const [activeTab, setActiveTab] = useState("Basic Information");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className=" rounded-xl border-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Add New Student</h2>
        <div className="flex gap-2">
          <button className="px-4 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
            cancel
          </button>
          <button className="px-4 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
            reset
          </button>
          <button className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            save
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b bg-white rounded-t-xl border-gray-200 px-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 mr-7 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? "text-blue-600 border-blue-600"
                : "text-gray-400 border-transparent hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="p-6 bg-white rounded-b-xl">
        <div className="flex gap-6">
          {/* Photo Upload */}
          <div className="relative w-20 h-20 shrink-0">
            <img
              src={StudentLogo}
              alt="student"
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
              <Camera size={11} color="white" strokeWidth={2} />
            </div>
          </div>

          {/* Fields Grid */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            <Field label="First Name" placeholder="Charlene Reed" />
            <Field label="Last Name" placeholder="Charlene Reed" />
            <Field label="Class" options={["10", "9", "8", "7"]} />
            <Field label="Section" options={["Niharika", "Alpha", "Beta"]} />
            <Field label="Date of Birth" placeholder="25 January 1990" />
            <Field label="Gender" options={["Female", "Male", "Other"]} />
            <Field label="Phone Number" placeholder="+8801750000125" />
            <Field label="Email" placeholder="charlenereed@gmail.com" />
            <Field
              label="Present Address"
              placeholder="125/A, Paltan Road, Dhaka"
            />
            <Field
              label="Permanent Address"
              placeholder="San Jose, California, USA"
            />
            <Field label="City" placeholder="San Jose" />
            <Field label="Postal Code" placeholder="45962" />
            <Field label="Country" placeholder="Bangladesh" />
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="bg-white rounded-t-xl border-gray-200 px-6 py-5 mt-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          Login/Account Details
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <Field label="User Name" placeholder="Charlene Reed" />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••••"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-9 text-sm text-gray-400 outline-none focus:border-blue-500"
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
