import React from "react";
import { motion, useInView } from "framer-motion";

export default function Projects() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#D4C5A9]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-4 border-[#2C2416] bg-[#F5EFE0] p-8 md:p-12">

          {/* Header */}
          <div className="border-b-2 border-[#2C2416] pb-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase">SECTION C: PROJECT PORTFOLIO</h2>
          </div>

          COMING SOON!!!
        </motion.div>
      </div>
    </section>
  );
}
