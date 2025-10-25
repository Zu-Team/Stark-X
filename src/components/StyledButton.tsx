'use client';

import { ReactNode } from 'react';

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function StyledButton({ children, onClick, className = '' }: StyledButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        border-0 rounded-[20px] text-white px-7 py-4
        bg-[#645bff] flex transition-all duration-200
        items-center gap-2.5 font-bold
        hover:bg-[#111] hover:text-white
        group
        ${className}
      `}
    >
      {children}
      <div className="flex justify-center items-center">
        <div className="mt-0.5 w-2.5 bg-[#645bff] h-0.5 relative transition-all duration-200 group-hover:bg-white">
          <div className="absolute top-[-3px] right-[3px] w-0 h-0 border-solid border-white border-r-[2px] border-b-[2px] transition-all duration-200 transform rotate-[-45deg] group-hover:right-0"></div>
        </div>
      </div>
    </button>
  );
}
