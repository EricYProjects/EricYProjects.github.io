import React, { useState, useEffect, useRef } from 'react';
import { CONTENT, COLORS } from '../constants';
import { Smartphone, ExternalLink, ArrowRight, X, ChevronDown, CheckCircle, AlertTriangle, Zap, Users, LayoutGrid, Cpu, Activity, MousePointer, Crown, Trophy, ArrowUp, HelpCircle, Eye, Image as ImageIcon, Scan, Play, Clock, Hourglass, Volume2, VolumeX } from 'lucide-react';

// Flow diagram images
import sitemap from '../assets/flows/Sitemap.jpg';
import flowCreateGame from '../assets/flows/SkeletonQueenFlows CreateGame.jpg';
import flowJoinGame from '../assets/flows/SkeletonQueenFlows JoinGame.jpg';
import flowBidding from '../assets/flows/SkeletonQueenFlows Bidding.jpg';
import flowPlaying from '../assets/flows/SkeletonQueenFlows Playing.jpg';
import flowScoring from '../assets/flows/SkeletonQueenFlows Scoring.jpg';

// Animation Videos
import notificationVideo from '../assets/splashScreen/SplashScreenAnimationHorizontal.mp4';
import confettiVideo from '../assets/trickWin/TrickWinAnimation.mp4';
import listSortingVideo from '../assets/scoreboard/RoundScoreboard_Horizontal.mp4';

// Before/After images - Disorientation section
import lobbyOld from '../assets/lobby/Lobby_Old_Focus.jpg';
import gameplayOld from '../assets/gameplayBoard/GameplayBoard_Old.jpg';

// After images - Visual Anchoring section
import lobbyNew from '../assets/lobby/Lobby_New_Focus.jpg';
import gameplayNew from '../assets/gameplayBoard/GameplayBoard_New.jpg';
import focusInteractionGif from '../assets/DragDrop/DragAndDrop.gif';

// After images - Contextual Information section
import bannerCrop from '../assets/rules/Rules_New_Banner.jpg';
import newBiddingGif from '../assets/menuOverlay/MenuOverlay.gif';
import playIndicatorGif from '../assets/yourTurn/YourTurnBanner.gif';

// Before images - Weak Rule Comprehension section
import biddingOld from '../assets/bidding/Prediction.jpg';
import rulesOld from '../assets/rules/Rules_Old.jpg';

// Promo video
import promoVideo from '../assets/PromoVideos/SkeletonQueenPromoVideo.mp4';

