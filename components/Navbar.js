import React from 'react'
import Link from 'next/link'
import { motion,AnimatePresence } from 'framer-motion'
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/Projects" },
    { name: "Experience", path: "/Experience" },
    { name: "Contact", path: "/Contact" },
    { name: "About", path: "/About" },
  ];

  return (
    
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="relative w-full min-w-0 max-w-full box-border flex items-center justify-between px-3 md:px-6 h-12 bg-zinc-800 hover:bg-zinc-900 shadow-lg shadow-orange-300 sticky top-0 z-50 overflow-visible hover:shadow-orange-400"
>
  {/* Logo */}
  <Link href="/" onClick={() => setIsOpen(false)} className="shrink-0">
    <p className="text-white font-semibold rounded-xl text-center h-8 w-8 mt-2 shadow-white shadow-inner text-xl">
      PK
    </p>
  </Link>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-6 text-slate-300 text-lg font-serif">
    {navLinks.map((item) => (
      <Link
        key={item.name}
        href={item.path}
        className="px-1 hover:shadow-md hover:shadow-orange-300 rounded-sm"
      >
        {item.name}
      </Link>
    ))}
  </div>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden shrink-0 text-white text-2xl px-2"
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
  >
    {isOpen ? "✕" : "☰"}
  </button>

  {/* Mobile Dropdown */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-12 left-0 right-0 w-auto box-border bg-zinc-800 shadow-lg shadow-orange-300 md:hidden flex flex-col items-center py-3 gap-4 text-slate-300 text-lg font-serif"
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-1 hover:text-green-400 hover:bg-zinc-700"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>

  );
};



export default Navbar
