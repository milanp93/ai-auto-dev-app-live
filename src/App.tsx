import React from 'react';

const steps = [
  { icon: '📥', title: 'Intake', desc: 'Jira tickets are parsed and requirements extracted automatically.' },
  { icon: '🔨', title: 'Build', desc: 'Claude AI generates code based on the defined requirements.' },
  { icon: '🔍', title: 'Review', desc: 'Automated code review and static analysis checks run.' },
  { icon: '🚀', title: 'Deploy', desc: 'Code is pushed to GitHub and deployed to staging environments.' },
  { icon: '🧪', title: 'QA', desc: 'Automated tests validate functionality and performance.' },
  { icon: '✅', title: 'Approval', desc: 'Human sign-off or auto-approval based on quality thresholds.' },
];

const stack = [
  { name: 'SuperPlane', color: 'bg-purple-600', desc: 'Orchestration layer' },
  { name: 'Claude AI', color: 'bg-orange-500', desc: 'Code generation' },
  { name: 'Jira', color: 'bg-blue-600', desc: 'Task management' },
  { name: 'GitHub', color: 'bg-gray-700', desc: 'Version control' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">AI Delivery Orchestrator</span>
        <h1 className="text-5xl font-bold mb-4 leading-tight">Automate Your Entire<br /><span className="text-purple-400">Dev Delivery Pipeline</span></h1>
        <p className="text-gray-400 text-lg max-w-xl mb-8">From Jira ticket to production — fully orchestrated by AI, end to end.</p>
        <a href="#cta" className="bg-purple-600 hover:bg-purple-500 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg">Get Started</a>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-center text-2xl font-bold mb-10">Delivery Workflow</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-5 flex flex-col gap-2 hover:bg-gray-750 transition">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6">
        <h2 className="text-center text-2xl font-bold mb-10">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {stack.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className={`${t.color} px-6 py-3 rounded-xl font-bold text-white shadow-md text-sm`}>{t.name}</span>
              <span className="text-gray-500 text-xs">{t.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-4">Ready to ship faster?</h2>
        <p className="text-gray-400 mb-8">Let AI handle the delivery so your team can focus on what matters.</p>
        <a href="https://github.com/milanp93/ai-auto-dev-app-live" target="_blank" rel="noreferrer"
          className="bg-purple-600 hover:bg-purple-500 transition px-10 py-3 rounded-full font-semibold text-white shadow-lg">
          View on GitHub
        </a>
      </section>

      <footer className="text-center text-gray-600 text-xs py-6">© 2024 AI Delivery Orchestrator · KAN-1</footer>
    </div>
  );
}