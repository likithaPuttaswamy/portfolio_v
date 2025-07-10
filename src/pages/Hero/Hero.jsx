import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import Mech3D from "@/assets/images/mechanical-3d.png"; // <- make sure this image is in the correct path

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-30"
      >
        <source src="/backgrounds/3d-animation.mp4" type="video/mp4" />
        <img
          src="/assets/images/hero-3d-backup.jpg"
          alt="Mechanical Engineering 3D Background"
          className="w-full h-full object-cover"
        />
      </video>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Mechanical Engineer",
    "CAD & Simulation Expert",
    "Automation Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
        <ThreeDBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
              <SparklesText text="Hello.." />
              <br></br>
              <span className="ml-2">I'm <br></br>
                
              <span className="gradient-text">
              VINEETH AMGOTHU..</span></span>
            </h1>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6">
              <FlipWords className="text-lg text-blue-400 font-medium" words={words} />
            </div>
            <br></br>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-gray-500 text-gray-300 rounded-md hover:bg-gray-800 transition"
            >
              View Resume Here
            </a>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src={Mech3D}
              alt="Mechanical Engineering Robot Arm"
              className="w-[90%] max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <PortfolioPage />
    </main>
  );
}
