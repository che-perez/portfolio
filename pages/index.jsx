import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Josue Perez - Developer File</title>
        <meta name="description" content="Josue Perez Web Developer Portfolio" />
        <meta name="author" content="Josue Perez" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      {/* Skip to main content link for keyboard users */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1A1410] focus:text-[#F5E6D3] focus:border-2 focus:border-[#8B4513] focus:font-bold">
          SKIP TO MAIN CONTENT
        </a>

      <div className="bg-[#E8DCC4] text-[#2C2416] overflow-x-hidden" style={{ fontFamily: "'Courier New', monospace" }}>
        {/* Typewriter Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          role="navigation"
          aria-label="Main Navigation"
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b-2 border-[#2C2416]
            ${scrollY > 100 ? "bg-[#E8DCC4]" : "bg-[#D4C5A9]"}`}>

          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold tracking-wider" role="heading" aria-level="1">
              &lt;DEVELOPER_FILE/&gt;
            </div>

            <ul className="hidden md:flex gap-8 uppercase text-sm tracking-widest">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-[#2C2416] focus:ring-offset-2 focus:ring-offset-[#E8DCC4] px-2 py-1"
                     aria-label={`Navigate to ${item} section`}>[{ item }]</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>

        <main id="main-content" role="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-[#D4C5A9] border-t-2 border-[#2C2416] py-6" role="contentinfo">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm">
            <p className="tracking-wider">©{currentYear} PERSONNEL FILE - CLASSIFIED DOCUMENT - AUTHORIZED PERSONNEL ONLY</p>
          </div>
        </footer>
      </div>
    </>
  );
}