// page.tsx (updated to use project import for sneak peek)
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Star, Sparkles, Trophy, UserCheck } from "lucide-react";
import { projects } from "@/app/data/projects";

export default function HomePage() {
  const router = useRouter();

  const featuredProject = projects[0]; // get the first project as featured

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black animate-pulse opacity-20" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-7xl md:text-8xl font-heading tracking-tight my-20"
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

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="my-22 flex flex-wrap gap-4 justify-center"
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

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 text-sm text-gray-400 max-w-2xl font-subheading text-left"
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

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
      >
        <div>
          <h3 className="text-3xl font-bold text-white">5+</h3>
          <p className="text-sm text-gray-400">Projects</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">2025</h3>
          <p className="text-sm text-gray-400">Founded</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">2</h3>
          <p className="text-sm text-gray-400">Team Leaders</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">100%</h3>
          <p className="text-sm text-gray-400">Commitment</p>
        </div>
      </motion.div>

      {/* Featured Project Preview */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-16 max-w-xl bg-white/10 p-6 rounded-2xl border border-gray-800 text-left backdrop-blur"
        >
          <h3 className="text-2xl font-bold text-white mb-2">{featuredProject.title}</h3>
          <p className="text-sm text-gray-300 mb-3">{featuredProject.description}</p>
          <div className="flex flex-wrap gap-2 text-xs text-white">
            {featuredProject.tech.map((tech, i) => (
              <span key={i} className="bg-white/10 px-3 py-1 rounded-full backdrop-blur">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="mt-20 max-w-2xl text-left"
      >
        <h4 className="text-xl font-bold text-white mb-4">What People Say</h4>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
          “The Code Breakers blew my mind with their seamless design and unique concepts. Can't wait to see what they build next!” — A Fan
        </blockquote>
      </motion.div>

      {/* Roadmap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="mt-20 max-w-3xl text-left"
      >
        <h4 className="text-xl font-bold text-white mb-4">🚀 Roadmap</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>📌 Launch v2 of Song Recommender with playlist export</li>
          <li>🌐 Expand into mobile platforms</li>
          <li>🛠️ Open source utility libraries</li>
          <li>🤝 Community collaborations & hackathons</li>
        </ul>
      </motion.div>

      {/* Achievements / Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-20 max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
      >
        <div className="bg-white/10 p-4 rounded-xl">
          <Trophy className="mx-auto mb-2" />
          <p className="text-sm">Hackathon Finalists</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl">
          <Sparkles className="mx-auto mb-2" />
          <p className="text-sm">Innovator Badge</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl">
          <Star className="mx-auto mb-2" />
          <p className="text-sm">Top Rated App</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl">
          <UserCheck className="mx-auto mb-2" />
          <p className="text-sm">Verified Team</p>
        </div>
      </motion.div>
    </main>
  );
}
