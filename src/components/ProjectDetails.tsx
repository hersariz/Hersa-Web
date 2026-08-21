import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Lock } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectDetailsProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetails = ({ project, isOpen, onClose }: ProjectDetailsProps) => {
  if (!project) return null;

  const images = project.images?.length ? project.images : [project.image];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: isOpen ? 0 : 50, opacity: isOpen ? 1 : 0 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-2 gap-4">
            <div>
              <span className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                {project.category} · {project.year}
              </span>
              <h2 className="text-2xl font-bold mt-1">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.role}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 shrink-0 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Close project details"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 mb-6 mt-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Github size={16} className="mr-2" />
                View Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent-600 text-white text-sm font-medium hover:bg-accent-700 transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Site
              </a>
            )}
            {!project.githubLink && !project.liveLink && (
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">
                <Lock size={14} className="mr-2" />
                Client project — repository is private
              </span>
            )}
          </div>

          {/* Images */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-contain rounded-xl border border-gray-100 dark:border-gray-800"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Case study */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  The Problem
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-accent-50 dark:bg-accent-900/20">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-2">
                  What I Built
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex text-gray-600 dark:text-gray-400 text-sm">
                    <span className="mr-2 text-accent-600 dark:text-accent-400">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
