import { Menu, Search, ChevronDown } from "lucide-react";
import NavLogo from "../assets/school_logo (3).svg";

export default function Navbar({ onMenuToggle }) {
  return (
    <div className="flex items-center gap-4 bg-white border-b border-gray-200 px-6 h-20">
      <button
        onClick={onMenuToggle}
        className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
      >
        <Menu size={20} strokeWidth={1.8} />
      </button>

      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-72">
        <Search size={14} strokeWidth={1.8} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
        />
      </div>

      <div className="ml-auto flex items-center gap-2.5 cursor-pointer hover:bg-gray-100 px-3 py-1.5 rounded-lg">
        <img
          src={NavLogo}
          alt="user"
          className="w-9 h-9 rounded-full border-2 border-gray-200 object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            John Smith
          </p>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
        <ChevronDown size={14} strokeWidth={1.8} className="text-gray-400" />
      </div>
    </div>
  );
}
