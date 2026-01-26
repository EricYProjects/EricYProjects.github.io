import React from 'react';
import { CONTENT, COLORS } from '../constants';
import { Landmark, TrendingUp, Network, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
        case "01": return <Landmark size={24} className="text-white" />; // White House
        case "02": return <TrendingUp size={24} className="text-black" />; // Goldman
        case "03": return <Network size={24} className="text-white" />; // Deloitte
        case "04": return <Cpu size={24} className="text-white" />; // RTX
        default: return <div className="w-4 h-4 bg-black" />;
    }
  };

  const getColor = (id: string) => {
      switch (id) {
          case "01": return 'bg-[#1D4E89]'; // White House (Blue)
          case "02": return 'bg-[#F4B400]'; // Goldman (Yellow)
          case "03": return 'bg-[#1A1A1A]'; // Deloitte (Black)
          case "04": return 'bg-[#D22730]'; // RTX (Red)
          default: return 'bg-black';
      }
  };

  const getTextColor = (id: string) => {
    switch (id) {
        case "01": return 'text-blue-800';
        case "02": return 'text-yellow-600';
        case "03": return 'text-black';
        case "04": return 'text-red-600';
        default: return 'text-gray-600';
    }
  };

  return (
    <section className="w-full bg-[#F2F2F2] min-h-screen flex flex-col relative overflow-hidden">
       {/* Blueprint Background */}
       <div className="absolute inset-0 pointer-events-none opacity-5" 
             style={{ 
               backgroundImage: `linear-gradient(${COLORS.BLACK} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.BLACK} 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>

      <header className="pt-24 pb-12 px-6 lg:px-12 border-b-4 border-black bg-white relative z-10">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-4 h-4 bg-black animate-spin-slow"></div>
            <span className="text-xs font-bold tracking-[0.3em] text-black">WORK LOG</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black uppercase">
          PROFESSIONAL<br/><span className="text-gray-400 stroke-black text-stroke">EXPERIENCE</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg font-medium border-l-4 border-black pl-6">
            {CONTENT.about.description}
        </p>
      </header>

      <div className="flex-grow p-6 lg:p-12 relative max-w-7xl mx-auto w-full">
          {/* Central Construction Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-1 bg-black hidden lg:block"></div>
          
          <div className="space-y-16 lg:space-y-0">
              {CONTENT.about.timeline.map((job, index) => {
                  const isEven = index % 2 === 0;
                  return (
                      <div key={job.id} className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''} group`}>
                          
                          {/* Content Block */}
                          <div className="w-full lg:w-1/2 p-6 lg:p-12">
                              <div className={`bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden`}>
                                  
                                  {/* Color Accent Bar */}
                                  <div className={`absolute top-0 left-0 w-full h-2 ${getColor(job.id)}`}></div>
                                  
                                  <div className="flex justify-between items-start mb-4">
                                      <div className={`text-xs font-bold tracking-widest px-2 py-1 text-white ${getColor(job.id)} inline-block mb-2`}>
                                          {job.type}
                                      </div>
                                      <span className="font-mono font-bold text-gray-300 text-4xl leading-none opacity-50">{job.id}</span>
                                  </div>

                                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-1">{job.company}</h3>
                                  <h4 className={`text-sm font-bold tracking-[0.2em] mb-6 font-mono ${getTextColor(job.id)}`}>
                                      {job.title}
                                  </h4>
                                  
                                  <p className="text-base font-medium text-gray-800 leading-relaxed border-t-2 border-gray-100 pt-4">
                                      {job.summary}
                                  </p>
                              </div>
                          </div>

                          {/* Center Connector (Desktop) */}
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                              <div className={`w-16 h-16 border-4 border-black ${getColor(job.id)} flex items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-125`}>
                                  {getIcon(job.id)}
                              </div>
                          </div>

                          {/* Mobile Connector */}
                          <div className="flex lg:hidden items-center gap-4 w-full px-6 mb-4">
                               <div className="h-px bg-black flex-grow"></div>
                               <div className={`w-12 h-12 border-4 border-black ${getColor(job.id)} flex items-center justify-center rounded-full shrink-0`}>
                                  {getIcon(job.id)}
                               </div>
                               <div className="h-px bg-black flex-grow"></div>
                          </div>

                          {/* Spacer / Visuals side - Now Typographic */}
                          <div className="w-full lg:w-1/2 min-h-[200px] relative flex items-center justify-center overflow-hidden pointer-events-none">
                              <div className="hidden lg:flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                                   <span className={`text-6xl xl:text-8xl font-bold tracking-tighter text-transparent select-none`} style={{ WebkitTextStroke: '2px #1A1A1A' }}>
                                      {job.year}
                                   </span>
                              </div>
                          </div>

                      </div>
                  );
              })}
          </div>
      </div>
      
      {/* Animation Styles */}
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 2px black;
          color: transparent;
        }
        .animate-spin-slow {
            animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};