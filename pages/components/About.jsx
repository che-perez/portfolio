import React from "react";
import { motion, useInView } from "framer-motion";

import { attributes, react as Intro } from "../../content/about.md"

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { jobs } = attributes;

  return (
    <section id="about" ref={ref} className="py-20 bg-[#D4C5A9]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-4 border-[#2C2416] bg-[#F5EFE0] p-8 md:p-12">
          
          {/* Header */}
          <div className="border-b-2 border-[#2C2416] pb-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase">
              SECTION A: PERSONNEL BACKGROUND
            </h2>
          </div>

          {/* Remarks Section */}
          <div className="mb-8">
            <p className="font-bold uppercase tracking-wider mb-4 text-lg">REMARKS:</p>
            <div className="space-y-4 text-base uppercase  leading-relaxed">
              <Intro/>
            </div>
          </div>

          {/* Job Experience Section */}
          <div className="border-t-2 border-[#4A3829] pt-8">
            <h3 className="font-bold uppercase tracking-wider mb-6 text-lg flex items-center gap-2 text-[#2C1810]">
              <span className="w-2 h-2 bg-[#1A1410]" />
              EMPLOYMENT HISTORY:
            </h3>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-2 border-[#5C4A3A] bg-[#E8D7BE] p-6 relative"
                  style={{ boxShadow: '4px 4px 12px rgba(92,74,58,0.25), inset 0 0 20px rgba(218,165,32,0.06)'}}>

                  {/* Paper clip mark */}
                  <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-[#CFC0A3] border-2 border-[#6B5644]" /> 
                  
                  <header className="border-b border-[#6B5644] pb-3 mb-4">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h4 className="text-xl font-bold uppercase text-[#1A1410]">{job.company_name}</h4>
                      <span className="text-sm font-bold tracking-wider text-[#3D2F1F] px-3 py-1 border border-[#6B5644] bg-[#CFC0A3]" style={{boxShadow: '2px 2px 4px rgba(92,74,58,0.15)'}}>
                        {job.year_start} - {job.year_end}
                      </span>
                    </div>
                    <div className="mt-2 text-base font-bold uppercase tracking-wide text-[#2C1810]">{job.role}</div>
                  </header>

                  <div>
                    <div className="text-xs font-bold tracking-widest mb-3 uppercase text-[#3D2F1F] flex items-center gap-2">
                      <span>KEY RESPONSIBILITIES:</span>
                    </div>
                    <ul className="space-y-2">
                      {job.job_details.map((dt, idx) => (
                        <li key={idx} className="flex items-start gap-2 uppercase text-sm text-[#1A1410]">
                          <span className="w-1.5 h-1.5 bg-[#1A1410] mt-1.5 flex-shrink-0" />
                          <span>{dt.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}