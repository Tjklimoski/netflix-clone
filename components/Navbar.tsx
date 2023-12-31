"use client";

import NavbarItem from "./NavbarItem";
import { BiCaretDown, BiSearch, BiSolidBell } from "react-icons/bi";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";

const TOP_OFFSET = 66;

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  function toggleMobileMenu() {
    setShowMobileMenu((current) => !current);
  }

  function toggleProfileMenu() {
    setShowProfileMenu((current) => !current);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex items-center transition duration-500 bg-zinc-900 ${
          showBackground ? "bg-opacity-90" : "bg-opacity-0"
        }`}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />

        {/* The menu bellow will only display on lg screens */}
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Filmes" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>

        {/* The menu bellow will only display on screens smaller then lg */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-sm">Browse</p>
          <BiCaretDown
            className={`transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex items-center gap-7 ml-auto">
          {/* Search Icon */}
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BiSearch />
          </div>

          {/* Notification Icon */}
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BiSolidBell />
          </div>

          {/* Profile */}
          <div
            onClick={() => toggleProfileMenu()}
            className="flex items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 rounded-sm lg:w-10 lg:h-10 lg:rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="profile image" />
            </div>
            <BiCaretDown
              className={`transition ${
                showProfileMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <ProfileMenu visible={showProfileMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
