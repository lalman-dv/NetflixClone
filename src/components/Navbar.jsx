import logo from "/src/assets/logo.png";
import search_icon from "/src/assets/search_icon.svg";
import bell_icon from "/src/assets/bell_icon.svg";
import profile_img from "/src/assets/profile_img.png";
import caret_icon from "/src/assets/caret_icon.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 z-10 w-full bg-black
     text-gray-200 px-12 py-2"
    >
      <div className="flex items-center justify-between">
        {/* Left: Logo and Navigation */}
        <div className="flex items-center gap-12">
          <a href="#">
            <img className="w-22 sm:w-19" src={logo} alt="Netflix" />
          </a>
          <ul className="hidden sm:flex gap-5 list-none text-[16px]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">TV Shows</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">New & Popular</li>
            <li className="cursor-pointer">My List</li>
            <li className="cursor-pointer">Browse By Languages</li>
          </ul>
        </div>

        {/* Right: Icons and Profile */}
        <div className="hidden md:flex items-center gap-5">
          <button aria-label="Search">
            <img
              className="w-5 cursor-pointer"
              src={search_icon}
              alt="Search"
            />
          </button>
          <p className="cursor-pointer">Children</p>
          <button aria-label="Notifications">
            <img
              className="w-5 cursor-pointer"
              src={bell_icon}
              alt="Notifications"
            />
          </button>
          <div className="flex items-center gap-3">
            <img
              className="w-9 rounded-xl cursor-pointer"
              src={profile_img}
              alt="User profile"
            />
            <div className="relative group">
              <img
                src={caret_icon}
                alt="Dropdown caret"
                className="cursor-pointer"
              />
              <p className="absolute left-1/2 top-full mt-1 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Sign out
              </p>
            </div>
          </div>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden mt-4 flex flex-col justify-center items-center gap-4 text-sm">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
          <li className="flex items-center gap-2">
            <img className="w-5" src={search_icon} alt="search" />
            Search
          </li>
          <li>Children</li>
          <li className="flex items-center gap-2">
            <img className="w-5" src={bell_icon} alt="bell" />
            Notifications
          </li>
          <li className="flex items-center gap-2">
            <img className="w-9 rounded-xl" src={profile_img} alt="profile" />
            <span>Sign out</span>
          </li>
        </ul>
      )}
    </nav>
  );
};
