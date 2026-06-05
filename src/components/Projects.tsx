import { useState, useEffect } from 'react';
import { Sparkles, HeartPulse, ExternalLink, RefreshCw, Layers, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data';

interface ProjectsProps {
  currentPersona: string;
  accentHex: string;
}

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  tech: string[];
  category: 'ai' | 'cyber' | 'dev';
  featured: boolean;
}

export default function Projects({ currentPersona, accentHex }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'cyber' | 'dev'>('all');
  
  // Interactive simulator memory states
  const [redOsBooted, setRedOsBooted] = useState(false);
  const [redOsTerminalLogs, setRedOsTerminalLogs] = useState<string[]>([
    "RED OS Boot ROM Initialization",
    "Press the trigger button above to mount kernel diagnostics..."
  ]);
  
  const [eyeTrackerActive, setEyeTrackerActive] = useState(true);
  const [eyeMetrics, setEyeMetrics] = useState({ aspectRatio: 0.28, blinkCount: 14, drowsinessRisk: "ACTIVE_NORMAL" });
  
  const [faceCheckState, setFaceCheckState] = useState<'idle' | 'scanning' | 'passed'>('idle');
  const [faceScanMessage, setFaceScanMessage] = useState("Awaiting secure face liveness test...");
  
  // CTG wave time generator
  const [ctgWaveTime, setCtgWaveTime] = useState(0);

  // RED OS Boot Sequence simulator
  const triggerRedOsBoot = () => {
    setRedOsBooted(true);
    setRedOsTerminalLogs(prev => [...prev, ">> Allocating kernel instruction registers..."]);
    
    const logs = [
      "SYSTEM: Physical memory pointers mounted at 0x00008000",
      "SYSTEM: Interrupt Vectors loaded. Machine drivers locked.",
      "SYSTEM: Secure shell token context established.",
      "SYSTEM: RED OS Interface v1.0.4 compiled and active."
    ];
    
    logs.forEach((log, index) => {
      setTimeout(() => {
        setRedOsTerminalLogs(prev => [...prev, `>> ${log}`]);
      }, (index + 1) * 600);
    });
  };

  const resetRedOs = () => {
    setRedOsBooted(false);
    setRedOsTerminalLogs([
      "RED OS Boot ROM Initialization",
      "Press the trigger button above to mount kernel diagnostics..."
    ]);
  };

  // Eye fatigue aspect-ratio analyzer
  useEffect(() => {
    if (!eyeTrackerActive) return;
    const interval = setInterval(() => {
      const baseEarn = 0.22 + Math.random() * 0.12;
      const isBlinking = Math.random() < 0.12;
      const ears = isBlinking ? 0.08 : baseEarn;
      
      setEyeMetrics(prev => {
        const nextBlinks = isBlinking ? prev.blinkCount + 1 : prev.blinkCount;
        const statusText = ears < 0.15 ? "WARNING: POTENTIAL DROWSINESS" : "ACTIVE_NORMAL";
        return {
          aspectRatio: Number(ears.toFixed(3)),
          blinkCount: nextBlinks,
          drowsinessRisk: statusText
        };
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [eyeTrackerActive]);

  // Face anti-spoof check
  const startFaceScan = () => {
    setFaceCheckState('scanning');
    setFaceScanMessage("Validating facial mesh points & biological blink signatures...");
    
    setTimeout(() => {
      setFaceCheckState('passed');
      setFaceScanMessage("SPOOF TEST PASSED: Valid human subject logged to SQLite database.");
    }, 2000);
  };

  const resetFaceScan = () => {
    setFaceCheckState('idle');
    setFaceScanMessage("Awaiting secure face liveness test...");
  };

  // CTG waveform oscillation loop
  useEffect(() => {
    const frame = setInterval(() => {
      setCtgWaveTime(prev => (prev + 0.1) % (Math.PI * 2));
    }, 60);
    return () => clearInterval(frame);
  }, []);

  const getFilteredProjects = () => {
    if (selectedFilter === 'all') return portfolioData.projects;
    return portfolioData.projects.filter(p => p.category === selectedFilter);
  };

  // Paths rendering for cardiac waveforms
  const renderCtgSvgPath = (freqOffset: number, baseline: number, noiseAmp: number) => {
    let points = [];
    for (let x = 0; x <= 500; x += 5) {
      const waveVal = Math.sin(x * 0.05 + ctgWaveTime + freqOffset) * 18;
      const noise = (Math.sin(x * 0.4) + Math.cos(x * 0.8)) * noiseAmp;
      const contractionSpike = x % 160 === 0 ? -40 : 0;
      const y = baseline + waveVal + noise + contractionSpike;
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  const getCategoryTheme = (cat: 'ai' | 'cyber' | 'dev') => {
    if (cat === 'ai') return 'bg-blue-50 text-blue-700 border-blue-200';
    if (cat === 'cyber') return 'bg-teal-50 text-teal-700 border-teal-200';
    return 'bg-purple-50 text-purple-700 border-purple-200';
  };

  return (
    <section id="projects" className="py-12 border-t border-slate-200 scroll-mt-6">
      
      {/* SECTION HEADER */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
          <Layers className="h-3.5 w-3.5" />
          <span>Case Studies & Software</span>
        </div>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Projects & Academic Research
        </h2>
        <p className="mt-1 text-sm text-slate-500 max-w-xl">
          Published clinical engineering research and systems-layer developer configurations designed with rigorous security standards.
        </p>
      </div>

      {/* SEGMENT 1: CLINICAL RESEARCH CASE STUDY (PRESTIGIOUS PAPER DISPLAY) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 mb-10 shadow-sm relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Scientific Context Info */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-rose-50 border border-rose-200 px-3 py-1 font-sans text-[10px] text-rose-700 font-bold uppercase flex items-center space-x-1.5 shrink-0">
                  <HeartPulse className="h-3.5 w-3.5 text-rose-600 animate-pulse" />
                  <span>Clinical ML Research Publication</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Published Date: May 2026 · Peer-Reviewed Journal (IJIRCCE)
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-extrabold text-slate-900 md:text-2xl leading-snug">
                  {portfolioData.research.title}
                </h3>
                <p className="font-sans text-xs text-slate-500">
                  Focus Cluster: <span className="font-semibold text-slate-800">{portfolioData.research.focus}</span> &middot; Registry Code: <span className="font-mono text-slate-800 font-semibold">{portfolioData.research.citations}</span>
                </p>
              </div>

              <div className="space-y-3 font-sans text-sm leading-relaxed text-slate-600">
                <p>
                  <strong className="text-slate-900">Abstract Framework:</strong> {portfolioData.research.methodology}
                </p>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-slate-500 text-[12px] leading-relaxed italic">
                  &ldquo;{portfolioData.research.abstract}&rdquo;
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <a
                id="research-link"
                href={portfolioData.research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-blue-600 text-slate-900 font-bold underline decoration-slate-300"
              >
                <span>Browse Registry Citation</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <span className="font-sans text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-[11px] flex items-center">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-1.5"></span>
                Clinical Hypoxia Diagnostic Recall: 94.2%
              </span>
            </div>
          </div>

          {/* Core Biomedical Oscillation Monitor Screen */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch bg-slate-900 rounded-xl p-5 border border-slate-800 relative shadow-inner">
            <div className="flex items-center justify-between mb-3.5 border-b border-slate-800 pb-2">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-semibold">
                  Cardiotocogram Signal Simulator
                </span>
              </div>
              <span className="font-mono text-[9px] text-rose-500 font-bold">MONITOR ACTIVE</span>
            </div>

            {/* Display Graph Screen */}
            <div className="h-[140px] bg-slate-950/80 rounded border border-slate-800 relative flex items-center justify-center overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 150" allowReorder="false" preserveAspectRatio="none">
                <rect width="100%" height="100%" fill="transparent" />
                
                {/* Horizontal reference lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(244,63,94,0.1)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="110" x2="500" y2="110" stroke="rgba(6,182,212,0.1)" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Heart Rate waveform (Rose Crimson) */}
                <path 
                  d={renderCtgSvgPath(0, 50, 4)} 
                  fill="none" 
                  stroke="#fb7185" 
                  strokeWidth="1.5" 
                  className="translate-y-2"
                />
                
                {/* Uterine Contractions wave (Cyan) */}
                <path 
                  d={renderCtgSvgPath(2.5, 110, 2)} 
                  fill="none" 
                  stroke="#22d3ee" 
                  strokeWidth="1" 
                  className="opacity-80"
                />
              </svg>
              
              <div className="absolute top-2 left-2 flex flex-col font-mono text-[8px] text-slate-500">
                <span>Fetal Heart Baseline: <span className="text-rose-400 font-bold font-mono">142 bpm</span></span>
                <span>Active Channels: <span className="text-emerald-400 font-mono">2 / Dual (FHR, UC)</span></span>
              </div>
            </div>

            {/* Simulated Medical Legends */}
            <div className="mt-3 font-mono text-[10px] text-slate-400 leading-normal space-y-1 bg-slate-950/40 p-3 rounded border border-slate-800">
              <div className="flex justify-between text-[9px] font-bold text-slate-500 border-b border-slate-800 pb-1 uppercase tracking-wider">
                <span>Metrics Channels</span>
                <span>Clustered Pointers</span>
              </div>
              <div className="flex justify-between">
                <span>[Ch-01] Spectral Time-Series Acc</span>
                <span>Ensemble Hypoxia Warning</span>
              </div>
              <div className="flex justify-between">
                <span>[Ch-02] Dynamic Contraction Ratio</span>
                <span>Cardiac Hypoxia Classifier</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* SEGMENT 2: SOFTWARE CATALOGUE GRID */}
      <div className="space-y-6">
        
        {/* Flat Category selector pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 max-w-fit">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`rounded-lg px-3.5 py-1.5 font-sans text-xs font-semibold transition-all ${
              selectedFilter === 'all' ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setSelectedFilter('ai')}
            className={`rounded-lg px-3.5 py-1.5 font-sans text-xs font-semibold transition-all ${
              selectedFilter === 'ai' ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            AI & OpenCV
          </button>
          <button
            onClick={() => setSelectedFilter('cyber')}
            className={`rounded-lg px-3.5 py-1.5 font-sans text-xs font-semibold transition-all ${
              selectedFilter === 'cyber' ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Security & Controls
          </button>
          <button
            onClick={() => setSelectedFilter('dev')}
            className={`rounded-lg px-3.5 py-1.5 font-sans text-xs font-semibold transition-all ${
              selectedFilter === 'dev' ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            SaaS Utilities
          </button>
        </div>

        {/* Dynamic Cards Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {getFilteredProjects().map((p) => (
            <div 
              key={p.id}
              className="bg-white rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm overflow-hidden"
            >
              
              {/* Product Info Description Area */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`rounded-md border px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase ${getCategoryTheme(p.category)}`}>
                    {p.category.toUpperCase()} Core
                  </span>
                  <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Build Ref: {p.id.replace('proj_', '')}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display text-lg font-bold text-slate-900">
                    {p.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-500 italic">
                    {p.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs leading-relaxed text-slate-600">
                  {p.description}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <h5 className="font-semibold text-slate-700 text-[10px] mb-2 uppercase tracking-wider">
                    Core Technical Executables:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-500 list-none pl-0">
                    {p.details.map((det, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-emerald-500 font-extrabold mr-2 select-none">&bull;</span>
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ACTIVE PREview Sandboxes with clean Light Gray Borders */}
              <div className="bg-slate-50 border-t border-slate-200 p-5 flex flex-col justify-between min-h-[160px]">
                
                {/* OS Kernel Boot Playground */}
                {p.id === 'proj_red_os' && (
                  <div className="flex flex-col justify-between h-full space-y-2.5 font-mono text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-bold text-[9px] uppercase tracking-wider">C Shell Simulator</span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={triggerRedOsBoot} 
                          className="rounded-md bg-white hover:bg-slate-100 text-slate-800 px-2.5 py-1.5 border border-slate-200 font-bold text-[10px]"
                        >
                          {redOsBooted ? 'Reset Board' : 'Boot OS Core'}
                        </button>
                        {redOsBooted && (
                          <button 
                            onClick={resetRedOs} 
                            className="text-slate-400 hover:text-slate-600 px-1 py-1"
                          >
                            X
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="h-[80px] bg-slate-900 rounded-lg p-3 overflow-y-auto text-emerald-400 font-mono leading-normal shadow-inner scrollbar-thin">
                      {redOsTerminalLogs.map((log, lIdx) => (
                        <div key={lIdx} className="font-mono">{log}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Driver Fatigue Blink aspect Tracker */}
                {p.id === 'proj_eye_detector' && (
                  <div className="flex flex-col justify-between h-full space-y-3 font-mono text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-bold text-[9px] uppercase tracking-wider">Face Mesh Tracker</span>
                      <button 
                        onClick={() => setEyeTrackerActive(!eyeTrackerActive)}
                        className={`rounded-md px-2.5 py-1 font-bold border text-[10px] ${
                          eyeTrackerActive 
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                            : 'bg-white border-slate-200 text-slate-400'
                        }`}
                      >
                        {eyeTrackerActive ? 'Monitor Streaming' : 'Paused'}
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 rounded-xl border border-slate-200 gap-3">
                      <div className="flex items-center space-x-2.5">
                        <div className="h-9 w-14 rounded-full border border-slate-200 flex items-center justify-center relative overflow-hidden bg-slate-50 shrink-0">
                          <div 
                            className="h-4.5 w-4.5 rounded-full flex items-center justify-center transition-all duration-300"
                            style={{ 
                              transform: `scale(${eyeMetrics.aspectRatio < 0.15 ? '0.1' : '1'})`,
                              backgroundColor: eyeMetrics.aspectRatio < 0.15 ? '#ef4444' : '#2563eb'
                            }}
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          </div>
                          {eyeMetrics.aspectRatio < 0.15 && (
                            <div className="absolute inset-x-0 h-full bg-rose-50 flex items-center justify-center text-[8px] text-rose-600 font-bold font-mono">
                              BLINKING
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">IRIS COMPATIBLE</span>
                      </div>

                      <div className="text-right space-y-0.5 text-slate-600 font-sans text-xs flex-1 w-full sm:w-auto">
                        <div className="flex justify-between sm:justify-end sm:gap-4 text-[11px]">
                          <span className="text-slate-400">Aspect Ratio:</span>
                          <span className="font-mono text-slate-800 font-bold">{eyeMetrics.aspectRatio}</span>
                        </div>
                        <div className="flex justify-between sm:justify-end sm:gap-4 text-[11px]">
                          <span className="text-slate-400">Total Blinks:</span>
                          <span className="font-mono text-slate-800 font-bold">{eyeMetrics.blinkCount} checks</span>
                        </div>
                        <div className="flex justify-between sm:justify-end sm:gap-4 text-[11px]">
                          <span className="text-slate-400">Fatigue status:</span>
                          <span className={`font-mono font-bold ${eyeMetrics.aspectRatio < 0.15 ? 'text-rose-600' : 'text-emerald-600'}`}>{eyeMetrics.drowsinessRisk}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Facial check liveness anti-spoof checks */}
                {p.id === 'proj_face_attendance' && (
                  <div className="flex flex-col justify-between h-full space-y-2.5 font-mono text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-bold text-[9px] uppercase tracking-wider">Liveness Authentication Screen</span>
                      {faceCheckState !== 'idle' && (
                        <button onClick={resetFaceScan} className="text-slate-400 hover:text-slate-600 text-[9px] font-bold uppercase">
                          Reset
                        </button>
                      )}
                    </div>

                    <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-200">
                      {faceCheckState === 'idle' && (
                        <button 
                          onClick={startFaceScan}
                          className="rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 font-bold font-sans text-xs transition-colors shrink-0"
                        >
                          Run Liveness Script
                        </button>
                      )}

                      {faceCheckState === 'scanning' && (
                        <div className="relative h-9 w-9 border border-amber-500/40 rounded flex items-center justify-center shrink-0 bg-amber-50 animate-pulse">
                          <RefreshCw className="h-4 w-4 text-amber-600 animate-spin" />
                        </div>
                      )}

                      {faceCheckState === 'passed' && (
                        <div className="h-9 w-9 border border-emerald-300 rounded flex items-center justify-center bg-emerald-50 shrink-0">
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                        </div>
                      )}

                      <span className={`text-[11px] leading-relaxed font-sans ${
                        faceCheckState === 'passed' ? 'text-emerald-700 font-bold' : 
                        faceCheckState === 'scanning' ? 'text-amber-700' : 'text-slate-500'
                      }`}>
                        {faceScanMessage}
                      </span>
                    </div>
                  </div>
                )}

                {/* Semantic Cataloger index */}
                {p.id === 'proj_book_finder' && (
                  <div className="flex flex-col justify-between h-full space-y-2 font-mono text-[11px]">
                    <div className="text-slate-400 font-bold text-[9px] uppercase tracking-wider">Google Books API Gateway</div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1 font-sans text-xs text-slate-600">
                      <div className="flex justify-between border-b border-slate-100 pb-1">
                        <span>API ENDPOINT:</span>
                        <span className="font-mono text-blue-600">api.google/books/v1</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Query Throttle Status:</span>
                        <span className="text-emerald-600 font-bold">Safe Protection Enabled</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card footer description */}
                <div className="mt-4 pt-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-1">
                  <span>Compiled & Production Ready</span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {p.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="bg-white shadow-sm border border-slate-200 px-2 py-0.5 rounded text-slate-500 font-mono text-[9px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
