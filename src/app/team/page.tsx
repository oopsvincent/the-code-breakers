"use client";

import Image from "next/image";
import { Github, Linkedin, Facebook, Instagram, Twitter, User, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { team } from "../data/team";

export default function TeamPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen px-6 py-12 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black animate-pulse opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-between items-center max-w-6xl mx-auto mb-10"
      >
        <h2 className="text-4xl font-heading">Meet the Team</h2>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white px-4 py-2 rounded-full"
        >
          <Home className="w-4 h-4" /> Home
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {team.map((member, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/30 transition flex flex-col items-center text-center"
          >
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="rounded-full mb-4 object-cover"
              />
            ) : (
              <div className="w-24 h-24 mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                <User className="text-gray-400 w-10 h-10" />
              </div>
            )}
            <h3 className="text-xl font-subheading font-semibold mb-1">{member.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{member.role}</p>
            <div className="flex gap-4">
              <a href={member.github} target="_blank" className="hover:text-cyan-400">
                <Github className="w-5 h-5" />
              </a>
              <a href={member.linkedin} target="_blank" className="hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={member.facebook} target="_blank" className="hover:text-cyan-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={member.instagram} target="_blank" className="hover:text-cyan-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={member.twitter} target="_blank" className="hover:text-cyan-400">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </main>
  );
}
