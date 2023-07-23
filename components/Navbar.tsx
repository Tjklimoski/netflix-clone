import NavbarItem from "./NavbarItem";
import { BiCaretDown } from "react-icons/bi";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />

        {/* The element bellow will only display on lg screens */}
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Filmes" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>

        {/* The element bellow will only display on screens smaller then lg */}
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-sm">Browse</p>
          <BiCaretDown className="transition" />
          <MobileMenu visible />
        </div>
      </div>
    </nav>
  );
}
