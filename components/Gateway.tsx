import React from 'react';
import { ArrowRight, Box, PenTool } from 'lucide-react';
import { COLORS, CONTENT } from '../constants';
import { ViewState } from '../App';

interface GatewayProps {
  onNavigate: (view: ViewState) => void;
}

export const Gateway: React.FC<GatewayProps> = ({ onNavigate }) => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">
      <GatewayCard 
        type="professional"
        icon={<Box size={48} />}
        accentColor="bg-[#1D4E89]" // Blue
        hoverColor="group-hover:text-[#1D4E89]"
        content={CONTENT.professional}
        onClick={() => onNavigate('professional')}
      />
      <GatewayCard 
        type="side"
        icon={<PenTool size={48} />}
        accentColor="bg-[#D22730]" // Red
        hoverColor="group-hover:text-[#D22730]"
        content={CONTENT.sideProjects}
        onClick={() => onNavigate('projects')}
      />
    </section>
  );
};

interface GatewayCardProps {
  type: 'professional' | 'side';
  icon: React.ReactNode;
  accentColor: string;
  hoverColor: string;
  content: typeof CONTENT.professional | typeof CONTENT.sideProjects;
  onClick: () => void;
}

const GatewayCard: React.FC<GatewayCardProps> = ({ type, icon, accentColor, hoverColor, content, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
      relative group h-[60vh] md:h-[80vh] border-b-4 md:border-b-0 border-black p-8 md:p-16 flex flex-col justify-end overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
      ${type === 'professional' ? 'md:border-r-4 bg-white' : 'bg-[#F2F2F2]'}
    `}>
      {/* Interactive Background Slide */}
      <div className={`absolute inset-0 ${accentColor} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0`}></div>

      {/* Grid Pattern overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-10"
        style={{ 
          backgroundImage: `linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)`, 
          backgroundSize: '30px 30px' 
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        
        {/* Top Icon Area */}
        <div className="flex justify-between items-start">
            <div className={`p-4 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none text-black`}>
                {icon}
            </div>
            <div className="text-6xl font-bold opacity-10 group-hover:opacity-30 group-hover:text-white transition-all duration-500 font-mono">
                {type === 'professional' ? '01' : '02'}
            </div>
        </div>

        {/* Text Content */}
        <div className="mt-auto group-hover:text-white transition-colors duration-300">
          <h3 className="text-sm font-bold tracking-[0.2em] mb-2 uppercase flex items-center gap-2">
             <span className={`w-8 h-1 ${accentColor} group-hover:bg-white`}></span>
             {content.subtitle}
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-none uppercase">
            {content.title}
          </h2>
          <p className="max-w-md text-lg font-medium mb-8 border-l-2 border-current pl-4 opacity-80">
            {content.description}
          </p>

          {/* Action Button */}
          <button className={`
            flex items-center gap-4 text-sm font-bold tracking-widest uppercase group/btn
          `}>
            <span className="border-b-2 border-current pb-1 group-hover/btn:pr-4 transition-all duration-300">
                {content.action}
            </span>
            <div className={`w-8 h-8 flex items-center justify-center border-2 border-current rounded-full group-hover/btn:bg-white group-hover/btn:text-black transition-colors`}>
                <ArrowRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};