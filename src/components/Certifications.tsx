import { useState } from 'react';
import { Award, ShieldCheck, Flame, BookOpen } from 'lucide-react';
import { portfolioData } from '../data';

interface CertificationsProps {
  currentPersona: string;
  accentHex: string;
}

export default function Certifications({ currentPersona, accentHex }: CertificationsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'featured' | 'cloud' | 'security' | 'ai'>('all');

  const categories = [
    { id: 'all', label: 'All Credentials' },
    { id: 'featured', label: 'Featured Keys' },
    { id: 'cloud', label: 'Google Cloud' },
    { id: 'security', label: 'Security & Forensics' },
    { id: 'ai', label: 'Artificial Intelligence' }
  ];

  const getFilteredCerts = () => {
    let list = portfolioData.certifications;
    if (selectedCategory === 'featured') {
      return list.filter(c => c.featured);
    }
    if (selectedCategory === 'all') {
      return list;
    }
    return list.filter(c => c.category === selectedCategory);
  };

  const getCategoryTheme = (cat: 'cloud' | 'security' | 'ai' | 'general') => {
    if (cat === 'cloud') {
      return { 
        icon: <Award className="h-5 w-5 text-sky-600" />, 
        bg: "bg-sky-50 border-sky-100",
        label: "Cloud Architecture"
      };
    }
    if (cat === 'security') {
      return { 
        icon: <ShieldCheck className="h-5 w-5 text-teal-600" />, 
        bg: "bg-teal-50 border-teal-100",
        label: "Systems Hardening"
      };
    }
    if (cat === 'ai') {
      return { 
        icon: <Flame className="h-5 w-5 text-purple-600" />, 
        bg: "bg-purple-50 border-purple-100",
        label: "Cognitive ML"
      };
    }
    return { 
      icon: <BookOpen className="h-5 w-5 text-slate-500" />, 
      bg: "bg-slate-100 border-slate-200",
      label: "Technical Core"
    };
  };

  return (
    <section id="certifications" className="py-12 border-t border-slate-200 scroll-mt-6">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-center md:text-left">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <Award className="h-3.5 w-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Technical Certifications
          </h2>
          <p className="mt-1 text-sm text-slate-500 max-w-lg">
            Industry credentials validated by Google Cloud, CISM networks, and global academic technology boards.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mb-8 bg-slate-100 p-1 rounded-xl border border-slate-200 max-w-fit">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`rounded-lg px-3.5 py-2 font-sans text-xs font-semibold transition-all duration-250 ${
              selectedCategory === cat.id 
                ? 'bg-white text-slate-900 shadow-sm border border-slate-250' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Certs Grid Map */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {getFilteredCerts().map((cert, idx) => {
          const config = getCategoryTheme(cert.category);
          return (
            <div 
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-start space-x-4 relative overflow-hidden group"
            >
              {/* Subtle top indicator for featured credentials */}
              {cert.featured && (
                <div className="absolute top-0 inset-x-0 h-[3px] bg-blue-600"></div>
              )}

              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${config.bg}`}>
                {config.icon}
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <h4 className="font-display text-[15px] font-bold text-slate-900 leading-snug truncate">
                  {cert.name}
                </h4>
                
                <p className="font-sans text-xs text-slate-500">
                  Issued: <span className="font-medium text-slate-700">{cert.issuer}</span>
                </p>
                
                <div className="mt-4 flex items-center justify-between text-[10px] border-t border-slate-100 pt-2 font-mono">
                  <span className="text-slate-400 uppercase font-semibold text-[9px] tracking-wider">
                    {config.label}
                  </span>
                  {cert.year && (
                    <span className="text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded font-mono">
                      Ref: {cert.year}
                    </span>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
