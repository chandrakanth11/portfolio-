import { useState, useEffect } from 'react';
import { PersonaType } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Hackathons from './components/Hackathons';
import ActivityFeed from './components/ActivityFeed';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';
import { Shield, Award, Cpu, BookOpen, Download } from 'lucide-react';
import { downloadResumePDF } from './utils/downloadResume';

export default function App() {
  const [persona, setPersona] = useState<PersonaType>('ai_engineer');
  const [accent, setAccent] = useState('#2563eb'); // Clean, deep professional blue

  return (
    <div id="app-root" className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col relative overflow-hidden">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[600px] rounded-full bg-blue-100/35 blur-[120px] pointer-events-none -z-20"></div>
      <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[600px] rounded-full bg-indigo-50/30 blur-[120px] pointer-events-none -z-20"></div>

      {/* Header bar */}
      <Header currentPersona={persona} setPersona={setPersona} accentHex={accent} />

      {/* Main Core View Area with spacious bounding */}
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24">
        
        {/* Landing Hero Area */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <Hero currentPersona={persona} accentHex={accent} />
        </ScrollReveal>
        
        {/* Narrative / About summary */}
        <ScrollReveal>
          <About currentPersona={persona} accentHex={accent} />
        </ScrollReveal>

        {/* Interactive Skills map */}
        <ScrollReveal>
          <Skills currentPersona={persona} accentHex={accent} />
        </ScrollReveal>

        {/* Projects list + Cardiotocography clinical graph */}
        <ScrollReveal>
          <Projects currentPersona={persona} accentHex={accent} />
        </ScrollReveal>

        {/* Education & Experience chronology */}
        <ScrollReveal>
          <Timeline currentPersona={persona} accentHex={accent} />
        </ScrollReveal>

        {/* Professional Certifications categorized deck */}
        <ScrollReveal>
          <Certifications currentPersona={persona} accentHex={accent} />
        </ScrollReveal>

        {/* National level Hackathons finishes at premier IIT/NIT networks */}
        <ScrollReveal>
          <Hackathons currentPersona={persona} accentHex={accent} />
        </ScrollReveal>

        {/* Live GitHub Monitor & LinkedIn Integration Hub */}
        <ScrollReveal>
          <ActivityFeed />
        </ScrollReveal>

        {/* Dynamic secured professional contact session */}
        <ScrollReveal>
          <Contact currentPersona={persona} accentHex={accent} />
        </ScrollReveal>

      </main>

      {/* Clean & Elegant Corporate Footer */}
      <footer className="w-full border-t border-slate-200 bg-white py-12 mt-20 text-slate-500 font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Shield className="h-4.5 w-4.5 text-blue-600" />
              <span className="font-display font-bold text-slate-900 tracking-wide text-sm uppercase">CHANDRAKANTHA C V</span>
            </div>
            <p className="text-xs text-slate-500 max-w-md leading-normal">
              Computer Science & Engineering Student (2024–2027) · Google Cloud Certified Professional Cloud Architect · AI & Secure Systems Researcher
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects & Research</a>
            <a href="#timeline" className="text-slate-600 hover:text-blue-600 transition-colors">Timeline</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            
            <button
              id="footer-download-resume"
              onClick={downloadResumePDF}
              className="flex items-center space-x-1 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-bold transition-all cursor-pointer text-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CV</span>
            </button>
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-400 space-y-1">
            <span>© 2026 Chandrakantha CV. All rights reserved.</span>
            <span className="block text-[10px] text-slate-400">Jain Institute of Technology, Davangere, India</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
