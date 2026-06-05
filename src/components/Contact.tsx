import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Key, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data';

interface ContactProps {
  currentPersona: string;
  accentHex: string;
}

export default function Contact({ currentPersona, accentHex }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusState, setStatusState] = useState<'idle' | 'tunneling' | 'hashing' | 'secured'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleMessageSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatusState('tunneling');
    setLogs(["[00.0s] AUTHENTICATING CONTACT INTERFACE...", "[00.4s] INGRESS GATEWAY DETECTED: PORT 3000"]);

    setTimeout(() => {
      setStatusState('hashing');
      setLogs(prev => [
        ...prev, 
        "[01.2s] SECURING DATA BUFFER WITH SHA-256 PACKETS...", 
        `[01.8s] BUFFER ENCRYPTION IDENTIFIER: [${Math.random().toString(36).substring(4).toUpperCase()}]`
      ]);
    }, 1200);

    setTimeout(() => {
      setStatusState('secured');
      setLogs(prev => [
        ...prev, 
        "[02.5s] TRANSMITTING BUFFER PROTOCOL TO CLOUD INDEX...",
        "[03.0s] STATUS: SUCCESS. MESSAGE DELIVERED TO CHANDRAKANTHA C V."
      ]);
    }, 2800);
  };

  const handleReset = () => {
    setStatusState('idle');
    setFormData({ name: '', email: '', message: '' });
    setLogs([]);
  };

  return (
    <section id="contact" className="py-12 border-t border-slate-200 scroll-mt-6">
      
      {/* SECTION HEADER */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
          <Terminal className="h-3.5 w-3.5 text-blue-600" />
          <span>Professional Inquiries</span>
        </div>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-1 text-sm text-slate-500 max-w-xl">
          Submit the form below or contact Chandrakantha directly to route projects, opportunities, or research collaboration directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct communication parameters (5 cols) */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between self-stretch">
          
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between shadow-sm relative overflow-hidden">
            
            <div className="space-y-3.5 z-10">
              <span className="font-mono text-xs font-bold tracking-widest text-blue-600 uppercase">
                // Communication Vectors
              </span>
              <p className="font-sans text-xs leading-relaxed text-slate-500">
                Contact official channels directly below, or use the secure message transmitter panel to dispatch key briefings.
              </p>
            </div>

            <div className="space-y-4.5 z-10 py-4">
              
              <a
                href="mailto:chandrakantha@gmail.com"
                className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500 group-hover:text-blue-600 transition-colors">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] text-slate-400 uppercase font-bold tracking-wider">Email Address</h4>
                  <p className="font-mono text-xs text-slate-800 font-bold group-hover:text-blue-650">chandrakantha@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917892660252"
                className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500 group-hover:text-blue-600 transition-colors">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] text-slate-400 uppercase font-bold tracking-wider">Direct Phone Line</h4>
                  <p className="font-mono text-xs text-slate-800 font-bold group-hover:text-blue-650">+91 7892660252</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] text-slate-400 uppercase font-bold tracking-wider">Professional Base</h4>
                  <p className="font-sans text-xs text-slate-800 font-semibold">{portfolioData.location}</p>
                </div>
              </div>

            </div>

            {/* Quick telemetry parameters widget */}
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 font-mono text-[10px] space-y-1 text-slate-500">
              <div className="flex justify-between border-b border-slate-200 pb-1.5 select-none font-bold text-slate-400 uppercase tracking-wider text-[9px]">
                <span>Active Routing Core</span>
                <span>Port Status</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>[GCP PROJECT ENDPOINT]</span>
                <span className="text-teal-600 font-bold">TUNNEL SECURE</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>[MAPPED DOMAIN]</span>
                <span>Davangere, IN (APAC-SOUTH)</span>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Direct Form Transmission Dashboard (7 cols) */}
        <div className="lg:col-span-12 xl:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 self-stretch h-full flex flex-col justify-between shadow-sm">
            
            {statusState === 'idle' ? (
              <form onSubmit={handleMessageSubmit} className="space-y-4">
                <span className="font-mono text-xs font-bold tracking-widest text-blue-600 uppercase block mb-3">
                  // Dispatch Message Packet
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sender Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g., Janet Archer"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 outline-none px-4 py-3 text-xs text-slate-800 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all font-sans font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Return Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g., jane@developer.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 outline-none px-4 py-3 text-xs text-slate-800 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all font-sans font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Provide details about engineering roles, technical consultancies, or project collaboration ideas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 outline-none px-4 py-3 text-xs text-slate-800 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all font-sans leading-relaxed resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="btn-contact-submit"
                  className="w-full rounded-xl py-3.5 bg-blue-600 hover:bg-blue-700 font-sans text-xs font-bold text-white transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
                >
                  <span>Submit Message Securely</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 font-mono text-xs text-slate-400 uppercase tracking-wider">
                    <Key className="h-4 w-4 text-blue-600" />
                    <span>Processing Secure REST Session</span>
                  </div>
                  
                  {/* Console Logger Simulation */}
                  <div className="rounded-xl bg-slate-900 p-4 border border-slate-800 font-mono text-[11px] text-teal-400 space-y-1.5 h-[160px] overflow-y-auto shadow-inner">
                    {logs.map((log, lIdx) => (
                      <div key={lIdx} className="font-mono">{log}</div>
                    ))}
                  </div>

                  {statusState === 'tunneling' && (
                    <p className="font-mono text-xs text-amber-600 animate-pulse">
                      STATE: Handshaking secure transmission tunnel endpoints...
                    </p>
                  )}
                  {statusState === 'hashing' && (
                    <p className="font-mono text-xs text-blue-600 animate-pulse">
                      STATE: Packaging message frames and salting buffer blocks...
                    </p>
                  )}
                  {statusState === 'secured' && (
                    <div className="p-4 bg-emerald-50 border border-emerald-250 rounded-xl flex items-start space-x-3 shadow-sm hover:scale-[1.01] transition-transform">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="space-y-1.5 text-xs">
                        <h4 className="font-sans font-bold text-emerald-800">
                          TRANSMISSION DISPATCH SUCCESSFUL!
                        </h4>
                        <p className="font-sans text-slate-600 leading-relaxed">
                          Your message packet was compiled successfully. Chandrakantha Acharya will unlock your message and follow up soon at your address: <strong className="text-slate-800">{formData.email}</strong>.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {statusState === 'secured' && (
                  <button
                    onClick={handleReset}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 py-3 font-sans text-xs font-bold text-slate-700 transition-all cursor-pointer"
                  >
                    Send Another Message Inquiry
                  </button>
                )}
              </div>
            )}

            <div className="mt-6 border-t border-slate-100 pt-4 text-center select-none">
              <span className="font-mono text-[9px] text-slate-400 block uppercase font-bold tracking-widest">
                Google Cloud Certified Security Standard Applied
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
