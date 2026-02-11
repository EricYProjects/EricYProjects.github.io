import React, { useState } from 'react';
import { CONTENT, COLORS } from '../constants';
import { ArrowUpRight, FolderOpen, Layers, X, Grid3X3, User, Map, Box, Split, Layout, Component, ShieldAlert, EyeOff } from 'lucide-react';

const FILTERS = ['ALL SYSTEMS', 'USABILITY TESTING', 'USER RESEARCH', 'UI DESIGN'];

export const ProfessionalWork: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL SYSTEMS');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredProjects = CONTENT.projectsList.filter(project => {
    if (activeFilter === 'ALL SYSTEMS') return true;
    return project.category === activeFilter;
  });

  return (
    <section className="w-full bg-[#F2F2F2] min-h-screen relative">
       {/* Blueprint Grid Background */}
       <div className="absolute inset-0 pointer-events-none opacity-5" 
             style={{ 
               backgroundImage: `linear-gradient(${COLORS.BLUE} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.BLUE} 1px, transparent 1px)`, 
               backgroundSize: '20px 20px' 
             }}>
        </div>

      <header className="pt-24 pb-12 px-6 lg:px-12 border-b-4 border-black bg-white relative z-10">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-4 h-4 bg-blue-700 animate-pulse"></div>
            <span className="text-xs font-bold tracking-[0.3em] text-blue-800">SYSTEM ARCHIVE_01</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-black uppercase">
          PROFESSIONAL<br/><span className="text-blue-700">WORK</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-black">
         {/* Sidebar / Filters */}
         <div className="col-span-1 lg:col-span-3 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-6 bg-white lg:sticky lg:top-24 self-start">
            <h3 className="text-sm font-bold tracking-widest mb-6 flex items-center gap-2">
                <Layers size={16} /> FILTERS
            </h3>
            <div className="space-y-4">
                {FILTERS.map((filter) => (
                    <button 
                        key={filter} 
                        onClick={() => setActiveFilter(filter)}
                        className={`w-full text-left py-2 px-4 border-2 border-black font-bold text-xs tracking-widest hover:bg-black hover:text-white transition-all ${activeFilter === filter ? 'bg-black text-white' : 'bg-white text-black'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            
            {/* NDA / Privacy Notice Block */}
            <div className="mt-12 p-4 bg-yellow-50 border-2 border-yellow-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[9px] font-bold px-2 py-0.5">
                    NOTICE 01
                </div>
                <div className="flex items-start gap-3 mb-2 pt-2">
                    <ShieldAlert size={20} className="text-yellow-600 shrink-0" />
                    <h4 className="font-bold text-xs uppercase tracking-widest text-yellow-700">Confidentiality Protocol</h4>
                </div>
                <p className="text-[10px] font-medium text-yellow-900 leading-relaxed uppercase border-t border-yellow-200 pt-2">
                    Due to sensitivity of work materials, actual deliverables cannot be displayed publicly.
                </p>
                <p className="text-[10px] font-bold text-black leading-relaxed mt-2">
                     Visuals presented are representative abstractions of work.
                </p>
            </div>
         </div>

         {/* Projects Grid */}
         <div className="col-span-1 lg:col-span-9 p-6 lg:p-12">
            <div className="grid grid-cols-1 gap-12">
                {filteredProjects.map((project) => (
                    <div 
                        key={project.id} 
                        onClick={() => toggleExpand(project.id)}
                        className={`group relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_#1D4E89] transition-all duration-300 cursor-pointer
                        ${expandedId === project.id ? 'ring-4 ring-blue-500 ring-offset-4' : ''}`}
                    >
                        {/* Summary Section */}
                        <div className="p-8">
                            {/* Technical Numbering */}
                            <div className="absolute -top-5 -right-5 w-12 h-12 bg-black text-white flex items-center justify-center font-bold font-mono text-xl z-10 group-hover:bg-blue-700 transition-colors">
                                {project.id}
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                 {/* Abstract Bauhaus Thumbnail - Changes based on project ID for variety */}
                                 <div className="w-full md:w-1/3 aspect-video bg-blue-900 relative overflow-hidden border-2 border-black">
                                     {/* Background Grid */}
                                     <div className="absolute inset-0 opacity-20"
                                         style={{ 
                                           backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
                                           backgroundSize: '10px 10px' 
                                         }}></div>
                                     
                                     {/* Abstract Content */}
                                     <div className="absolute inset-0 flex items-center justify-center">
                                         {project.id === "01" ? (
                                              // 3D Engine Abstract (Now Project 01)
                                             <div className="relative w-32 h-32 flex items-center justify-center">
                                                <div className="absolute w-24 h-24 border-4 border-white opacity-50 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                                <div className="absolute w-16 h-16 border-4 border-yellow-500 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
                                                <Box size={40} className="text-white relative z-10 animate-pulse"/>
                                             </div>
                                         ) : project.id === "02" ? (
                                             // Excel Sheet Abstract (Now Project 02)
                                             <div className="grid grid-cols-5 gap-1 w-3/4 h-3/4 opacity-60">
                                                {[...Array(25)].map((_, i) => (
                                                    <div key={i} className={`bg-white ${i % 3 === 0 ? 'opacity-100' : 'opacity-30'}`}></div>
                                                ))}
                                             </div>
                                         ) : project.id === "03" ? (
                                              // UI Design Abstract
                                             <div className="relative w-full h-full p-8 flex flex-col gap-2 opacity-80">
                                                  <div className="w-full h-4 bg-white opacity-90"></div>
                                                  <div className="flex-1 flex gap-2">
                                                      <div className="w-1/4 h-full bg-blue-500 opacity-50"></div>
                                                      <div className="flex-1 h-full bg-white opacity-80 flex flex-col gap-2 p-1">
                                                          <div className="w-1/2 h-2 bg-black opacity-20"></div>
                                                          <div className="flex-1 grid grid-cols-2 gap-1">
                                                              <div className="bg-red-500 opacity-40"></div>
                                                              <div className="bg-yellow-500 opacity-40"></div>
                                                          </div>
                                                      </div>
                                                  </div>
                                             </div>
                                         ) : (
                                             <FolderOpen size={48} className="text-white opacity-50" />
                                         )}
                                     </div>
                                 </div>

                                 <div className="flex-1">
                                     <div className="flex justify-between items-start mb-2">
                                         <h4 className="text-xs font-bold text-blue-700 tracking-widest">{project.client}</h4>
                                         <span className="text-xs font-mono font-bold bg-gray-200 px-2 py-1">{project.year}</span>
                                     </div>
                                     <h2 className="text-3xl font-bold uppercase mb-4 group-hover:text-blue-800 transition-colors">{project.title}</h2>
                                     <p className="text-lg font-medium text-gray-700 leading-relaxed mb-6 max-w-xl">
                                         {project.description}
                                     </p>
                                     
                                     <div className="flex flex-wrap gap-2 mb-6">
                                         {project.tags.map(tag => (
                                             <span key={tag} className="text-[10px] font-bold border border-black px-2 py-1 uppercase hover:bg-black hover:text-white transition-colors">
                                                 {tag}
                                             </span>
                                         ))}
                                     </div>

                                     <button className="flex items-center gap-2 text-sm font-bold uppercase border-b-2 border-black pb-1 hover:text-blue-700 hover:border-blue-700 transition-all">
                                         {expandedId === project.id ? 'Close Case Study' : 'View Case Study'} <ArrowUpRight size={16} className={`transition-transform ${expandedId === project.id ? 'rotate-180' : ''}`} />
                                     </button>
                                 </div>
                            </div>
                        </div>

                        {/* Detailed Expanded Section */}
                        {expandedId === project.id && project.hasDetails && project.details && (
                            <div className="border-t-4 border-black bg-gray-50 p-8 md:p-12 animate-in slide-in-from-top-4 fade-in duration-500">
                                
                                {/* Case Study Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                                    <div className="col-span-1">
                                        <h3 className="text-xl font-bold uppercase mb-4 text-red-600 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-black"></span> Problem
                                        </h3>
                                        <p className="text-sm font-medium leading-relaxed text-gray-800">
                                            {project.details.problem}
                                        </p>
                                    </div>
                                    <div className="col-span-1">
                                        <h3 className="text-xl font-bold uppercase mb-4 text-blue-600 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-black"></span> Approach
                                        </h3>
                                        <p className="text-sm font-medium leading-relaxed text-gray-800">
                                            {project.details.approach}
                                        </p>
                                    </div>
                                    <div className="col-span-1">
                                        <h3 className="text-xl font-bold uppercase mb-4 text-yellow-600 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-black"></span> Outcomes
                                        </h3>
                                        <p className="text-sm font-medium leading-relaxed text-gray-800">
                                            {project.details.outcomes}
                                        </p>
                                    </div>
                                </div>

                                {/* Visual Assets Gallery (Bauhaus Interpretation) */}
                                {project.visuals && (
                                    <div className={`grid gap-8 ${project.visuals.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
                                        {project.visuals.map((visual, idx) => {
                                            // Determine Aspect Ratio based on type (Enforcing Video aspect for 3D model and Comparison)
                                            const isHorizontal = visual.type === 'ui-comparison' || visual.type === '3d-model';
                                            const aspectRatioClass = isHorizontal ? 'aspect-video' : 'aspect-square';

                                            return (
                                                <div key={idx} className="flex flex-col gap-2">
                                                    <div className={`bg-white border-2 border-black p-4 flex items-center justify-center overflow-hidden relative shadow-md ${aspectRatioClass}`}>
                                                        
                                                        {/* PRIVACY / NDA BADGE - APPLIED TO ALL FIGURES */}
                                                        <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-white border border-black px-1.5 py-0.5 shadow-sm">
                                                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                                                            <span className="text-[6px] font-bold uppercase tracking-wider text-black leading-none">
                                                                Representative / NDA
                                                            </span>
                                                        </div>

                                                        {/* COST SHEET VISUALS */}
                                                        {visual.type === 'grid' && (
                                                            <div className="w-full h-full grid grid-cols-6 grid-rows-12 gap-px bg-gray-200">
                                                                {[...Array(72)].map((_, i) => (
                                                                    <div key={i} className={`bg-white ${Math.random() > 0.8 ? 'bg-red-500' : Math.random() > 0.9 ? 'bg-blue-500' : ''}`}></div>
                                                                ))}
                                                            </div>
                                                        )}
                                                        {visual.type === 'persona' && (
                                                            (visual as any).image ? (
                                                                <img 
                                                                    src={(visual as any).image} 
                                                                    alt={visual.caption} 
                                                                    className="w-full h-full object-cover" 
                                                                />
                                                            ) : (
                                                                <div className="relative w-32 h-32">
                                                                    <div className="absolute top-0 left-0 w-20 h-20 bg-blue-600 rounded-full mix-blend-multiply opacity-80"></div>
                                                                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-500 rounded-none mix-blend-multiply opacity-80"></div>
                                                                    <div className="absolute bottom-0 left-0 w-full h-2 bg-black"></div>
                                                                </div>
                                                            )
                                                        )}
                                                        {visual.type === 'map' && (
                                                            (visual as any).image ? (
                                                                <img 
                                                                    src={(visual as any).image} 
                                                                    alt={visual.caption} 
                                                                    className="w-full h-full object-cover" 
                                                                />
                                                            ) : (
                                                                <div className="flex flex-wrap gap-2 justify-center content-center w-full h-full">
                                                                    {[...Array(8)].map((_, i) => (
                                                                        <div key={i} className={`w-8 h-8 border border-black ${i % 2 === 0 ? 'bg-yellow-100' : 'bg-red-100'} transform rotate-${i * 5}`}></div>
                                                                    ))}
                                                                </div>
                                                            )
                                                        )}

                                                        {/* 3D ENGINE VISUALS */}
                                                        {visual.type === '3d-model' && (
                                                            // Logic: If user uploaded an image, show it. Otherwise show abstract fallback.
                                                            (visual as any).image ? (
                                                                <img 
                                                                    src={(visual as any).image} 
                                                                    alt={visual.caption} 
                                                                    className="w-full h-full object-cover" 
                                                                />
                                                            ) : (
                                                                <div className="relative w-full h-full perspective-1000 flex items-center justify-center bg-gray-900">
                                                                    {/* Abstract Wireframe Cylinder Fallback */}
                                                                    <div className="relative w-32 h-32 border-4 border-blue-500 rounded-full animate-[spin_8s_linear_infinite] border-dashed"></div>
                                                                    <div className="absolute w-24 h-48 border-2 border-white opacity-20 transform rotate-45"></div>
                                                                    <div className="absolute w-48 h-24 border-2 border-white opacity-20 transform -rotate-45"></div>
                                                                    <div className="absolute w-4 h-4 bg-red-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                                                                </div>
                                                            )
                                                        )}

                                                        {visual.type === 'ui-comparison' && (
                                                            // Logic: If user uploaded 'imageBefore' and 'imageAfter', show them side-by-side.
                                                            // Else, show abstract fallback.
                                                            ((visual as any).imageBefore && (visual as any).imageAfter) ? (
                                                                <div className="flex w-full h-full">
                                                                    <div className="w-1/2 relative border-r-2 border-black overflow-hidden">
                                                                        <img src={(visual as any).imageBefore} alt="Before" className="w-full h-full object-cover" />
                                                                        <div className="absolute top-2 left-2 text-[10px] font-bold bg-black text-white px-2 py-1 z-10">BEFORE</div>
                                                                    </div>
                                                                    <div className="w-1/2 relative overflow-hidden">
                                                                        <img src={(visual as any).imageAfter} alt="After" className="w-full h-full object-cover" />
                                                                        <div className="absolute top-2 left-2 text-[10px] font-bold bg-blue-600 text-white px-2 py-1 z-10">AFTER</div>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="flex w-full h-full">
                                                                    {/* BEFORE: Cluttered Fallback */}
                                                                    <div className="w-1/2 bg-gray-100 border-r-2 border-black p-2 flex flex-col gap-1 relative">
                                                                        <div className="absolute top-2 left-2 text-[8px] font-bold bg-black text-white px-1">BEFORE</div>
                                                                        <div className="w-full h-4 bg-gray-300 mb-1"></div>
                                                                        <div className="grid grid-cols-4 gap-1">
                                                                            {[...Array(12)].map((_, i) => (
                                                                                <div key={i} className="h-4 bg-gray-300"></div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="flex-1 border border-red-500 opacity-20"></div>
                                                                    </div>
                                                                    {/* AFTER: Clean Fallback */}
                                                                    <div className="w-1/2 bg-white p-4 flex flex-col items-center justify-center relative">
                                                                        <div className="absolute top-2 left-2 text-[8px] font-bold bg-blue-600 text-white px-1">AFTER</div>
                                                                        <div className="w-3/4 h-8 bg-black mb-2 rounded-sm"></div>
                                                                        <div className="w-1/2 h-2 bg-gray-300 rounded-sm"></div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}

                                                        {/* UI DESIGN VISUALS */}
                                                        {visual.type === 'ui-portal' && (
                                                            <div className="w-full h-full bg-gray-100 flex flex-col p-3 gap-2 border border-gray-300">
                                                                <div className="w-full h-3 bg-black"></div>
                                                                <div className="flex-1 flex gap-2">
                                                                    <div className="w-8 h-full bg-blue-200"></div>
                                                                    <div className="flex-1 bg-white border border-gray-200 p-2 flex flex-col gap-2">
                                                                        <div className="w-full h-8 bg-gray-100 flex items-center gap-1">
                                                                            <div className="w-4 h-4 rounded-full bg-red-500 opacity-50"></div>
                                                                            <div className="w-1/2 h-2 bg-gray-300"></div>
                                                                        </div>
                                                                        <div className="flex-1 grid grid-cols-2 gap-2">
                                                                            <div className="bg-gray-100 border border-gray-200"></div>
                                                                            <div className="bg-gray-100 border border-gray-200"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {visual.type === 'ui-components' && (
                                                            <div className="w-full h-full bg-white flex flex-col justify-center p-6 gap-4">
                                                                {/* Input Field */}
                                                                <div className="w-full">
                                                                    <div className="w-1/3 h-2 bg-black mb-1"></div>
                                                                    <div className="w-full h-8 border-2 border-black bg-blue-50"></div>
                                                                </div>
                                                                {/* Multi Select Chips */}
                                                                <div className="flex flex-wrap gap-2">
                                                                    <div className="px-2 py-1 bg-yellow-400 border border-black text-[6px] font-bold">OPTION A</div>
                                                                    <div className="px-2 py-1 bg-red-400 border border-black text-[6px] font-bold text-white">OPTION B</div>
                                                                    <div className="px-2 py-1 bg-white border border-black text-[6px] font-bold border-dashed text-gray-400">ADD +</div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {visual.type === 'ui-finance' && (
                                                            <div className="w-full h-full bg-[#111] p-3 flex flex-col gap-2 font-mono">
                                                                <div className="flex justify-between items-center text-[8px] text-gray-400">
                                                                    <span>DASHBOARD</span>
                                                                    <span className="text-green-500">LIVE</span>
                                                                </div>
                                                                <div className="flex-1 border border-gray-700 grid grid-cols-4 grid-rows-4">
                                                                    {[...Array(16)].map((_, i) => (
                                                                        <div key={i} className="border border-gray-800 flex items-end justify-center pb-1">
                                                                            <div className={`w-2 ${i % 3 === 0 ? 'bg-red-500' : 'bg-green-500'}`} style={{height: `${20 + (i*5) % 80}%`}}></div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                    </div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                                        FIG {idx + 1}. {visual.caption}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
         </div>
      </div>
      <style>{`
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </section>
  );
};