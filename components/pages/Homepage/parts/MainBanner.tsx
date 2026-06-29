import { ArrowUpRight, Rocket } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-[100dvh]  bg-[#0A0A0A] md:pt-44 md:pb-0 pb-20 md:block flex items-end">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Orange Glow */}

      <div className="absolute md:bottom-[0px] left-1/2 h-[70%] w-[100%] md:h-[900px] md:w-[1200px] -translate-x-1/2 rounded-full bg-[#ff6a1a]/60 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          {/* <img
            src="/avatars.png"
            className="h-10"
          /> */}
<Rocket className="text-white/60 w-5 h-5"/>
          <span className="text-[15px] text-white/70">
            Worked with 200+ clients
          </span>
        </div>

        {/* Heading */}

        <h1 className="mt-10 text-white font-[100] max-w-8xl text-6xl md:text-8xl font-[200] leading-tight -tracking-[1px]">
        Go Live
With<em className="pl-4 md:-tracking-[6px] -tracking-[3px]">Nuvolve.</em>
        </h1>

        {/* Text */}

        <p className="mt-0 max-w-3xl text-[20px] md:text-[25px] leading-9 text-white">
        We're your trusted partner for navigating <br className="hidden md:block"/>the digital landscape with <span className="serif">confidence and success.</span>
        </p>

        {/* Buttons */}

        <div className="mt-8 flex gap-5">

        

          <button className="rounded-full flex items-center bg-white px-8 py-3 text-black font-[400]">
            Learn More    
          </button>

        </div>

        {/* Dashboard */}

        {/* <div className="mt-20 w-full">
          <img
            src="/homepage/dashboard.png"
            className="mx-auto w-full max-w-6xl rounded-[30px]"
          />
        </div> */}

      </div>
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source
    src="/homepage/earth.mp4"
    type="video/mp4"
  />
</video>
      <div className="absolute inset-0 bg-black/70" />

    </section>
  );
}
