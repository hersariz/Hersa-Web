import { motion } from 'framer-motion';
import { FileText, Bot, ShieldCheck, ShieldAlert } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Plan first, in plain English',
    body: 'Every feature starts as a short written spec: what changes, what must not change, and the edge cases I can already see. Thinking happens before the editor opens, not inside it.',
  },
  {
    icon: Bot,
    title: 'Agents handle the mechanical layer',
    body: 'Codex daily, Claude Code alongside it. They take the repetitive work: scaffolding screens, wiring API calls, refactors that span many files, first-draft documentation.',
  },
  {
    icon: ShieldCheck,
    title: 'I keep the parts that carry risk',
    body: 'Data models, API contracts, anything touching authentication or payments, and every architecture decision. Those are judgement calls, and judgement is not delegable.',
  },
  {
    icon: ShieldAlert,
    title: 'Nothing ships unreviewed',
    body: 'I read every diff line by line before it is committed, the same way I would review a junior developer’s pull request, and I send plenty back.',
  },
];

const cardClass =
  'bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300';

const AIWorkflow = () => {
  return (
    <section id="ai-workflow" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">How I Work With AI</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            AI coding agents are my daily working method, not an experiment. The method matters more
            than the tools, because the tools keep changing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={cardClass}
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* The story that proves the point */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md border-l-4 border-blue-600 dark:border-blue-400"
        >
          <h3 className="font-bold mb-3">Why the review step is not optional</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            An agent once wrote a query against our GraphQL API that looked perfect. Sensible field
            names, types included, nothing flagged in the editor. Two of those fields did not exist.
            It had inferred them from naming patterns and then hand-written its own type definitions,
            which is exactly why nothing complained. I found it in manual QA when the values came back
            null.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The quick fix was rewriting the query. The useful fix was a rule: agents may only import
            types generated from the real schema, never declare their own. After that, an invented
            field fails the build instead of reaching production.{' '}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              A model sounds exactly as confident when it is wrong as when it is right, so confidence
              is not evidence. Verification is the whole job.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIWorkflow;
