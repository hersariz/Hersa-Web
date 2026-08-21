import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Github } from 'lucide-react';
import ProjectDetails from './ProjectDetails';
import { projects, type Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  onViewDetails: (project: Project) => void;
};

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10 }}
      className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative group h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onViewDetails(project)}
            className="p-2 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            aria-label={`View details for ${project.title}`}
          >
            <Eye size={18} />
          </motion.button>
        </motion.div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            {project.category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-500">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 italic">{project.role}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-3 py-1 text-gray-500 dark:text-gray-500 text-xs">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-4">
          <motion.button
            onClick={() => onViewDetails(project)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>View Details</span>
            <Eye size={16} className="ml-2" />
          </motion.button>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Github size={16} className="mr-1.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ['All', ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Selected Work</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Client products delivered for an international team, alongside things I built on my own.
            Client repositories are private, so those entries describe the work rather than link to it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center flex-wrap gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <ProjectCard project={project} onViewDetails={handleViewDetails} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectDetails project={selectedProject} isOpen={modalOpen} onClose={closeModal} />
    </section>
  );
};

export default Projects;
