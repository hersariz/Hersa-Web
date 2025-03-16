import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ganti dengan User ID, Service ID, dan Template ID Anda
    const serviceID = 'service_9sxcfu9'; // Service ID yang sudah diupdate
    const templateID = 'template_ustvt8i'; // Template ID yang baru
    const userID = '1lnohl5QKrMURZaA1'; // User ID yang baru

    // Kirim email menggunakan EmailJS
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'Rizkymvp123@gmail.com' // Ganti dengan email Anda
    }, userID)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setFormStatus('error');
    });
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  };

  return (
    <section id="contact" className="py-20 bg-purple-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12">
            Feel free to reach out if you want to collaborate with me, or simply have a chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div 
              variants={contactItemVariants}
              custom={0}
              className="flex items-start space-x-4"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400"
              >
                <Phone size={24} />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone/WA</h3>
                <a 
                  href="https://wa.me/6281906281392" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +62 819 0628 1392
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={contactItemVariants}
              custom={1}
              className="flex items-start space-x-4"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400"
              >
                <Mail size={24} />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <a 
                  href="mailto:Rizkymvp123@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Rizkymvp123@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={contactItemVariants}
              custom={2}
              className="flex items-start space-x-4"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400"
              >
                <MapPin size={24} />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <a 
                  href="https://maps.app.goo.gl/8ovm42m2W3UFu5vk6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Semarang, Indonesia
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={formAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
              {formStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-lg"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 dark:bg-blue-500 dark:hover:bg-blue-600 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <Send size={18} className="mr-2" />
                  <span>Send Message</span>
                </span>
                <span className="absolute inset-0 bg-blue-700 dark:bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
