import { Shield, Linkedin, Github, Mail, Phone, Download } from 'lucide-react';
import { PersonaType } from '../types';
import { downloadResumePDF } from '../utils/downloadResume';

interface HeaderProps {
  currentPersona: PersonaType;
  setPersona: (p: PersonaType) => void;
  accentHex: string;
}

export default function Header({ currentPersona, setPersona, accentHex }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Identity Signature */}
        <div className="flex items-center space-x-3">
          <div 
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200"
            style={{ backgroundColor: `${accentHex}05` }}
          >
            <Shield className="h-5 w-5" style={{ color: accentHex }} />
          </div>
          <div>
            <span className="font-display text-base font-bold tracking-tight text-slate-900">
              CHANDRAKANTHA C V
            </span>
            <span className="ml-2.5 hidden sm:inline-block rounded-full bg-slate-100 text-slate-600 px-2.5 py-0.5 text-[10px] font-semibold font-mono">
              AI & SECURE SYSTEMS
            </span>
          </div>
        </div>

        {/* Vital Contacts & Social Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3.5 border-r border-slate-200 pr-4">
            <a
              id="link-github"
              href="https://github.com/chandrakanth11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors"
              title="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              id="link-linkedin"
              href="https://linkedin.com/in/chandrakantha-c-910161a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              id="link-email"
              href="mailto:chandrakantha@gmail.com"
              className="text-slate-500 hover:text-slate-900 transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          {/* Quick Header Download CV */}
          <button
            id="header-download-resume"
            onClick={downloadResumePDF}
            className="hidden md:flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>
        </div>

      </div>
    </header>
  );
}
