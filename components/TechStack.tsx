"use client";

import { techStack } from "@/data";

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {techStack.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/10 hover:scale-105 transition-all"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="w-14 h-14 object-contain"
            />
            <p className="text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;