import { motion } from 'framer-motion';
import {
  Palette,
  Server,
  Plug,
  Bot,
  BarChart3,
  Rocket,
  Target,
  Wrench,
  Globe2,
  NotebookPen,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: Palette,
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Radix UI / shadcn', 'Vue.js'],
  },
  {
    title: 'Backend & Data',
    icon: Server,
    items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MySQL', 'Prisma ORM', 'REST APIs', 'Laravel / PHP'],
  },
  {
    title: 'APIs & Realtime',
    icon: Plug,
    items: ['GraphQL (Apollo)', 'GraphQL Codegen', 'Socket.IO', 'WebRTC', 'Firebase', 'Supabase', 'Stripe', 'OpenAPI'],
  },
  {
    title: 'AI-Native Development',
    icon: Bot,
    items: ['Codex', 'Claude Code', 'Spec-driven workflows', 'OpenAI API', 'Windsurf', 'Antigravity', 'AI-assisted review'],
  },
  {
    title: 'Data Visualization',
    icon: BarChart3,
    items: ['amCharts 5', 'ApexCharts', 'Recharts', 'ECharts', 'Leaflet maps'],
  },
  {
    title: 'Tooling & Delivery',
    icon: Rocket,
    items: ['Git & GitHub', 'Pull request workflows', 'CI/CD', 'Vite', 'Vercel', 'Netlify', 'Figma', 'Jira'],
  },
];

const strengths = [
  {
    title: 'Owning features end to end',
    description:
      'From design handoff through implementation, QA, deployment, and the follow-up fixes nobody volunteers for.',
    icon: Target,
  },
  {
    title: 'Working across the stack',
    description:
      'Comfortable in the UI, the API layer, and the database, and moving between frameworks when a project needs it.',
    icon: Wrench,
  },
  {
    title: 'Async remote collaboration',
    description:
      'A year across time zones: written specs, pull request reviews, and daily updates instead of meetings.',
    icon: Globe2,
  },
  {
    title: 'Documenting what I build',
    description:
      'Architecture notes, data flow, known issues. If I own a system, someone else should be able to pick it up.',
    icon: NotebookPen,
  },
];

const cardClass =
  'bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Skills &amp; Tools</h2>
          <div className="h-1 w-20 bg-accent-600 dark:bg-accent-400 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                className={cardClass}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mr-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-100 dark:border-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl font-bold text-center mb-10"
        >
          What I Bring to a Team
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                className={cardClass}
              >
                <div className="inline-flex p-2 rounded-lg bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-3">
                  <Icon size={22} />
                </div>
                <h4 className="font-bold mb-2">{strength.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
