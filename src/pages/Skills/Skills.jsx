import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Wrench,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    
    {
  icon: Wrench,
  title: "Mechanical Engineering Tools",
  color: "text-cyan-400",
  skills: [
    { name: "SolidWorks", icon: <BsFileEarmarkCode className="w-4 h-4 text-orange-300" /> },
    { name: "AutoCAD", icon: <BsFileEarmarkCode className="w-4 h-4 text-blue-400" /> },
    { name: "CATIA", icon: <BsFileEarmarkCode className="w-4 h-4 text-indigo-400" /> },
    { name: "ANSYS", icon: <BsFileEarmarkCode className="w-4 h-4 text-sky-400" /> },
    { name: "MATLAB", icon: <BsFileEarmarkCode className="w-4 h-4 text-yellow-400" /> },
    { name: "Simulink", icon: <BsFileEarmarkCode className="w-4 h-4 text-lime-400" /> },
    { name: "CAD & CAM", icon: <BsFileEarmarkCode className="w-4 h-4 text-emerald-400" /> },
    { name: "Frontend Engineering", icon: <BsFileEarmarkCode className="w-4 h-4 text-yellow-300" /> },
  ],
},
{
  icon: Cpu,
  title: "Core Mechanical Engineering Skills",
  color: "text-lime-400",
  skills: [
    { name: "FEA (Finite Element Analysis)", icon: <BsFileEarmarkCode className="w-4 h-4 text-purple-300" /> },
    { name: "CFD (Computational Fluid Dynamics)", icon: <BsFileEarmarkCode className="w-4 h-4 text-cyan-300" /> },
    { name: "Mechanics of Materials", icon: <BsFileEarmarkCode className="w-4 h-4 text-green-400" /> },
    { name: "Control Systems", icon: <BsFileEarmarkCode className="w-4 h-4 text-blue-500" /> },
    { name: "Thermo-Fluid Systems", icon: <BsFileEarmarkCode className="w-4 h-4 text-sky-300" /> },
    { name: "Product Lifecycle Management", icon: <BsFileEarmarkCode className="w-4 h-4 text-pink-300" /> },
    { name: "Structural Analysis", icon: <BsFileEarmarkCode className="w-4 h-4 text-indigo-300" /> },
    { name: "Automation Systems", icon: <BsFileEarmarkCode className="w-4 h-4 text-red-400" /> },
  ],
},
{
  icon: Paintbrush,
  title: "Mechanical Focus Areas",
  color: "text-sky-400",
  skills: [
    { name: "Advanced Mechanical Engineer", icon: <BsFileEarmarkCode className="w-4 h-4 text-sky-300" /> },
    { name: "SolidWorks & ANSYS Pro", icon: <BsFileEarmarkCode className="w-4 h-4 text-orange-400" /> },
    { name: "Product Optimization Enthusiast", icon: <BsFileEarmarkCode className="w-4 h-4 text-green-400" /> },
    { name: "Sustainable Engineering", icon: <BsFileEarmarkCode className="w-4 h-4 text-emerald-300" /> },
    { name: "Mechanical Systems Thinker", icon: <BsFileEarmarkCode className="w-4 h-4 text-purple-400" /> },
    { name: "MSc @ Strathclyde | Lab to Launch", icon: <BsFileEarmarkCode className="w-4 h-4 text-gray-300" /> },
    { name: "Data-Driven Decision Maker", icon: <BsFileEarmarkCode className="w-4 h-4 text-teal-300" /> },
  ],
},
{
  icon: Cloud,
  title: "Core Professional Skills",
  color: "text-fuchsia-400",
  skills: [
    { name: "Communication Skills", icon: <BsFileEarmarkCode className="w-4 h-4 text-pink-400" /> },
    { name: "Team Collaboration", icon: <BsFileEarmarkCode className="w-4 h-4 text-blue-300" /> },
    { name: "Problem Solving", icon: <BsFileEarmarkCode className="w-4 h-4 text-red-400" /> },
    { name: "Technical Writing", icon: <BsFileEarmarkCode className="w-4 h-4 text-gray-300" /> },
    { name: "Manual Dexterity", icon: <BsFileEarmarkCode className="w-4 h-4 text-amber-400" /> },
    { name: "Assembly Line Experience", icon: <BsFileEarmarkCode className="w-4 h-4 text-cyan-200" /> },
  ],
}

  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
