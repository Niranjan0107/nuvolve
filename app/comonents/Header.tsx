import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
            src="https://nuvolvetech.com/wp-content/uploads/2024/05/accha-lagra-yar-2.png"
            alt="logo"
            className="h-7 md:h-10 w-auto"
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

        <button className="hidden md:flex items-center rounded-full bg-gradient-to-b from-[#FF9640] to-[#FF5A00] px-8 py-3 font-medium shadow-[0_0_40px_rgba(255,103,31,.6)]">
          Contact Us <ArrowUpRight className="h-4 w-4"/>
        </button>
            <button className="md:hidden">
              <svg fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 width="24px" height="24px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" >
<path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,5z"/>
<path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z"/>
<path d="M19,17H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,17,19,17z"/>
</svg>
            </button>
      </div>
    </header>
  );
}