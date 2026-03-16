import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Building2,
  Bell,
  CalendarCheck,
  BarChart3,
  Calendar,
  CheckSquare,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import SchoolLogo from "../assets/school_logo (1).svg";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, hasChevron: true },
  { label: "Teacher", icon: Users },
  { label: "Student", icon: GraduationCap },
  { label: "Departments", icon: Building2 },
  { label: "Notice", icon: Bell },
  { label: "Attendance", icon: CalendarCheck },
];

const pageItems = [
  { label: "Exams", icon: BarChart3 },
  { label: "Events", icon: Calendar },
  { label: "To-Do", icon: CheckSquare },
];

const bottomItems = [
  { label: "Settings", icon: Settings },
  { label: "Logout", icon: LogOut, danger: true },
];

export default function Sidebar() {
  const [active, setActive] = useState("Student");

  const NavItem = ({ label, icon: Icon, hasChevron, danger }) => (
    <div
      onClick={() => !danger && setActive(label)}
      className={`
        flex items-center gap-2.5 px-4 py-2.5 mx-2 rounded-lg cursor-pointer text-sm transition-all
        ${active === label ? "bg-blue-600 text-white font-medium" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}
        ${danger ? "text-red-500 hover:bg-red-50 hover:text-red-600" : ""}
      `}
    >
      <Icon
        size={16}
        strokeWidth={1.8}
        className={
          active === label
            ? "text-white"
            : danger
              ? "text-red-400"
              : "text-gray-400"
        }
      />
      <span>{label}</span>
      {hasChevron && (
        <ChevronDown
          size={14}
          strokeWidth={1.8}
          className={`ml-auto ${active === label ? "text-blue-200" : "text-gray-400"}`}
        />
      )}
    </div>
  );

  return (
    <div className="w-64 bg-white border border-gray-200 rounded-xl py-5 shadow-sm flex flex-col">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-4 pb-5 border-b border-gray-100">
        <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
          {/* <GraduationCap size={20} className="text-white" /> */}
          <img src={SchoolLogo} alt="logo" />
        </div>
        <span className="text-[14px] font-extrabold text-[#202224] leading-snug">
          Shamsul Hoque Khan
          <br />
          School and College
        </span>
      </div>

      {/* Menu */}
      <p className="text-[12px] font-semibold uppercase tracking-widest text-gray-400 px-4 pt-4 pb-1.5">
        Menu
      </p>
      {menuItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}

      <hr className="my-2.5 border-gray-100" />

      {/* Pages */}
      <p className="text-[10.5px] font-semibold uppercase tracking-widest text-gray-400 px-4 pb-1.5">
        Pages
      </p>
      {pageItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}

      <hr className="my-2.5 border-gray-100" />

      {/* Bottom */}
      {bottomItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </div>
  );
}
