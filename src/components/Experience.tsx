import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Nextera Tech Pte. Ltd.',
    location: 'Singapore · Remote',
    period: 'Aug 2025 – Aug 2026',
    description:
      'Worked fully remote with a Singapore-based team, delivering production frontends for several international client products in parallel.',
    highlights: [
      'Built a data-visualization dashboard for a French government client — Angular 19, amCharts 5, ApexCharts, and a GraphQL (Apollo) data layer with full multi-language support.',
      'Shipped React and Next.js frontends for a padel coaching & booking platform and a suite of map-based business tools for the Singapore market.',
      'Owned features end to end: design handoff, implementation, QA, and iteration based on client feedback.',
      'Collaborated async across time zones through GitHub pull requests, code reviews, and written daily updates.',
    ],
    technologies: ['React', 'Next.js', 'Angular', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'Leaflet', 'Stripe'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    location: 'Semarang, Indonesia',
    period: 'Feb 2024 – Apr 2025',
    description:
      'Designed and built web applications for small businesses in Indonesia, handling everything from requirements to deployment.',
    highlights: [
      'Developed a CRM for a phone repair business with a Node.js (Express) REST API, PostgreSQL, and real-time updates via Socket.IO.',
      'Built inventory management and company profile websites with React, PHP, and modern CSS frameworks.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'PHP', 'Firebase'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Work Experience</h2>
          <div className="h-1 w-20 bg-accent-600 dark:bg-accent-400 mx-auto mb-12"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-0.5 bg-accent-200 dark:bg-accent-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-600 dark:bg-accent-400 ring-4 ring-accent-100 dark:ring-accent-900"></div>

                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="inline-flex items-center text-sm font-medium text-accent-600 dark:text-accent-400">
                      <Calendar size={14} className="mr-1.5" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="inline-flex items-center">
                      <Briefcase size={14} className="mr-1.5" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center">
                      <MapPin size={14} className="mr-1.5" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex text-sm text-gray-600 dark:text-gray-400">
                        <span className="mr-2 text-accent-600 dark:text-accent-400">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
