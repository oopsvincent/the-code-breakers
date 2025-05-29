//main page.tsx
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-7xl md:text-8xl font-heading tracking-wide mb-6"
      >
        The Code Breakers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl text-lg sm:text-xl text-gray-400 font-subheading"
      >
        Crafting smart, sleek, and futuristic web experiences with a passion for code and music.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 text-sm text-gray-500 max-w-2xl font-subheading"
      >
        <p className="mb-2">
          <span className="text-white font-medium">Founded:</span> May 14th, 2025
        </p>
        <p className="mb-2">
          <span className="text-white font-medium">Team Leaders:</span> Farhan Ali Reza & Soumodip Mondal
        </p>
        <p>
          We are a group of passionate developers, designers, and dreamers who love building innovative, elegant, and meaningful digital products. From song recommenders to futuristic web apps, we believe in simplicity, creativity, and collaboration.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <button
          onClick={() => router.push("/projects")}
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-black hover:text-white hover:border-1 transition-all duration-300"
        >
          Explore Projects
        </button>
        <button
          onClick={() => router.push("/team")}
          className="px-6 py-3 rounded-2xl border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Meet the Team
        </button>
      </motion.div>
    </main>
  );
}