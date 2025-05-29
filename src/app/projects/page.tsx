"use client";

import { FolderKanban, ExternalLink, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const projects = [
  {
    name: "Song Recommender",
    description: "An AI-powered song suggestion app tailored to your mood.",
    tech: ["React.js", "TailwindCSS", "Node.js", "Vite", "Python", "Flask", "MySql"],
    link: "https://music-recommender-app.vercel.app",
  },
  // Add more projects here...
];

export default function ExploreProjects() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h2 className="text-4xl font-heading">Explore Projects</h2>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white px-4 py-2 rounded-full"
        >
          <Home className="w-4 h-4" /> Home
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FolderKanban className="text-white h-5 w-5" />
                <h3 className="text-xl font-subheading font-semibold text-white">
                  {project.name}
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
          </div>
        ))}
      </div>
    </div>
  );
}