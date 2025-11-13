import React from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  let contacts  = [ { icon: Github, label: "GITHUB", href: "https://github.com/che-perez" },
                    { icon: Linkedin, label: "LINKEDIN", href: "https://www.linkedin.com/in/jn-perez/" },
                    { icon: FileText, label: "RESUME PDF", href: "/assets/JosuePerez-Resume.pdf" },
                    { icon: Mail, label: "EMAIL", href: "mailto:che.perez3@gmail.com" }];

  return (
    <section id="contact" ref={ref} className="py-20 bg-[#DED3B8]"aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-4 border-[#5C4A3A] bg-[#F5E6D3] p-6 md:p-12 relative"
          role="article"
          style={{ boxShadow: '10px 10px 25px rgba(92,74,58,0.4), inset 0 0 100px rgba(205,133,63,0.08)', transform: 'rotate(-0.3deg)'}}>

          {/* Header */}
          <header className="border-b-2 border-[#4A3829] pb-4 mb-8 relative">
            <h2 id="contact-heading" className="text-2xl md:text-4xl font-bold tracking-wider uppercase text-[#1A1410]">SECTION D: CONTACT PROTOCOL</h2>
            <p className="text-xs md:text-sm mt-2 tracking-wider opacity-70 text-[#3D2F1F]">AUTHORIZED COMMUNICATION CHANNELS</p>
          </header>

          <div className="max-w-2xl mx-auto">
            {/* Social Links */}
            <h3 className="font-bold uppercase tracking-wider mb-6 text-base md:text-lg flex items-center gap-2 text-[#2C1810]">
              <span className="w-2 h-2 bg-[#1A1410]" aria-hidden="true" />
              AUTHORIZED CHANNELS:
            </h3>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Social Media Links">
              {contacts.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 p-4 border-2 border-[#5C4A3A] bg-[#CFC0A3] hover:bg-[#2C1810] hover:text-[#F5E6D3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-offset-2 text-[#1A1410]"
                  aria-label={`Connect on ${social.label}`}
                  style={{boxShadow: '3px 3px 10px rgba(92,74,58,0.25)'}}>
                  
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                  <span className="font-bold text-sm tracking-wide">{social.label}</span>
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </section>
  );
}