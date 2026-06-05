import { Trophy, ExternalLink, Zap } from 'lucide-react';
import { portfolioData } from '../data';

interface HackathonsProps {
  currentPersona: string;
  accentHex: string;
}

export default function Hackathons({ currentPersona, accentHex }: HackathonsProps) {
  return (
    <section id="hackathons" className="py-12 border-t border-slate-200 scroll-mt-6">
      
      {/* SECTION HEADER */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
          <Trophy className="h-3.5 w-3.5 text-blue-600" />
          <span>Contests & Competitions</span>
        </div>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          National Hackathon Victories
        </h2>
        <p className="mt-1 text-sm text-slate-500 max-w-xl">
          Compiling solutions and deploying secure predictive software in dynamic environments at India&apos;s premier institute networks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.hackathons.map((hack, idx) => {
          // Color code top tag based on position
          const tagTheme = idx === 0 
            ? "bg-amber-50 text-amber-700 border-amber-200" 
            : idx === 1 
            ? "bg-slate-100 text-slate-700 border-slate-350" 
            : "bg-rose-50 text-rose-750 border-rose-200";

          return (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all duration-200"
            >
              <div 
                className="h-1.5 w-full bg-blue-600"
                style={{ backgroundColor: idx === 0 ? '#d97706' : idx === 1 ? '#4b5563' : '#b91c1c' }}
              ></div>

              <div className="p-6 space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-2.5 py-0.5 font-sans text-[9px] font-bold uppercase ${tagTheme}`}>
                    National Finisher
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 border border-amber-200">
                    <Zap className="h-3.5 w-3.5 text-amber-500" />
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display text-base font-extrabold text-slate-900 leading-snug">
                    {hack.name}
                  </h4>
                  <p className="font-sans text-xs text-slate-400">
                    Host: <span className="text-slate-600 font-medium">{hack.organizer}</span>
                  </p>
                </div>

                <p className="font-sans text-xs leading-relaxed text-slate-500">
                  {hack.description}
                </p>

              </div>

              {/* Bottom Award Badge banner */}
              <div className="bg-slate-50 border-t border-slate-150 px-6 py-3.5 font-sans text-xs flex justify-between items-center">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Placement:</span>
                <span 
                  className="font-bold text-right text-[11px]"
                  style={{ color: idx === 0 ? '#d97706' : idx === 1 ? '#4b5563' : '#b91c1c' }}
                >
                  {hack.award}
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* Kaggle Open Dataset spotlight banner */}
      <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-all duration-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <span 
              className="font-mono text-xs font-bold tracking-widest uppercase text-blue-600"
            >
              // Kaggle Dataset Publication
            </span>
            <h4 className="font-display text-lg font-extrabold text-slate-900 leading-snug">
              {portfolioData.community.kaggleDataset.title}
            </h4>
            <p className="font-sans text-xs text-slate-500 max-w-2xl leading-relaxed">
              {portfolioData.community.kaggleDataset.description}
            </p>
          </div>
          
          <a
            id="kaggle-link"
            href={portfolioData.community.kaggleDataset.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 rounded-xl px-5 py-3 font-sans text-xs font-extrabold text-white transition-all shrink-0 uppercase flex items-center space-x-2 shadow-sm"
          >
            <span>Explore Dataset</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

    </section>
  );
}
