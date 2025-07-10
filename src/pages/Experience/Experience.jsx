import React from "react";
import { Network } from "lucide-react";

// Experience Card
const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  certificateLink,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />
    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>

        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-medium text-teal-400 hover:underline hover:text-teal-300 transition"
          >
            <b>🔗 View Experience Certificate</b>
          </a>
        )}
      </div>
    </div>
  </div>
);

// Certificate Gallery with 3D hover effects
const CertificateGallery = ({ images }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
    {images.map((src, index) => (
      <div key={index} className="group perspective">
        <div className="relative transition-all duration-500 transform-gpu group-hover:scale-[1.03] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] rounded-xl border border-cyan-400/20 hover:border-cyan-500 bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-1">
          <img
            src={src}
            alt={`Certificate ${index + 1}`}
            className="w-full h-auto rounded-lg object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400 transition duration-300 pointer-events-none" />
          <div className="absolute inset-0 blur-xl opacity-10 group-hover:opacity-30 bg-cyan-400 rounded-xl z-[-1] transition duration-700" />
        </div>
      </div>
    ))}
  </div>
);

// Main Section
const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Junior Engineer",
      company: "Mahindra Tractors",
      period: "March 2020",
      description:
        "Assisted in assembly and inspection of tractor components. Gained hands-on experience with mechanical systems and workshop tools.",
      certificateLink: "/certificates/certificate.jpg",
    },
  ];

  const certificates = [
    "/certificates/cert1.jpg",
    "/certificates/cert2.jpg",
    "/certificates/certi3.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Section Content */}
      <div className="relative container mx-auto px-6 mt-10">
        {/* Heading */}
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              Professional Journey
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl">
            "Where mechanical design meets intelligent automation."
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>

        {/* Certifications Section */}
        <div className="relative flex flex-col items-center space-y-6 mt-24 mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-center">
            Certifications
          </h2>
          <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl">
            "Demonstrating dedication through verified skills and achievements."
          </p>
        </div>

        {/* Gallery */}
        <CertificateGallery images={certificates} />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default ExperienceSection;
