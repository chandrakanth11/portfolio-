import { useState } from 'react';
import { Sparkles, Terminal, Code2, Brain, Shield, PenTool as Tool } from 'lucide-react';

interface SkillsProps {
  currentPersona: string;
  accentHex: string;
}

interface SkillItem {
  name: string;
  level: number; // 0-100
  note: string;
}

export default function Skills({ currentPersona, accentHex }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'ai_ml' | 'cyber' | 'dev_tools'>('all');

  const categories = [
    { id: 'all', label: 'All Domains', icon: Terminal },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'ai_ml', label: 'AI & Machine Learning', icon: Brain },
    { id: 'cyber', label: 'Cybersecurity', icon: Shield },
    { id: 'dev_tools', label: 'DevOps & Cloud Tools', icon: Tool },
  ];

  const skillData: Record<'languages' | 'ai_ml' | 'cyber' | 'dev_tools', SkillItem[]> = {
    languages: [
      { name: "Python", level: 95, note: "Pioneering ML research, OpenCV pipelines, and computer vision models." },
      { name: "Java / Core Java", level: 85, note: "High level OOP logic, enterprise data structures, and algorithms." },
      { name: "C Language", level: 75, note: "Low level firmware assemblies and custom RED OS kernel prototyping." },
      { name: "JavaScript", level: 80, note: "Local UI logic, Flask template controls, and JWT interfaces." },
      { name: "PHP / SQL", level: 75, note: "Relational database configurations and custom API backends." },
    ],
    ai_ml: [
      { name: "Generative AI & LLMs", level: 90, note: "Prompt validation tuning, custom sandboxing, and local inference models." },
      { name: "OpenCV", level: 92, note: "Drowsiness facial vector ratios, blink counters, and active visual trackers." },
      { name: "Deep / Machine Learning", level: 90, note: "Published CTG clinical hypoxia classifiers using ensemble and cardiac predictors." },
      { name: "Computer Vision", level: 88, note: "MediaPipe mesh dilutions, infrared spectra matching, and thermal detection datasets." },
    ],
    cyber: [
      { name: "Computer Forensics", level: 85, note: "DROP Certified - data carvings, registry analysis, and active incident forensics." },
      { name: "Ethical Hacking & Penetration Testing", level: 80, note: "Nmap port diagnostics, Burp Suite interceptors, and web XSS analysis." },
      { name: "Secure Dev & Anti-Spoofing", level: 88, note: "Passive liveness blink testing, token auth layers, and data sanitization." },
      { name: "Network Fundamentals", level: 82, note: "Tunneling ciphers, port mapping, and routing gateway diagnostics." },
    ],
    dev_tools: [
      { name: "Google Cloud Platform", level: 88, note: "Certified Professional Cloud Architect. IAM boundaries and cloud SQL configurations." },
      { name: "Git & Version Control", level: 90, note: "Safe collaborative staging, rebasing, and local development." },
      { name: "Selenium & Flask", level: 85, note: "Automated browser diagnostics, server script routes, and admin interfaces." },
      { name: "Kaggle Open Datasets", level: 90, note: "Curator of Missile and Flight Detection frames for aeronautic research." },
    ]
  };

  const getActiveSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skillData.languages,
        ...skillData.ai_ml,
        ...skillData.cyber,
        ...skillData.dev_tools,
      ];
    }
    return skillData[activeCategory];
  };

  return (
    <section id="skills" className="py-12 border-t border-slate-200 scroll-mt-6">
      
      {/* Header text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-center md:text-left">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Expertise Spectrum</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Technical Skill Indices
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Select a specific cluster category below to filter specific capabilities.
          </p>
        </div>
        
        {/* Short legend */}
        <div className="flex items-center justify-center space-x-3 font-mono text-[10px] text-slate-400">
          <span className="flex items-center space-x-1">
            <span className="h-2.5 w-2.5 rounded bg-blue-600"></span>
            <span>Skill Level Indicator</span>
          </span>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mb-8 bg-slate-100 p-1 rounded-xl border border-slate-200 max-w-fit">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center space-x-2 rounded-lg px-4 py-2 font-sans text-xs font-semibold transition-all duration-200 ${
                isActive 
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className="h-3.5 w-3.5" style={isActive ? { color: '#2563eb' } : undefined} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills progress sliders list */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {getActiveSkills().map((skill, idx) => {
          return (
            <div
              key={idx}
              className="bg-white rounded-xl px-5 py-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[15px] font-bold text-slate-900">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs font-bold text-blue-600">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Clean slider background bar with premium blue track */}
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 bg-blue-600"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              <p className="mt-4 font-sans text-xs leading-relaxed text-slate-500">
                {skill.note}
              </p>

            </div>
          );
        })}
      </div>

    </section>
  );
}