export const SideProjects: React.FC = () => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showCaseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showCaseStudy]);

  return (
    <section className="w-full bg-[#1A1A1A] text-white min-h-screen relative overflow-hidden">
        
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-red-600 rounded-bl-full opacity-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[60vw] h-[40vh] bg-yellow-500 rounded-tr-full opacity-10 mix-blend-screen pointer-events-none"></div>

      {/* Main Landing View */}
      <div className={`transition-all duration-700 ease-in-out ${showCaseStudy ? 'opacity-0 scale-95 translate-y-10' : 'opacity-100 scale-100 translate-y-0'}`}>
        <header className="pt-24 pb-12 px-6 lg:px-12 border-b-4 border-white relative z-10">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping"></div>
                <span className="text-xs font-bold tracking-[0.3em] text-yellow-500">EXPERIMENTAL LAB_02</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">
            SIDE<br/><span className="text-red-600">PROJECTS</span>
            </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            
            {/* Project Details */}
            <div className="p-8 lg:p-16 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-2 text-yellow-500 uppercase">{CONTENT.sideProjectMobile.title}</h2>
                <h3 className="text-xl font-medium tracking-[0.2em] mb-8 text-gray-400">{CONTENT.sideProjectMobile.subtitle}</h3>
                
                <div className="space-y-8 max-w-xl">
                    <p className="text-xl font-light leading-relaxed">
                        {CONTENT.sideProjectMobile.description}
                    </p>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                        {CONTENT.sideProjectMobile.techStack?.split('/').map((tech) => (
                            <span key={tech} className="px-3 py-1 border border-gray-500 text-xs font-mono text-gray-400 uppercase tracking-widest">
                                {tech.trim()}
                            </span>
                        ))}
                    </div>

                    {/* Technical Insight Section Removed per request */}
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-4">
                    <a href="https://skeletonqueen.io" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer font-bold text-sm">
                        <ExternalLink size={18} /> PLAY LIVE
                    </a>
                    <button 
                        onClick={() => setShowCaseStudy(true)}
                        className="flex items-center justify-center gap-2 border-2 border-transparent px-6 py-3 text-red-500 hover:text-white hover:border-red-600 transition-all cursor-pointer font-bold text-sm uppercase tracking-widest"
                    >
                        Read Case Study <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            {/* The Bauhaus Mobile App Visual: Skeleton Queen Card Game */}
            <div className="relative bg-gray-900 p-8 lg:p-16 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ 
                    backgroundImage: `radial-gradient(${COLORS.WHITE} 1px, transparent 1px)`, 
                    backgroundSize: '20px 20px' 
                    }}></div>

                {/* Phone Frame */}
                <div className="relative w-[300px] h-[600px] border-[12px] border-white rounded-[40px] bg-[#222] shadow-2xl overflow-hidden transform hover:rotate-2 transition-transform duration-500 group">
                    
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

                    {/* App Interface: Promo Video */}
                    <div className="h-full w-full bg-black relative z-10 overflow-hidden rounded-[25px]">
                        <video
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full object-cover"
                            src={promoVideo}
                            autoPlay
                            muted={isMuted}
                            loop
                            playsInline
                        />
                        {/* Mute/Unmute Toggle */}
                        <button
                            onClick={toggleMute}
                            className="absolute bottom-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors"
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                            {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
                        </button>
                    </div>
                </div>

                {/* Decorative Geometric Elements around phone */}
                <div className="absolute top-20 right-20 flex gap-2">
                    <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
                <div className="absolute bottom-20 left-10 w-32 h-32 border border-dashed border-gray-600 rounded-full animate-[spin_20s_linear_infinite]"></div>

            </div>
        </div>
      </div>

      {/* Case Study Full Screen Overlay */}
      <div className={`fixed inset-0 z-50 bg-white text-black overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${showCaseStudy ? 'translate-y-0' : 'translate-y-full'}`}>
         
         {/* Close Header */}
         <div className="sticky top-0 w-full flex justify-between items-center p-6 bg-white border-b-4 border-black z-50">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                <span className="font-bold tracking-widest text-sm">CASE STUDY: FILE_SQ_01</span>
            </div>
            <button 
                onClick={() => setShowCaseStudy(false)}
                className="group flex items-center gap-2 font-bold hover:text-red-600 transition-colors uppercase tracking-widest text-sm"
            >
                Close File <div className="bg-black text-white p-1 rounded-full group-hover:bg-red-600 transition-colors"><X size={16} /></div>
            </button>
         </div>

         {/* Case Study Content */}
         <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-24">
            
            {/* Header */}
            <header className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <h1 className="text-6xl md:text-8xl font-bold uppercase mb-8 leading-[0.8]">
                        Skeleton<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Queen</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed border-l-4 border-yellow-500 pl-6 text-gray-800">
                        {CONTENT.sideProjectMobile.caseStudy.hook}
                    </p>
                </div>
                <div className="lg:col-span-4 bg-gray-100 p-8 border-2 border-black font-mono text-sm h-fit">
                    <div className="mb-4">
                        <span className="block text-gray-500 text-xs mb-1 uppercase tracking-widest">Role</span>
                        <span className="font-bold">{CONTENT.sideProjectMobile.caseStudy.meta.role}</span>
                    </div>
                    <div className="mb-4">
                        <span className="block text-gray-500 text-xs mb-1 uppercase tracking-widest">Stack</span>
                        <span className="font-bold">{CONTENT.sideProjectMobile.caseStudy.meta.stack}</span>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-xs mb-1 uppercase tracking-widest">Status</span>
                        <span className="inline-block bg-green-500 text-white px-2 py-1 font-bold text-xs">{CONTENT.sideProjectMobile.caseStudy.meta.status}</span>
                    </div>
                </div>
            </header>

            {/* Section 1: The Problem */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 border-t-2 border-gray-200 pt-16">
                <div>
                     <span className="text-6xl font-bold text-gray-200 block mb-4">01</span>
                     <h2 className="text-3xl font-bold uppercase mb-2">{CONTENT.sideProjectMobile.caseStudy.sections[0].title}</h2>
                     <h3 className="text-lg text-red-600 font-bold mb-6 tracking-widest">{CONTENT.sideProjectMobile.caseStudy.sections[0].subtitle}</h3>
                     <p className="text-lg text-gray-700 leading-relaxed mb-8">
                         {CONTENT.sideProjectMobile.caseStudy.sections[0].content}
                     </p>
                     <ul className="space-y-4">
                        {CONTENT.sideProjectMobile.caseStudy.sections[0].keyPoints?.map((point, i) => {
                            const isOpportunity = point.toLowerCase().includes('opportunity');
                            return (
                                <li key={i} className="flex items-start gap-4 font-medium">
                                    {isOpportunity ? (
                                        <Zap className="text-blue-600 shrink-0 mt-1" size={20} />
                                    ) : (
                                        <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={20} />
                                    )}
                                    <span className={isOpportunity ? "text-blue-800 font-bold" : ""}>{point}</span>
                                </li>
                            );
                        })}
                     </ul>
                </div>
                
                {/* Visuals Column */}
                <div className="flex flex-col gap-6">
                    {/* Visual 1: Cognitive Overload (Mental) */}
                    <div className="bg-gray-100 p-8 border-4 border-black flex items-center justify-center relative overflow-hidden h-64 md:h-96">
                        <div className="grid grid-cols-3 gap-4 opacity-50">
                             {[...Array(9)].map((_, i) => (
                                 <div key={i} className="w-16 h-20 bg-white border-2 border-black flex items-center justify-center relative">
                                     <div className="w-8 h-1 bg-black absolute top-2 left-2"></div>
                                     {i === 4 ? <div className="absolute text-red-600 font-bold text-2xl animate-spin">?</div> : null}
                                 </div>
                             ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <div className="bg-white text-red-600 font-bold p-4 border-4 border-red-600 shadow-xl">
                                 COGNITIVE OVERLOAD
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: User Insight (Archetypes) */}
            <section className="mb-32">
                <div className="mb-12">
                    <span className="text-6xl font-bold text-gray-200 block mb-4">02</span>
                    <h2 className="text-3xl font-bold uppercase mb-2">{CONTENT.sideProjectMobile.caseStudy.sections[1].title}</h2>
                    <h3 className="text-lg text-blue-600 font-bold tracking-widest">{CONTENT.sideProjectMobile.caseStudy.sections[1].subtitle}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CONTENT.sideProjectMobile.caseStudy.sections[1].archetypes?.map((arch, i) => (
                        <div key={i} className="group border-4 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300">
                            <div className="mb-6 flex justify-between items-start">
                                {i === 0 ? <AlertTriangle size={32} className="text-yellow-500" /> :
                                 i === 1 ? <Cpu size={32} className="text-blue-500" /> :
                                 i === 2 ? <Zap size={32} className="text-red-500" /> :
                                 <Smartphone size={32} className="text-green-500" />}
                                <span className="text-4xl font-mono font-bold opacity-20">0{i+1}</span>
                            </div>
                            <h4 className="text-xl font-bold uppercase mb-2">{arch.name}</h4>
                            <div className="text-xs uppercase tracking-widest mb-4 opacity-70">Need: {arch.need}</div>
                            <p className="text-sm font-medium leading-tight border-t-2 border-current pt-4">
                                {arch.feature}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: System Architecture & Graphics */}
            <section className="mb-32 border-t-2 border-gray-200 pt-16">
                 <span className="text-6xl font-bold text-gray-200 block mb-4">03</span>
                 
                 {/* Top Part: Core Architecture */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                     <div>
                        <h2 className="text-3xl font-bold uppercase mb-2">{CONTENT.sideProjectMobile.caseStudy.sections[2].title}</h2>
                        <h3 className="text-lg text-blue-600 font-bold tracking-widest mb-6">{CONTENT.sideProjectMobile.caseStudy.sections[2].subtitle}</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            {CONTENT.sideProjectMobile.caseStudy.sections[2].content}
                        </p>
                     </div>
                     
                     {/* Graphic 1: Reusable Components */}
                     <div className="bg-[#1A1A1A] p-8 border-4 border-blue-600 flex flex-col items-center justify-center relative overflow-hidden h-[300px] lg:h-auto">
                         <div className="relative z-10 w-full flex flex-col items-center">
                            {/* Master Component */}
                            <div className="border-2 border-white border-dashed p-2 mb-4 relative">
                                <span className="absolute -top-3 left-0 bg-blue-600 text-white text-[8px] px-2 font-mono tracking-widest">MASTER: CARD</span>
                                <div className="w-16 h-20 bg-[#222] border border-gray-600 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full border border-gray-500 opacity-50"></div>
                                </div>
                            </div>
                            
                            {/* Connecting Lines */}
                            <div className="flex justify-center gap-16 mb-2">
                                <div className="w-px h-8 bg-gray-500 transform -rotate-[20deg] origin-top"></div>
                                <div className="w-px h-8 bg-gray-500 transform rotate-[20deg] origin-top"></div>
                            </div>

                            {/* Instances */}
                            <div className="flex gap-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-20 bg-white border-2 border-black flex items-center justify-center relative shadow-[4px_4px_0px_0px_#1D4E89]">
                                        <div className="absolute top-1 left-1 text-[6px] text-black font-mono">INSTANCE_01</div>
                                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                     <div className="w-16 h-20 bg-white border-2 border-black flex items-center justify-center relative shadow-[4px_4px_0px_0px_#F4B400]">
                                         <div className="absolute top-1 left-1 text-[6px] text-black font-mono">INSTANCE_02</div>
                                         <div className="w-6 h-6 bg-yellow-500 rotate-45"></div>
                                     </div>
                                </div>
                            </div>
                         </div>
                         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
                         <div className="absolute bottom-2 right-2 text-[10px] text-gray-500 font-mono">FIG 3.1: ATOMIC COMPONENT ARCHITECTURE</div>
                     </div>
                 </div>

                 {/* Bottom Part: Functional Animation Layer (Redesigned) */}
                 <div>
                    <h4 className="font-bold text-black uppercase tracking-widest mb-6 flex items-center gap-2 border-b-2 border-gray-100 pb-2">
                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                        Animation Examples
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Animation A: Notification */}
                        <div className="flex flex-col gap-3 group">
                            <div className="aspect-[4/3] bg-white border-2 border-black shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden">
                                <video src={notificationVideo} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                            </div>
                            <div className="border-l-2 border-red-600 pl-2">
                                <p className="text-[8px] font-bold text-red-900 uppercase mb-1">Rationale</p>
                                <p className="text-[9px] leading-tight text-red-800">
                                    Splash screens elevate key moments, enhancing user connection and increasing engagement for better replayability.
                                </p>
                            </div>
                        </div>

                        {/* Animation B: Confetti */}
                        <div className="flex flex-col gap-3 group">
                            <div className="aspect-[4/3] bg-white border-2 border-black shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden">
                                <video src={confettiVideo} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                            </div>
                            <div className="border-l-2 border-red-600 pl-2">
                                <p className="text-[8px] font-bold text-red-900 uppercase mb-1">Rationale</p>
                                <p className="text-[9px] leading-tight text-red-800">
                                    Text scaling and celebratory animations draw attention to important information and delight users.
                                </p>
                            </div>
                        </div>

                        {/* Animation C: Dynamic Scoreboard */}
                        <div className="flex flex-col gap-3 group">
                            <div className="aspect-[4/3] bg-white border-2 border-black shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden">
                                <video src={listSortingVideo} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                            </div>
                            <div className="border-l-2 border-red-600 pl-2">
                                <p className="text-[8px] font-bold text-red-900 uppercase mb-1">Rationale</p>
                                <p className="text-[9px] leading-tight text-red-800">
                                    Visual display of scoring changes, keeping users informed without cognitive load or admin work of calculating changes.
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Section 4: Technical Execution */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
                 <div>
                    <span className="text-6xl font-bold text-gray-200 block mb-4">04</span>
                    <h2 className="text-3xl font-bold uppercase mb-2">{CONTENT.sideProjectMobile.caseStudy.sections[3].title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {CONTENT.sideProjectMobile.caseStudy.sections[3].content}
                    </p>
                    <div className="p-6 bg-yellow-50 border-2 border-yellow-500 flex items-start gap-4">
                        <Activity className="text-yellow-600 shrink-0" />
                        <div>
                            <h4 className="font-bold text-yellow-800 uppercase text-sm mb-1">Cold Start Solution</h4>
                            <p className="text-sm text-yellow-900">Implemented pre-emptive pings to 'wake' the serverless function before the user completes the Lobby form.</p>
                        </div>
                    </div>
                 </div>
                 
                 {/* Architecture & Flow Diagrams */}
                 <div className="bg-gray-100 p-8 border-4 border-black">
                      <h4 className="font-bold text-black uppercase tracking-widest mb-6 border-b-2 border-black pb-2 inline-block">Architecture & Flows</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                              { label: "Information Architecture", src: sitemap },
                              { label: "User Flow: Create Game", src: flowCreateGame },
                              { label: "User Flow: Join Game", src: flowJoinGame },
                              { label: "User Flow: Bidding", src: flowBidding },
                              { label: "User Flow: Playing", src: flowPlaying },
                              { label: "User Flow: Scoring", src: flowScoring }
                          ].map((flow, index) => (
                              <div key={index} className="bg-white border-2 border-black flex flex-col relative group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                                  <img
                                      src={flow.src}
                                      alt={flow.label}
                                      className="w-full h-auto object-cover"
                                  />
                                  <span className="text-[10px] font-bold text-black text-center uppercase leading-tight py-2 bg-white border-t border-black">{flow.label}</span>
                              </div>
                          ))}
                      </div>
                 </div>
            </section>

             {/* Section 5: Iteration (Before/After Abstract) */}
             <section className="mb-32">
                <div className="mb-12">
                     <span className="text-6xl font-bold text-gray-200 block mb-4">05</span>
                     <h2 className="text-3xl font-bold uppercase mb-2">{CONTENT.sideProjectMobile.caseStudy.sections[4].title}</h2>
                     <h3 className="text-lg text-blue-600 font-bold tracking-widest mb-6">{CONTENT.sideProjectMobile.caseStudy.sections[4].subtitle}</h3>
                     <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
                         {CONTENT.sideProjectMobile.caseStudy.sections[4].content}
                     </p>
                </div>
                
                {/* Visual 1: Disorientation vs Anchoring */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Problem: Disorientation */}
                    <div className="border-4 border-gray-200 p-8 bg-white flex flex-col">
                        <h4 className="text-red-600 font-bold uppercase tracking-widest mb-6">BEFORE: DISORIENTATION</h4>
                        <div className="grid grid-cols-2 gap-4 mb-auto">
                             {/* Original Lobby */}
                             <div className="flex flex-col gap-2">
                                <div className="aspect-[9/16] bg-gray-100 border-2 border-gray-300 overflow-hidden">
                                    <img src={lobbyOld} alt="Original Lobby" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-[9px] font-mono text-gray-400 leading-tight">Fig 5.1: Homogeneous avatars caused confusion.</p>
                             </div>
                             {/* Original Gameplay */}
                             <div className="flex flex-col gap-2">
                                <div className="aspect-[9/16] bg-gray-100 border-2 border-gray-300 overflow-hidden">
                                    <img src={gameplayOld} alt="Original Gameplay" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-[9px] font-mono text-gray-400 leading-tight">Fig 5.2: Homogeneous player information sections caused confusion.</p>
                             </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">All players looked identical. Users couldn't find "themselves" in the lobby or on the board quickly.</p>
                    </div>

                    {/* Fix: Anchoring */}
                    <div className="border-4 border-black p-8 bg-blue-50 flex flex-col">
                         <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-6">AFTER: VISUAL ANCHORING</h4>
                         <div className="grid grid-cols-3 gap-3 mb-6">
                             {/* New Lobby */}
                             <div className="flex flex-col gap-3 group">
                                 <div className="aspect-[9/16] bg-white border-2 border-black overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                     <img src={lobbyNew} alt="New Lobby" className="w-full h-full object-cover" />
                                 </div>
                                 <div className="border-l-2 border-blue-200 pl-2">
                                    <p className="text-[8px] font-bold text-blue-900 uppercase mb-1">Rationale</p>
                                    <p className="text-[9px] leading-tight text-blue-800">
                                        Improved self-identification by limiting avatar visibility to the active user, eliminating visual redundancy.
                                    </p>
                                 </div>
                             </div>
                             {/* New Gameplay */}
                             <div className="flex flex-col gap-3 group">
                                 <div className="aspect-[9/16] bg-white border-2 border-black overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                     <img src={gameplayNew} alt="New Gameplay" className="w-full h-full object-cover" />
                                 </div>
                                 <div className="border-l-2 border-blue-200 pl-2">
                                    <p className="text-[8px] font-bold text-blue-900 uppercase mb-1">Rationale</p>
                                    <p className="text-[9px] leading-tight text-blue-800">
                                        Anchored the user's hand to the bottom of the screen to establish a clear difference between their information and opponents.
                                    </p>
                                 </div>
                             </div>
                             {/* Focus Interaction GIF */}
                             <div className="flex flex-col gap-3 group">
                                 <div className="aspect-[9/16] bg-black border-2 border-black overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                     <img src={focusInteractionGif} alt="Focus Interaction" className="w-full h-full object-cover" />
                                 </div>
                                 <div className="border-l-2 border-blue-200 pl-2">
                                    <p className="text-[8px] font-bold text-blue-900 uppercase mb-1">Rationale</p>
                                    <p className="text-[9px] leading-tight text-blue-800">
                                        Used background dimming to guide the user's eye toward their designated card slot, reinforcing the bottom-anchored player orientation.
                                    </p>
                                 </div>
                             </div>
                         </div>
                         <p className="text-sm text-gray-800 font-medium mt-auto border-t border-blue-200 pt-4">Removing avatars for opponents in the lobby and a fixed "South" position for the user eliminated spatial confusion.</p>
                    </div>
                </div>

                {/* Visual 2: Hidden Rules vs Contextual Banners */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Before: Hidden Rules */}
                    <div className="border-4 border-gray-200 p-8 bg-white flex flex-col">
                        <h4 className="text-red-600 font-bold uppercase tracking-widest mb-6">BEFORE: WEAK RULE COMPREHENSION</h4>
                        <div className="grid grid-cols-2 gap-4 mb-auto">
                             {/* Original Bidding */}
                             <div className="flex flex-col gap-2">
                                <div className="aspect-[9/16] bg-gray-100 border-2 border-gray-300 overflow-hidden">
                                    <img src={biddingOld} alt="Original Bidding" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-[9px] font-mono text-gray-400 leading-tight">Fig 5.3: No rule or card references available in-context during bidding phase, resulting in uninformed and unconfident decisions.</p>
                             </div>
                             {/* Original Gameplay */}
                             <div className="flex flex-col gap-2">
                                <div className="aspect-[9/16] bg-gray-100 border-2 border-gray-300 overflow-hidden">
                                    <img src={rulesOld} alt="Original Rules" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-[9px] font-mono text-gray-400 leading-tight">Fig 5.4: Rules presented in multiple pages within an overlay, requiring players to hunt for information.</p>
                             </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">Contextual information to make a decision wasn't presented proactively. Players had to search for rules or make assumptions.</p>
                    </div>

                    {/* After: Just-in-Time Banners */}
                    <div className="border-4 border-black p-8 bg-yellow-50 flex flex-col">
                         <h4 className="text-yellow-600 font-bold uppercase tracking-widest mb-6">AFTER: CONTEXTUAL INFORMATION ASSISTS PLAYERS</h4>
                         <div className="grid grid-cols-3 gap-3 mb-6">
                             
                             {/* 1. Contextual Banner Crop (Detail View) */}
                             <div className="flex flex-col gap-3 group">
                                 <div className="aspect-[9/16] bg-white border-2 border-black overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                     <img src={bannerCrop} alt="Banner Crop" className="w-full h-full object-cover" />
                                 </div>
                                 <div className="border-l-2 border-yellow-600 pl-2">
                                    <p className="text-[8px] font-bold text-yellow-900 uppercase mb-1">Rationale</p>
                                    <p className="text-[9px] leading-tight text-yellow-800">
                                        Added a dynamic info banner, surfacing real-time game states and opponent moves so players could make informed strategic decisions without leaving the main interface.
                                    </p>
                                 </div>
                             </div>

                             {/* 2. New Bidding GIF (Phone View) */}
                             <div className="flex flex-col gap-3 group">
                                 <div className="aspect-[9/16] bg-white border-2 border-black overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                     <img src={newBiddingGif} alt="New Bidding" className="w-full h-full object-cover" />
                                 </div>
                                 <div className="border-l-2 border-yellow-600 pl-2">
                                    <p className="text-[8px] font-bold text-yellow-900 uppercase mb-1">Rationale</p>
                                    <p className="text-[9px] leading-tight text-yellow-800">
                                        Added menu overlay on the bidding screen providing instant access to card reference guides during an important game state.
                                    </p>
                                 </div>
                             </div>

                             {/* 3. Play Indicator GIF (Phone View) */}
                             <div className="flex flex-col gap-3 group">
                                 <div className="aspect-[9/16] bg-white border-2 border-black overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                     <img src={playIndicatorGif} alt="Play Indicator" className="w-full h-full object-cover" />
                                 </div>
                                 <div className="border-l-2 border-yellow-600 pl-2">
                                    <p className="text-[8px] font-bold text-yellow-900 uppercase mb-1">Rationale</p>
                                    <p className="text-[9px] leading-tight text-yellow-800">
                                        Motion design and just in time presentation reinforce important information for making decisions or ensuring critical game alerts capture player's attention.
                                    </p>
                                 </div>
                             </div>
                         </div>
                         <p className="text-sm text-gray-800 font-medium mt-auto border-t border-yellow-600 pt-4">Guidance appears instantly and is easily accessible during the relevant phase, enabling players to make confident decisions.</p>
                    </div>
                </div>
             </section>

             {/* Conclusion */}
             <section className="bg-black text-white p-12 lg:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold uppercase mb-12">Key Takeaways</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CONTENT.sideProjectMobile.caseStudy.takeaways.map((takeaway, i) => (
                            <div key={i} className="border-t-4 border-red-600 pt-6">
                                <span className="text-4xl font-bold opacity-30 mb-2 block">0{i+1}</span>
                                <p className="text-xl font-bold leading-tight">{takeaway}</p>
                            </div>
                        ))}
                    </div>
                </div>
             </section>

         </div>
      </div>
    </section>
  );
};