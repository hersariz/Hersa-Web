import { ArrowUp, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hersa<span className="text-blue-400">.dev</span></h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Frontend developer focused on creating beautiful, responsive websites and applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/risyaha/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="mailto:Rizkymvp123@gmail.com"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Skills
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Testimonials
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <motion.li 
                whileHover={{ x: 5, color: "#fff" }} 
                transition={{ duration: 0.2 }}
              >
                Semarang, Indonesia
              </motion.li>
              <motion.li 
                whileHover={{ x: 5, color: "#fff" }} 
                transition={{ duration: 0.2 }}
              >
                <a 
                  href="mailto:Rizkymvp123@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  Rizkymvp123@gmail.com
                </a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5, color: "#fff" }} 
                transition={{ duration: 0.2 }}
              >
                <a 
                  href="https://wa.me/6281906281392" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  +62 819 0628 1392
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Hersa Rizky Syahputra. All rights reserved.</p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="absolute bottom-10 right-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg cursor-pointer flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
