import HeroImg from "@/assets/images/hero1.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-20">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          🚀 Passionate Mechanical Engineer & Automation Enthusiast
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Image */}
          <div className="relative">
            <div className="aspect-76/59 relative rounded-2xl p-px">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow-lg border border-gray-700"
                alt="Vineeth Amgothu"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6 text-white text-lg text-justify">
            <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Hi, I'm VINEETH AMGOTHU
            </p>

            <p>
              I'm currently pursuing an{" "}
              <strong className="text-teal-400">
                MSc in Advanced Mechanical Engineering
              </strong>{" "}
              at the <strong className="text-purple-400">University of Strathclyde</strong>, UK.
            </p>

            <p>
              With a strong foundation in{" "}
              <strong className="text-yellow-300">mechanical design</strong> and{" "}
              <strong className="text-green-300">automation systems</strong>, I specialize in CAD modeling,
              simulation, and control system integration.
            </p>

            <p>
              My technical toolkit includes{" "}
              <strong>SolidWorks, ANSYS, AutoCAD, CATIA, MATLAB, Simulink</strong>, and embedded systems using Arduino.
            </p>

            <p>
              I am driven by a desire to create efficient, sustainable, and innovative mechanical solutions through
              data-driven design and real-world engineering principles.
            </p>

            <p>
              Beyond academics, I actively explore the intersection of mechanical engineering and emerging technologies —
              combining simulation, mechatronics, and control strategies to solve complex engineering challenges.
            </p>

            <p>
              I thrive in collaborative environments where{" "}
              <strong className="text-blue-400">innovation</strong>,{" "}
              <strong className="text-pink-400">precision</strong>, and{" "}
              <strong className="text-green-300">sustainability</strong> converge, and I continuously seek opportunities
              to apply my skills in dynamic, real-world industrial settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
