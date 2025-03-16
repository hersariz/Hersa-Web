import { motion } from 'framer-motion';
import { Mail, MapPin, User, Briefcase } from 'lucide-react';
import { useState } from 'react'; // Tambahkan useState untuk toggle bahasa

const About = () => {
  const [isEnglish, setIsEnglish] = useState(false); // State untuk toggle bahasa

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-1/3 lg:w-2/5 flex justify-center"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute -inset-2 rounded-xl blur opacity-30 animate-blink"
                style={{
                  boxShadow: '0 0 50px 20px rgba(100, 180, 255, 0.8), 0 0 100px 40px rgba(0, 210, 255, 0.6)' // Warna untuk tema terang
                }}
              ></div>
              <img 
                src="/gambar/hersa.jpg" 
                alt="Hersa Rizky Syahputra" 
                className="rounded-lg shadow-lg w-[300px] h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-2/3 lg:w-3/5"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {isEnglish ? 'Software Developer & Programmer' : 'Pengembang Perangkat Lunak & Programmer'}
            </motion.h3>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {isEnglish
                ? "I'm Hersa Rizky Syahputra, a passionate software developer and programmer based in Semarang, Indonesia. With 3+ years of experience, I specialize in creating beautiful, functional, and user-friendly applications and websites."
                : "Saya Hersa Rizky Syahputra, seorang pengembang perangkat lunak dan programmer berbasis di Semarang, Indonesia. Dengan pengalaman lebih dari 3 tahun, saya mengkhususkan diri dalam membuat aplikasi dan website yang indah, fungsional, dan ramah pengguna."}
            </motion.p>

            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {isEnglish
                ? "My journey in software development started in 2022, and since then, I've honed my skills in React, TypeScript, and modern CSS frameworks like Tailwind. I'm committed to writing clean, efficient code and creating intuitive, accessible interfaces."
                : "Perjalanan saya dalam pengembangan perangkat lunak dimulai pada tahun 2022, dan sejak itu, saya telah mengasah keterampilan saya dalam React, TypeScript, dan framework CSS modern seperti Tailwind. Saya berkomitmen untuk menulis kode yang bersih dan efisien serta membuat antarmuka yang intuitif dan mudah diakses."}
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-2">{isEnglish ? 'Name:' : 'Nama:'}</h4>
                  <p className="text-gray-700 dark:text-gray-300">Hersa Rizky Syahputra</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <a 
                    href="mailto:Rizkymvp123@gmail.com" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Rizkymvp123@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-2">{isEnglish ? 'Location:' : 'Lokasi:'}</h4>
                  <a 
                    href="https://maps.app.goo.gl/8ovm42m2W3UFu5vk6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Semarang, Indonesia
                  </a>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-2">{isEnglish ? 'Availability:' : 'Ketersediaan:'}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{isEnglish ? 'Open to opportunities' : 'Terbuka untuk peluang baru'}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://wa.me/6281906281392" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 min-w-[160px] inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 dark:from-blue-500 dark:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-1">✨</span>
                    <span>{isEnglish ? 'Contact Me' : 'Hubungi Saya'}</span>
                    <span className="ml-1">✨</span>
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-600 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                </a>
              </motion.div>

              {/* Toggle Bahasa */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setIsEnglish(!isEnglish)}
                  className="px-6 py-3 min-w-[160px] inline-flex items-center justify-center whitespace-nowrap bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
                >
                  <motion.span
                    key={isEnglish ? 'english' : 'bahasa'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    {isEnglish ? 'Switch to Bahasa' : 'Switch to English'}
                  </motion.span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

<style>
  {`
    .dark .animate-blink {
      box-shadow: 0 0 50px 20px rgba(58, 123, 213, 0.8), 0 0 100px 40px rgba(128, 0, 255, 0.6); /* Warna untuk tema gelap */
    }

    @keyframes blink {
      0%, 100% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.6;
      }
    }
    .animate-blink {
      animation: blink 1.5s infinite ease-in-out;
    }
  `}
</style>
