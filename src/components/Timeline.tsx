import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data';

interface TimelineProps {
  currentPersona: string;
  accentHex: string;
}

export default function Timeline({ currentPersona, accentHex }: TimelineProps) {
  return (
    <section id="timeline" className="py-12 border-t border-slate-200 scroll-mt-6">
      
      {/* SECTION HEADER */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
          <Calendar className="h-3.5 w-3.5" />
          <span>Timeline Record</span>
        </div>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Education & Work Chronology
        </h2>
        <p className="mt-1 text-sm text-slate-500 max-w-xl">
          An academic and professional logging of credentials, internship experience, and certified domain accomplishments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Education Timeline (Left Side - 7 cols) */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6">
          <div className="flex items-center space-x-2.5 mb-4">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <h3 className="font-display text-base font-extrabold text-slate-900 uppercase tracking-widest">
              Education History
            </h3>
          </div>

          <div className="relative border-l-2 border-slate-200 pl-6 ml-3 space-y-8">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline node circle indicator */}
                <div 
                  className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-white border-2 border-blue-600 transition-all duration-300 group-hover:scale-125"
                ></div>

                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-100">
                    <div>
                      <h4 className="font-display text-[15px] font-extrabold text-slate-900">
                        {edu.degree}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 font-medium">
                        {edu.institution} {edu.location && `· ${edu.location}`}
                      </p>
                    </div>
                    <span 
                      className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-blue-600 h-fit w-fit"
                    >
                      {edu.period}
                    </span>
                  </div>

                  {edu.highlights && (
                    <ul className="space-y-1.5 text-xs text-slate-500 list-disc pl-4 leading-relaxed">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  )}

                  {edu.score && (
                    <div className="flex items-center space-x-2 font-sans text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span className="font-medium text-slate-400">Academic Honors:</span>
                      <span className="text-slate-800 font-bold">{edu.score}</span>
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline (Right Side - 5 cols) */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-6">
          <div className="flex items-center space-x-2.5 mb-4">
            <Briefcase className="h-5 w-5 text-teal-600" />
            <h3 className="font-display text-base font-extrabold text-slate-900 uppercase tracking-widest">
              Professional Internships
            </h3>
          </div>

          <div className="relative border-l-2 border-slate-200 pl-6 ml-3 space-y-8">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline node locator */}
                <div 
                  className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-white border-2 border-teal-600 transition-all duration-300 group-hover:scale-125"
                ></div>

                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200 space-y-4">
                  <div className="flex flex-col gap-1 pb-2 border-b border-slate-100">
                    <span 
                      className="rounded-full bg-teal-50 border border-teal-100 px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-teal-600 w-fit"
                    >
                      {exp.start} – {exp.end}
                    </span>
                    <h4 className="font-display text-[15px] font-extrabold text-slate-900 mt-1.5">
                      {exp.role}
                    </h4>
                    <p className="font-sans text-xs text-slate-500 font-medium">
                      {exp.company} &middot; <span>{exp.location}</span>
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-500 list-disc pl-4 leading-relaxed">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx}>{desc}</li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-100">
                    <h5 className="font-mono text-[9px] text-slate-400 font-bold mb-2 uppercase tracking-wider">
                      Validated Capabilities:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-[9px] font-mono font-medium text-slate-600 animate-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
