"use client";

import { motion } from "framer-motion";
import { FolderKanban, ExternalLink, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "../data/projects";

export default function ExploreProjects() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen px-6 py-12 bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black animate-pulse opacity-20" />

      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h2 className="text-4xl font-heading">Explore Projects</h2>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white px-4 py-2 rounded-full"
        >
          <Home className="w-4 h-4" /> Home
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
            key={idx}
            className="rounded-2xl bg-white/5 backdrop-blur p-6 border border-white/10 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FolderKanban className="text-white h-5 w-5" />
                <h3 className="text-xl font-subheading font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-white mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-blue-400 hover:underline text-sm"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
