import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';

export const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`bg-white transition-all duration-150 ease-out flex items-center justify-center`}
        style={{
          width: isHovering ? '48px' : '12px',
          height: isHovering ? '48px' : '12px',
          borderRadius: isHovering ? '0%' : '50%', // Circle to square on hover (Geometric transition)
        }}
      >
        {isHovering && (
          <div className="w-[2px] h-full bg-black animate-pulse" />
        )}
      </div>
    </div>
  );
};