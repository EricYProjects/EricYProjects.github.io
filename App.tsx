import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Gateway } from './components/Gateway';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CursorFollower } from './components/CursorFollower';
import { ProfessionalWork } from './components/ProfessionalWork';
import { SideProjects } from './components/SideProjects';
import { About } from './components/About';

export type ViewState = 'home' | 'professional' | 'projects' | 'about';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    setMounted(true);
    // Handle back button roughly
    window.onpopstate = () => {
       setView('home'); 
    };
  }, []);

  const handleNavigate = (newView: ViewState) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-red-600 selection:text-white">
      <CursorFollower />
      <Navbar currentView={view} onNavigate={handleNavigate} />
      
      <main className="flex-grow flex flex-col">
        {view === 'home' && (
          <>
            <Hero />
            <Gateway onNavigate={handleNavigate} />
          </>
        )}
        
        {view === 'professional' && <ProfessionalWork />}
        
        {view === 'projects' && <SideProjects />}

        {view === 'about' && <About />}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}