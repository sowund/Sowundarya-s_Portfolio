"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-5">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Sowundarya
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4">
            Full Stack Developer & DSA Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            I craft user-centric full-stack applications and actively strengthen my
            problem-solving skills through Data Structures & Algorithms.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-white/10 text-white rounded-full font-medium border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center items-center"
        >
          <motion.a
            href="https://github.com/sowund"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sowundarya-r-0a92452a1/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            href="mailto:sowund19@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/50 hover:text-white/80 transition-colors"
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
