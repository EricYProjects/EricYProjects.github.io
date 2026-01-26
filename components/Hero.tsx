import React from 'react';
import { ArrowDown, Crosshair } from 'lucide-react';
import { COLORS, CONTENT } from '../constants';
import portraitImage from '../assets/IMG_0718.JPG';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 border-b-4 border-black overflow-hidden">
      
      {/* Left Column: Manifesto & Title */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-between p-6 lg:p-12 relative bg-[#F2F2F2]">
        {/* Background Grid Lines for Technical Feel */}
        <div className="absolute inset-0 pointer-events-none opacity-10" 
             style={{ 
               backgroundImage: `linear-gradient(${COLORS.BLACK} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.BLACK} 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="relative z-10 mt-12 lg:mt-20">
          <h2 className="text-sm font-bold tracking-[0.3em] mb-4 text-red-600 flex items-center gap-2">
            <span className="w-4 h-4 bg-black block"></span>
            {CONTENT.hero.role}
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900 stroke-black text-stroke">
                {CONTENT.hero.title}
            </span>
          </h1>
        </div>

        <div className="relative z-10 max-w-xl mt-12 mb-12">
            <div className="border-l-4 border-yellow-500 pl-6 py-2">
                <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800">
                    {CONTENT.hero.manifesto}
                </p>
            </div>
        </div>

        <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full animate-bounce">
                <ArrowDown size={24} />
            </div>
            <span className="text-xs font-bold tracking-widest">SCROLL TO LEARN MORE</span>
        </div>
      </div>

      {/* Right Column: Professional Portrait (Constructivist Style) */}
      <div className="col-span-1 lg:col-span-5 relative bg-white border-t-4 lg:border-t-0 lg:border-l-4 border-black min-h-[50vh] lg:min-h-auto overflow-hidden group">
        
        {/* Composition Container */}
        <div className="absolute inset-0 flex items-end justify-center pb-0 relative overflow-hidden">
            
            {/* Layer 1: The Red Halo (Behind) */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#D22730] rounded-full mix-blend-multiply z-0 opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out"></div>
            
            {/* Layer 2: The Portrait Frame */}
            <div className="relative z-10 w-3/4 h-[85%] border-x-4 border-t-4 border-black bg-gray-200 overflow-hidden shadow-2xl">
                 <img
                    src={portraitImage}
                    alt="Portrait of Eric Yium"
                    className="w-full h-full object-cover grayscale contrast-[1.2] brightness-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-in-out"
                 />
                 
                 {/* Technical Overlay on Image */}
                 <div className="absolute top-4 right-4 text-white opacity-50 mix-blend-difference">
                     <Crosshair size={24} />
                 </div>
                 
                 {/* Gradient Fade at bottom */}
                 <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Layer 3: Geometric Intersections (Front) */}
            
            {/* The Yellow Beam - Crossing the subject */}
            <div className="absolute bottom-1/4 -left-10 w-[120%] h-8 bg-[#F4B400] z-20 transform -rotate-12 mix-blend-multiply border-y-2 border-black opacity-90 pointer-events-none"></div>
            
            {/* The Blue Pillar - Structural Support */}
            <div className="absolute top-0 right-12 w-16 h-1/2 bg-[#1D4E89] z-0 mix-blend-multiply opacity-80 border-x-2 border-black"></div>
        </div>
      </div>
      
      {/* Decorative Text Stroke Styles for the hollow text effect */}
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 2px black;
          color: transparent;
        }
      `}</style>
    </section>
  );
};