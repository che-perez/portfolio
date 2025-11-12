import React from "react";
import { motion, useInView } from "framer-motion";

import { attributes } from "../../content/skills.md"

export default function Skills() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  let { skills_box } = attributes;

  return (
    <section id="skills" ref={ref} className="py-20 bg-[#E8DCC4]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-4 border-[#2C2416] bg-[#F5EFE0] p-8 md:p-12">

          {/* Header */}
          <div className="border-b-2 border-[#2C2416] pb-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase">
              SECTION B: TECHNICAL COMPETENCIES
            </h2>
            <p className="text-sm mt-2 tracking-wider opacity-70">
              CLASSIFIED SKILL ASSESSMENT - AUTHORIZATION LEVEL: PUBLIC
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills_box.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-2 border-[#2C2416] bg-[#E8DCC4] p-6">

                {/* Category Header */}
                <div className="flex justify-between items-start mb-4 pb-3 border-b border-[#2C2416]">
                  <div>
                    <h3 className="text-lg font-bold tracking-wide uppercase">{skill.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {skill.skills_list.map((name,idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-[#2C2416] flex-shrink-0" />
                      <span className="tracking-wide uppercase">{name.skill}</span>
                    </div>
                  ))}
                </div>

                {/* Verification */}
                <div className="mt-4 pt-3 border-t border-[#2C2416] text-xs opacity-70">
                  STATUS: VERIFIED & CURRENT
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}