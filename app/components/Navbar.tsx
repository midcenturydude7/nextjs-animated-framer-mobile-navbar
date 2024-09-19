"use client";
import React from "react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

export default function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className="sticky inset-x-0 top-0 h-16 bg-slate-950/25">
      <div className="container mx-auto flex h-full items-center px-4">
        <div className="relative z-10">
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
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
              duration: 0.4,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    when: "beforeChildren",
                    type: "spring",
                    bounce: 0.099,
                    duration: 0.4,
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.099,
                    duration: 0.25,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="container fixed inset-0 mx-auto flex flex-col justify-center space-y-10 bg-blue-600 p-6 lg:hidden"
            >
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link #1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link #2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link #3
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="h-px w-full bg-white"
              ></motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="flex items-center justify-center gap-x-5">
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-gray-300"></div>
                  </li>
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-gray-300"></div>
                  </li>
                  <li>
                    <div className="h-10 w-10 rounded-lg bg-gray-300"></div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
}
