import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#E8DCC4] text-[#2C2416] overflow-x-hidden" style={{ fontFamily: "'Courier New', monospace" }}>
      {/* Typewriter Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b-2 border-[#2C2416]
          ${scrollY > 100 ? "bg-[#E8DCC4]" : "bg-[#D4C5A9]"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">
            &lt;DEVELOPER_FILE/&gt;
          </div>

          <ul className="hidden md:flex gap-8 uppercase text-sm tracking-widest">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li>
                <a key={item}
                   href={`#${item.toLowerCase()}`}
                   className="hover:underline transition-all"> [{ item }]
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Footer */}
      <footer className="bg-[#D4C5A9] border-t-2 border-[#2C2416] py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p className="tracking-wider">©{currentYear} PERSONNEL FILE - CLASSIFIED DOCUMENT - AUTHORIZED PERSONNEL ONLY</p>
        </div>
      </footer>
    </div>
  );
}