import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const menu = [
  "Home",
  "About",
  "Services",
  "Career",
  "Why Us",
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        {/* Logo */}

        <div className="bg-white1 px-2 py-2  left-0 top-0">
          <img
            src="/homepage/nuvolve-logo-light.png"
            alt="logo"
            className="h-10 md:h-12  w-auto"
          />
        </div>

        {/* Menu */}

        <nav className="hidden gap-10 md:flex">
          {menu.map((item) => (
            <Link
              key={item}
              href="/"
              className="text-sm text-white transition hover:text-orange-400"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}

        <button className="hidden md:flex items-center rounded-full bg-gradient-to-b from-[#ffffff] to-[#ffffff] px-8 py-3 font-medium">
          Contact Us <ArrowUpRight className="h-4 w-4"/>
        </button>
            <MobileMenu/> 
      </div>
    </header>
  );
}