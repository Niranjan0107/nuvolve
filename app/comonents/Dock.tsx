"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const dockItems = [
  { id: 1, icon: "/global/home.png", label: "Homepage" },
  { id: 2, icon: "/global/projects.png", label: "Our Work" },
  { id: 3, icon: "/global/about.png", label: "About Us" },
  { id: 4, icon: "/global/services.png", label: "Services" },
  { id: 5, icon: "/global/contact.png", label: "Contact Us" },
];

export default function MacDock() {
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dockRef.current) return;

    const items = Array.from(
      dockRef.current.querySelectorAll(".dock-item")
    ) as HTMLDivElement[];

    const animations = items.map((item) => ({
      scale: gsap.quickTo(item, "scale", {
        duration: 0.22,
        ease: "power3.out",
      }),

      y: gsap.quickTo(item, "y", {
        duration: 0.22,
        ease: "power3.out",
      }),
    }));

    const handleMove = (e: MouseEvent) => {
      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();

        const center = rect.left + rect.width / 2;

        const distance = Math.abs(e.clientX - center);

        // Radius
        const sigma = 90;

        // Gaussian curve (Apple-like)
        const progress = Math.exp(
          -(distance * distance) /
            (2 * sigma * sigma)
        );

        const scale = 1 + progress * 1.2;

        const translateY = -progress * 28;

        animations[i].scale(scale);
        animations[i].y(translateY);
      });
    };

    const reset = () => {
      animations.forEach((anim) => {
        anim.scale(1);
        anim.y(0);
      });
    };

    dockRef.current.addEventListener("mousemove", handleMove);
    dockRef.current.addEventListener("mouseleave", reset);

    return () => {
      dockRef.current?.removeEventListener(
        "mousemove",
        handleMove
      );
      dockRef.current?.removeEventListener(
        "mouseleave",
        reset
      );
    };
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
      <div
        ref={dockRef}
        className="flex items-end gap-3 rounded-3xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-xl"
      >
        {dockItems.map((item) => (
          <div
            key={item.id}
            className="dock-item group relative flex h-13 w-13 cursor-pointer items-center justify-center rounded-2xl bg-white shadow-lg"
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={30}
              height={30}
              className="pointer-events-none"
            />

            {/* Tooltip */}
            <span className="absolute -top-10 font-[300] whitespace-nowrap rounded-lg bg-black px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}