import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, live, github }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="border border-gray-800 rounded-xl p-6 hover:border-gray-600"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-6">Tech: {tech}</p>

      <div className="flex gap-4 text-sm">
        <a href={live} target="_blank" className="underline">Live</a>
        <a href={github} target="_blank" className="underline">GitHub</a>
      </div>
    </motion.div>
  );
}
