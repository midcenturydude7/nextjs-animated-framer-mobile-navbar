"use client";
import React from "react";
import { motion, useCycle } from "framer-motion";

export default function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className="sticky inset-x-0 top-0 h-16 bg-slate-950/25">
      <div className="container mx-auto flex h-full items-center px-4">
        <div>
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            onClick={() => toggleMobileNav()}
            className="flex flex-col space-y-1"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="block h-px w-5 bg-white"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="block h-px w-5 bg-white"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="block h-px w-5 bg-white"
            ></motion.span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
