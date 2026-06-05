import { Lightbulb, Target, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data';

interface AboutProps {
  currentPersona: string;
  accentHex: string;
}

export default function About({ currentPersona, accentHex }: AboutProps) {
  return (
    <section id="about" className="py-12 border-t border-slate-200 scroll-mt-6">
      
      {/* Category Header */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentHex }}></span>
          <span>About the Researcher</span>
        </div>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl text-glow">
          Mission & Core Philosophy
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        
        {/* Profile statement card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
            <span 
              className="font-mono text-xs font-bold tracking-widest uppercase text-blue-600"
            >
              // Systems Integrity Decree
            </span>
            <h3 className="font-display text-xl font-bold text-slate-900 md:text-2xl leading-snug">
              Synthesizing deep neural perception on edge cores, safeguarded by defensive computer security paradigms.
            </h3>
            <p className="font-sans text-sm leading-relaxed text-slate-600">
              As a Computer Science Engineering candidate, I bridge the gap between heavy, high-latency neural models and fast, physical, compile-time systems. My academic research focuses heavily on two domains: training high-integrity deep learning models for clinical fetal health diagnostics, and constructing secure, customized operating system boot controllers mapped in C and Assembly.
            </p>
            
            <p className="font-sans text-sm leading-relaxed text-slate-600">
              By combining Google Cloud Certified Professional Cloud Architecture guidelines with low-level computer forensics research, I design software with a rigid &ldquo;Secure-by-Default&rdquo; posture, and build anti-spoof biometric safeguards preventing physical replay vectors.
            </p>
            
            <div className="pt-5 border-t border-slate-100">
              <h4 className="font-mono text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-widest">
                CORE TECHNICAL STANDARDS MAINTAINED:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs text-slate-800">
                <div className="flex items-center space-x-2.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="font-medium text-slate-700">Secure-by-Default Design</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="font-medium text-slate-700">Resource-Constrained IoT Tuning</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="font-medium text-slate-700">Empirical Clinical ML Recall</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="font-medium text-slate-700">Comprehensive Docs & Shell Specs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies Bento columns */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-start space-x-4 shadow-sm hover:border-slate-300 transition-colors">
            <div 
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-blue-50/50"
            >
              <Target className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold tracking-tight text-slate-900 uppercase">
                The Objective Mission
              </h4>
              <p className="mt-1 font-sans text-xs leading-relaxed text-slate-500">
                {portfolioData.mission}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-start space-x-4 shadow-sm hover:border-slate-300 transition-colors">
            <div 
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-teal-50/50"
            >
              <ShieldCheck className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold tracking-tight text-slate-900 uppercase">
                Academic Integrity & Leadership
              </h4>
              <p className="mt-1 font-sans text-xs leading-relaxed text-slate-500">
                Active leader in technical campus boards, lead researcher in machine learning publications, and distinguished innovator across premier IIT/NIT hackathon networks.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-start space-x-4 shadow-sm hover:border-slate-300 transition-colors">
            <div 
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-purple-50/50"
            >
              <Lightbulb className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold tracking-tight text-slate-900 uppercase">
                Cross-Layer Diagnostics
              </h4>
              <p className="mt-1 font-sans text-xs leading-relaxed text-slate-500">
                Deploying local physical system boundaries, modeling facial aspect-ratio triggers, and securing databases and server clusters on Google Cloud Infrastructure.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
