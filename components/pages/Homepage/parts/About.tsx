"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import {
  ShieldCheck,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Quality\nAssurance",
    description:
      "Ensuring reliable, secure, and high-performance software through rigorous testing.",
    icon: ShieldCheck,
    bg: "✓",
  },
  {
    title: "Software\nDevelopment",
    description:
      "Building scalable web and mobile applications tailored to your business goals.",
    icon: Code2,
    bg: "</>",
  },
  {
    title: "IT\nConsulting",
    description:
      "Helping organizations embrace digital transformation with expert consulting.",
    icon: BriefcaseBusiness,
    bg: "8",
  },
];

export default function About() {
const sectionRef = useRef<HTMLDivElement>(null);
const targetRef = useRef<HTMLDivElement>(null);


useGSAP(() => {
  const logo = document.getElementById("header-logo");

  if (!logo || !targetRef.current || !sectionRef.current) return;

  const calculate = () => {
    const logoRect = logo.getBoundingClientRect();
    const targetRect = targetRef.current!.getBoundingClientRect();

    gsap.set(logo, {
      x: 0,
      y: 0,
      scale: 1,
    });

    const dx =
      targetRect.left +
      targetRect.width / 2 -
      (logoRect.left + logoRect.width / 2);

    const dy =
      targetRect.top +
      targetRect.height / 2 -
      (logoRect.top + logoRect.height / 2);

    gsap.to(logo, {
      x: dx,
      y: dy,
      scale: 0.65,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  };

  calculate();

  ScrollTrigger.addEventListener("refresh", calculate);

  return () => {
    ScrollTrigger.removeEventListener("refresh", calculate);
  };
});

  return (
    <section
      id="about"
        ref={sectionRef}

      className="relative bg-[#F6F1E8] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="flex items-start gap-8">

          {/* Header Logo Stops Here */}
          <div
             ref={targetRef}
  id="logo-target"
            className="mt-3 h-20 w-20 shrink-0 rounded-full border-2 border-dashed border-gray-400"
          />

          <div>

            <h2 className="text-[72px] font-medium leading-none tracking-tight text-[#111]">
              Our
              <br />
              Expertise
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#666]">
              Comprehensive IT solutions tailored to your
              business needs. From development to support,
              we've got you covered.
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[34px] bg-[#F8F5EE] p-10 shadow-[0_18px_60px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,.12)]"
              >

                {/* Huge Background Symbol */}

                <span className="pointer-events-none absolute right-0 top-0 select-none text-[250px] font-light leading-none text-black/[0.05]">
                  {item.bg}
                </span>

                {/* Icon */}

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg">

                  <Icon
                    size={30}
                    strokeWidth={1.8}
                  />

                </div>

                {/* Title */}

                <h3 className="relative z-10 mt-24 whitespace-pre-line text-[42px] font-medium leading-none text-[#111]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="relative z-10 mt-8 text-lg leading-8 text-[#666]">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}