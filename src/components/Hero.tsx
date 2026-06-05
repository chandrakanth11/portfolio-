import { MapPin, ArrowRight, Award, CheckCircle, Download, FileText } from 'lucide-react';
import { portfolioData } from '../data';
import { downloadResumePDF } from '../utils/downloadResume';
import Avatar from './Avatar';

interface HeroProps {
  currentPersona: string;
  accentHex: string;
}

export default function Hero({ currentPersona, accentHex }: HeroProps) {
  const specialties = [
    { label: "AI/ML Systems", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { label: "Cybersecurity & Forensics", color: "bg-teal-50 text-teal-700 border-teal-200" },
    { label: "Full Stack Development", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { label: "Operating Systems", color: "bg-amber-50 text-amber-700 border-amber-200" }
  ];

  return (
    <section className="relative overflow-hidden py-8 md:py-16">
      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Column: Authoritative Bio & Target Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          
          {/* Active status pulse line */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center space-x-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to Opportunities</span>
            </span>
            <span className="flex items-center space-x-1 text-xs text-slate-500 font-medium">
              <MapPin className="h-3.5 w-3.5 text-blue-600" />
              <span>{portfolioData.location}</span>
            </span>
          </div>

          {/* Majestic Typography Block */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {portfolioData.name}
            </h1>
            <p className="font-sans text-lg font-medium text-slate-600 leading-relaxed max-w-2xl">
              {portfolioData.summary}
            </p>
          </div>

          {/* Quick Pillar Specialty Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {specialties.map((spec, idx) => (
              <span 
                key={idx} 
                className={`px-3 py-1 text-xs font-semibold rounded-full border ${spec.color}`}
              >
                {spec.label}
              </span>
            ))}
          </div>

          {/* Primary Call to Action Controls */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              id="hero-btn-projects"
              href="#projects"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-3 text-xs font-bold transition-all shadow-md shadow-blue-200 hover:-translate-y-0.5"
            >
              <span>Explore Research & Projects</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              id="hero-download-resume"
              onClick={downloadResumePDF}
              className="flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-5 py-3 text-xs font-bold transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="h-4 w-4 text-blue-600" />
              <span>Download Full CV</span>
            </button>
          </div>

        </div>

        {/* Right Column: Dynamic Abstract Bento Card / Premium Avatar Container */}
        <div className="lg:col-span-5">
          <div className="glass-card p-6 md:p-8 flex flex-col items-center justify-between space-y-6 relative overflow-hidden">
            
            {/* The Avatar Photo Segment */}
            <div className="relative shrink-0 flex items-center justify-center py-2">
              <Avatar accentHex={accentHex} size="lg" />
            </div>

            {/* Quick Resume Bullet Table - Highlights real-world credibility */}
            <div className="w-full space-y-3.5 pt-4 border-t border-slate-100">
              
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Academic Degree</span>
                <span className="font-medium text-slate-800 text-right">{portfolioData.education[0].degree}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Research Focus</span>
                <span className="font-medium text-slate-800 text-right">Cardiotocography Signal ML</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">GCP Certified</span>
                <span className="inline-flex items-center space-x-1 font-mono text-[9px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                  <CheckCircle className="h-3 w-3 text-teal-600 mr-0.5" />
                  <span>CLOUD ARCHITECT</span>
                </span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Key Sandbox</span>
                <span className="font-mono text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  RED OS SECURITY KERNEL
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
