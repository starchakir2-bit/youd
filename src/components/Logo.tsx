import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center">
        <div 
          className="w-6 h-3 rounded-t-full bg-orange-gradient rotate-[-15deg] mr-2"
          style={{ background: 'var(--bg-orange-gradient)' }}
        ></div>
        <span className="text-2xl font-extrabold tracking-tighter text-text-dark">
          YOUD<span className="bg-orange-gradient bg-clip-text text-transparent" style={{ backgroundImage: 'var(--bg-orange-gradient)' }}>.IO</span>
        </span>
      </div>
    </div>
  );
}
