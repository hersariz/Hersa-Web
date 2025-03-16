import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    category: 'Web Development',
    image: '/gambar/e-commerce/e5.png',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, and checkout functionality.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    githubLink: '#',
    images: [
      '/gambar/e-commerce/e5.png',
      '/gambar/e-commerce/e6.png',
      '/gambar/e-commerce/e4.png',
      '/gambar/e-commerce/e1.png',
      '/gambar/e-commerce/e2.png',
      '/gambar/e-commerce/e3.png',
    ],
    challenge: 'The client needed a scalable e-commerce solution with a seamless checkout process and advanced product filtering capabilities.',
    solution: 'I developed a custom e-commerce platform using React for the frontend and Node.js for the backend, with MongoDB for data storage and Stripe for payment processing.',
    features: [
      'Advanced product filtering and search',
      'Secure payment processing with Stripe',
      'User authentication and order history',
      'Admin dashboard for product and order management',
      'Responsive design for all devices'
    ]
  },
  {
    id: 2,
    title: 'CRM App',
    category: 'Application',
    image: '/gambar/CRMapp/c2.png',
    description: 'A Customer Relationship Management Software for phone supported with AI Assistants',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
    images: [
      '/gambar/CRMapp/c1.png',
      '/gambar/CRMapp/c2.png',
      '/gambar/CRMapp/c3.png',
      '/gambar/CRMapp/c4.png',
      '/gambar/CRMapp/c5.png',
      '/gambar/CRMapp/c6.png',
      '/gambar/CRMapp/c7.png',
    ],
    challenge: 'The client needed a CRM solution that could manage customer interactions efficiently, especially for phone-based support, while integrating AI assistants to enhance productivity.',
    solution: 'I developed a CRM software with a focus on phone support, integrating AI assistants to automate responses, track customer interactions, and provide real-time insights. The system was built using React and TypeScript for the frontend, with Firebase for real-time data management and Tailwind CSS for a responsive design.',
    features: [
      'Monitoring System',
      'Automatic Round Robin logic',
      'Smart System Environment',
      'Reminder for inventory',
      'Monthly Report',
      'Ai Assistant'
    ]
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    category: 'Mobile App',
    image: '/gambar/fitness/f2.png',
    description: 'A fitness tracking application that allows users to log workouts, track progress, and set goals.',
    technologies: ['React Native', 'Redux', 'Firebase'],
    liveLink: '#',
    githubLink: '#',
    images: [
      '/gambar/fitness/f1.png',
      '/gambar/fitness/f2.png',
      '/gambar/fitness/f3.png',
      '/gambar/fitness/f4.png',
      '/gambar/fitness/f5.png',
    ],
    challenge: 'The client wanted a mobile application that would help users track their fitness journey with detailed analytics and motivational features.',
    solution: 'I developed a React Native app with a clean UI that makes it easy to log workouts, track progress over time, and set achievable fitness goals.',
    features: [
      'Workout logging with custom exercises',
      'Progress tracking with charts and visualizations',
      'Goal setting and achievement badges',
      'Personalized workout recommendations',
      'Social sharing capabilities'
    ]
  },
  {
    id: 4,
    title: 'Company Website',
    category: 'Web Design',
    image: '/gambar/portofolio/p3.png',
    description: 'A company portfolio website showcasing products, history company, and contact information.',
    technologies: ['HTML', 'CSS', 'JavaScript', ],
    liveLink: '#',
    githubLink: '#',
    images: [
      '/gambar/portofolio/p1.png',
      '/gambar/portofolio/p2.png',
      '/gambar/portofolio/p3.png',
      '/gambar/portofolio/p4.png',
      '/gambar/portofolio/p5.png',
      '/gambar/portofolio/p6.png',
      '/gambar/portofolio/p7.png',
      ],
    challenge: 'The designer needed a portfolio site that would showcase their work in a visually appealing way while highlighting their unique style and skills.',
    solution: 'I created a minimalist yet engaging portfolio website with smooth animations using GSAP, with a focus on showcasing the designer\'s work through high-quality images and detailed case studies.',
    features: [
      'Animated page transitions and scroll effects',
      'Project gallery with filterable categories',
      'Integrated contact form',
      'Performance optimized for fast loading',
      'SEO-friendly architecture'
    ]
  },
];

// Definisikan tipe untuk project
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  images: string[];
  challenge: string;
  solution: string;
  features: string[];
};

// Definisikan tipe untuk props ProjectCard
type ProjectCardProps = {
  project: Project;
  onViewDetails: (project: Project) => void;
};

// Gunakan tipe di komponen ProjectCard
const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
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
          <motion.div 
            className="flex space-x-3"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onViewDetails(project)}
              className="p-2 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="View project details"
            >
              <Eye size={18} />
            </motion.button>
    
          </motion.div>
        </motion.div>
      </div>
      <div className="p-6">
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider"
        >
          {project.category}
        </motion.span>
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-xl font-bold mt-2 mb-3"
        >
          {project.title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400 text-sm mb-4"
        >
          {project.description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {project.technologies.map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <motion.button
          onClick={() => onViewDetails(project)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <span>View Details</span>
          <Eye size={16} className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <ProjectCard project={project} onViewDetails={handleViewDetails} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <ProjectDetails 
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
