"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Settings,
  Phone,
  ChartArea,
  MessageCircle,
  HelpCircle,
  MessageCirclePlus,
} from "lucide-react";

type Item = {
  icon: any;
  label: string;
};

const items: Item[] = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Mail, label: "Contact" },
  { icon: Phone, label: "Call" },
];

export default function RadialMenu() {
  const container = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      const buttons = gsap.utils.toArray<HTMLElement>(".radial-item");

      if (!buttons.length) return;

      if (open) {
        buttons.forEach((btn, index) => {
          const angle =
            (90 + index * (80 / (buttons.length - 1))) *
            (Math.PI / 105);

          const radius = 50;

          gsap.to(btn, {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(2)",
            delay: index * 0.03,
          });
        });
      } else {
        gsap.to(buttons, {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0,
          duration: 0.35,
          ease: "power3.inOut",
          stagger: 0.02,
        });
      }
    },
    { dependencies: [open], scope: container }
  );

  return (
    <div
      ref={container}
      className="fixed bottom-5 right-5 z-50"
    >
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={index}
            className="radial-item absolute left-0 top-0 flex h-10 w-10 scale-0 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl"
          >
            <Icon size={18} />
          </button>
        );
      })}

      <button
        onClick={() => setOpen(!open)}
        className="relative z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-black shadow-2xl"
      >
        {open ? <X /> : <MessageCirclePlus/>}
      </button>
    </div>
  );
}