import { motion } from "framer-motion";
import { User } from "lucide-react";

import { attributes } from "../../content/cover.md"

export default function Cover() {

  let { name, position, department, specialization, experience, status } = attributes;

  let profile_pic = "/assets/Profile_Picture.jpg";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 bg-[#E8DCC4]">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-4 border-[#2C2416] bg-[#F5EFE0] p-8 md:p-12"
        >
          {/* Header */}
          <div className="border-b-2 border-[#2C2416] pb-6 mb-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wider mb-2">
              PERSONNEL FILE
            </h1>
            <p className="text-lg uppercase tracking-widest">
              DEVELOPER PERFORMANCE REPORT
            </p>
            <p className="text-sm mt-2 tracking-wider">
              END OF YEAR REVIEW - CURRENT STATUS
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex gap-4 items-baseline border-b border-[#2C2416] pb-2">
                <span className="font-bold uppercase tracking-wider min-w-[140px]">Name:</span>
                <span className="flex-1 underline decoration-dotted">{name}</span>
              </div>

              <div className="flex gap-4 items-baseline border-b border-[#2C2416] pb-2">
                <span className="font-bold uppercase tracking-wider min-w-[140px]">POSITION:</span>
                <span className="flex-1 underline decoration-dotted">{position}</span>
              </div>

              <div className="flex gap-4 items-baseline border-b border-[#2C2416] pb-2">
                <span className="font-bold uppercase tracking-wider min-w-[140px]">DEPARTMENT:</span>
                <span className="flex-1 underline decoration-dotted">{department}</span>
              </div>

              <div className="mt-8 pt-4 border-t-2 border-[#2C2416]">
                <div className="flex gap-4 items-baseline border-b border-[#2C2416] pb-2">
                  <span className="font-bold uppercase tracking-wider min-w-[140px]">SPECIALIZATION:</span>
                  <span className="flex-1">{specialization}</span>
                </div>

                <div className="flex gap-4 items-baseline border-b border-[#2C2416] pb-2 mt-3">
                  <span className="font-bold uppercase tracking-wider min-w-[140px]">EXPERIENCE:</span>
                  <span className="flex-1">{experience}</span>
                </div>

                <div className="flex gap-4 items-baseline border-b border-[#2C2416] pb-2 mt-3">
                  <span className="font-bold uppercase tracking-wider min-w-[140px]">STATUS:</span>
                  <span className="flex-1 font-bold uppercase">{status}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="border-4 border-[#4A3829] bg-[#C9B99A] aspect-[3/4] flex items-center justify-center relative lg:mt-0 overflow-hidden"
              style={{ boxShadow: 'inset 0 0 30px rgba(92,74,58,0.15), 4px 4px 10px rgba(74,56,41,0.3)'}}>
              <img src={profile_pic} alt="Developer profile" className="w-full h-full object-cover"/> 
               {/* <User className="w-32 h-32 text-[#2C2416]" strokeWidth={1} />  */}
            </div>
          </div>

          {/* Stamp */}
          <div className="mt-8 flex justify-end">
            <div className="border-4 border-[#A52A2A] text-[#A52A2A] px-6 py-3 rotate-12 font-bold text-2xl tracking-widest opacity-70">
              OPEN FOR WORK
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

