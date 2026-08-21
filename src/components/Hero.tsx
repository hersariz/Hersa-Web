import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Instagram, Mail, MessageCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const textStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #00d2ff, #3a7bd5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative',
    display: 'inline-block',
    paddingRight: '4px',
    zIndex: 1
  };

  const caretStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    right: '0',
    top: '0',
    width: '2px',
    height: '100%',
    backgroundColor: '#3a7bd5',
    boxShadow: '0 0 5px #00d2ff, 0 0 10px #3a7bd5',
    borderRadius: '2px',
    animation: 'blink 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
    pointerEvents: 'none',
    zIndex: 1
  };

  return (
    <div>
      <section id="home" className=" bg-white dark:bg-gray-900">
      </section>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Quiet background: a faint grid with one soft accent wash.
            Static by choice — a hero that never stops moving is hard to read. */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
            }}
          />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[620px] rounded-full bg-accent-400/15 dark:bg-accent-500/10 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">
              Hello, I'm
            </h2>
            <div className="relative mb-16 inline-block">
              <div className="absolute -inset-4 flex items-center justify-center pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent-400 rounded-full"
                    initial={{ 
                      opacity: 0,
                      x: Math.random() * 250 - 100,
                      y: Math.random() * 100 - 50
                    }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: Math.random() * 250 - 100,
                      y: Math.random() * 100 - 50
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      repeatDelay: Math.random() * 3
                    }}
                  />
                ))}
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i + 10}
                    className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
                    initial={{ 
                      opacity: 0,
                      x: Math.random() * 250 - 100,
                      y: Math.random() * 100 - 50
                    }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                      x: Math.random() * 250 - 100,
                      y: Math.random() * 100 - 50
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      repeatDelay: Math.random() * 3
                    }}
                  />
                ))}
              </div>
              <div style={textStyle} className="hover-effect">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-purple-600 dark:from-accent-400 dark:to-purple-400 min-h-[1.2em] flex items-center justify-center">
                  <TypeAnimation
                    sequence={[
                      'Hersa Rizky Syahputra',
                      2000,
                      'a Programmer',
                      1500,
                      'a Software Developer',
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="inline-block"
                    cursor={false}
                  />
                  <span style={caretStyle} className="caret"></span>
                </h1>
              </div>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Programmer & Software Developer crafting beautiful digital experiences
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-4 mt-8 mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 min-w-[160px] inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600 text-white font-medium rounded-xl shadow-card hover:shadow-lg transition-all duration-300 dark:from-accent-500 dark:to-accent-400 dark:hover:from-accent-600 dark:hover:to-accent-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-1">✨</span>
                  <span>View My Work</span>
                  <span className="ml-1">✨</span>
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-700 to-purple-600 dark:from-accent-600 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 min-w-[160px] inline-flex items-center justify-center whitespace-nowrap bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl shadow-card hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-600 to-purple-600 dark:from-accent-400 dark:to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4 mt-8"
          >
            <div className="social-icons-container">
              <a
                href="https://wa.me/6281906281392"
                target="_blank"
                rel="noopener noreferrer"
                className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="mailto:Rizkymvp123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.instagram.com/risyaha/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center justify-center cursor-pointer"
          >
            <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </Link>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 100% {
              opacity: 1;
              transform: translateX(4px) scaleY(1);
            }
            50% {
              opacity: 0.5;
              transform: translateX(4px) scaleY(0.8);
            }
          }
          .hover-effect {
            transition: transform 0.3s ease;
            position: relative;
          }
          .hover-effect:hover {
            transform: scale(1.02);
            text-shadow: 0 0 15px #00d2ff, 0 0 25px #3a7bd5;
          }
          .social-icons-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
          }
          
          .social-icon {
            color: inherit;
            transition: all 0.3s ease;
          }
          
          .social-icon:hover {
            transform: scale(1.1);
            opacity: 0.8;
          }
          .hover-effect:hover .caret {
            transform: none;
            box-shadow: none;
            animation: none;
            text-shadow: none;
          }
        `}
      </style>
    </div>
  );
}
  export default Hero;
