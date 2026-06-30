"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

const menu = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Career",
  "Contact",
];

export default function MobileMenu() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .to(".mobile-overlay", {
          duration: 0.45,
          opacity: 1,
          pointerEvents: "auto",
          ease: "power2.out",
        })

        .fromTo(
          ".mobile-panel",
          {
            x: "100%",
          },
          {
            x: "0%",
            duration: 0.6,
            ease: "power4.out",
          },
          "<"
        )

        .from(
          ".mobile-item",
          {
            opacity: 0,
            x: 60,
            stagger: 0.08,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.25"
        );
    },
    { scope: container }
  );

  useEffect(() => {
    if (!tl.current) return;

    if (open) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <div ref={container} className="md:hidden">

      {/* Toggle */}

      <button
        onClick={() => setOpen(!open)}
        className="relative z-[100] text-white"
      >
        {open ? <X size={30} /> :   <button>
              <svg fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 width="24px" height="24px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" >
<path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,5z"/>
<path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z"/>
<path d="M19,17H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,17,19,17z"/>
</svg>
            </button>}
      </button>

      {/* Overlay */}

      <div className="mobile-overlay pointer-events-none fixed inset-0 z-40 bg-black/60 opacity-0 backdrop-blur-xl">

        {/* Panel */}

        <div className="mobile-panel absolute right-0 top-0 flex h-full w-[100%] flex-col bg-[#0B0B0B] px-8 pt-24">

        <div className="absolute top-[30px] max-w-[170px]">
          <img src="/global/nuvolve-full-light.png"/>
          </div>
        
          <nav className="flex flex-col gap-5 mt-5">

            {menu.map((item, index) => (
              <Link
                key={item}
                href="/"
                onClick={() => setOpen(false)}
                className="mobile-item text-[30px] font-[300] -tracking-[1.1px] text-white flex gap-2"
              >
                <span className="text-[10px] tracking-[3px] text-white/40"> {String(index + 1).padStart(2, "0")}</span> {item}
              </Link>
            ))}

          </nav>
       
          <div className="mt-auto pb-12">
     {/* <div className="mt-0">
          <h3 className="text-white text-[30px]">Call: +91 8686800680</h3>
          <h3 className="text-white text-[30px]">Call: +91 8686800680</h3>
</div> */}
            <button className="w-full rounded-full bg-white py-4 font-medium text-black">
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}