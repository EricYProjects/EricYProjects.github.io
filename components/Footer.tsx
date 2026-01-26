import React from 'react';
import { COLORS } from '../constants';
import { ViewState } from '../App';

interface FooterProps {
    onNavigate?: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white p-12 border-t-4 border-red-600">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-2xl font-bold mb-4 tracking-tighter">RESEARCHER<br/>DESIGNER<br/>TECHNOLOGY PROFESSIONAL</h4>
          <p className="text-gray-400 max-w-xs text-sm">
            Bridging the gap between user needs and technology solutions.
          </p>
        </div>
        
        <div className="col-span-1">
            <h5 className="font-bold text-yellow-500 mb-4 tracking-widest text-xs">SOCIAL</h5>
            <ul className="space-y-2 text-sm font-medium">
                <li><a href="https://www.linkedin.com/in/eric-yium-00661a167/" className="hover:text-red-500 transition-colors">LINKEDIN</a></li>
            </ul>
        </div>

        <div className="col-span-1">
             <h5 className="font-bold text-blue-500 mb-4 tracking-widest text-xs">CONTACT</h5>
             <p className="text-sm hover:underline cursor-pointer" onClick={() => window.location.href = 'mailto:ContactEricY@yahoo.com'}>ContactEricY@yahoo.com</p>
             <div className="mt-8 flex gap-2">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-none"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
             </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-end">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">© 2026 Eric Yium</span>
        <span className="text-[100px] leading-[0.7] font-bold text-gray-800 opacity-20 pointer-events-none select-none">BHS</span>
      </div>
    </footer>
  );
};