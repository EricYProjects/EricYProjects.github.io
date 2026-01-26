import React from 'react';
import { Hexagon, Terminal } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-[#F2F2F2] px-6 py-4 flex justify-between items-center transition-colors duration-300">
      <div 
        className="flex items-center gap-3 group cursor-pointer" 
        onClick={() => onNavigate('home')}
      >
        <div className="relative w-10 h-10 border-2 border-black bg-white flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-90 duration-500">
             <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             <Hexagon className="w-6 h-6 text-black group-hover:text-white relative z-10 transition-colors duration-300" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
            <span className="font-bold text-lg leading-none tracking-tight">ERIC YIUM</span>
            <span className="font-medium text-xs tracking-[0.2em] text-gray-600 group-hover:text-black transition-colors">ContactEricY@yahoo.com</span>
        </div>
      </div>

      <div className="hidden md:flex gap-8">
        <NavItem 
          number="01" 
          label="PROFESSIONAL" 
          isActive={currentView === 'professional'} 
          onClick={() => onNavigate('professional')} 
        />
        <NavItem 
          number="02" 
          label="PROJECTS" 
          isActive={currentView === 'projects'} 
          onClick={() => onNavigate('projects')} 
        />
        <NavItem 
          number="03" 
          label="ABOUT" 
          isActive={currentView === 'about'} 
          onClick={() => onNavigate('about')} 
        />
      </div>
      
      <div className="md:hidden">
         <Terminal className="w-6 h-6" />
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ number: string; label: string; isActive: boolean; onClick: () => void }> = ({ number, label, isActive, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-start group relative">
    <span className={`text-[10px] font-bold text-red-600 transition-opacity absolute -top-3 left-0 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
      {number}
    </span>
    <span className="font-bold text-sm tracking-widest relative z-10">
      {label}
      <span className={`block h-[2px] bg-black transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </span>
  </button>
);