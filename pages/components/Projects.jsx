import React from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { attributes } from "../../content/projects.md"

export default function Projects() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { projects } = attributes;

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#D4C5A9]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-4 border-[#2C2416] bg-[#F5EFE0] p-8 md:p-12"
          role="article">

          {/* Header */}
          <div className="border-b-2 border-[#2C2416] pb-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase">SECTION C: PROJECT PORTFOLIO</h2>
          </div>
          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.code}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-2 border-[#2C2416] bg-[#E8DCC4] p-6 hover:bg-[#D4C5A9] transition-colors"
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest opacity-70">
                        {project.code}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-wide uppercase mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`text-xs font-bold tracking-wider px-3 py-1 border-2 ${
                      project.status === 'DEPLOYED' ? 'border-green-700 text-green-700' :
                      project.status === 'ACTIVE' ? 'border-blue-700 text-blue-700' :
                      'border-[#2C2416]'
                    }`}>
                      {project.status}
                    </div>
                    <a href={project.url} target="_blank" className="p-2 border-2 border-[#2C2416] hover:bg-[#2C2416] hover:text-[#E8DCC4] transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4 border-l-2 border-[#2C2416] pl-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="border-t border-[#2C2416] pt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-bold tracking-wider mr-2">TECH STACK:</span>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 border border-[#2C2416] bg-[#F5EFE0]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
