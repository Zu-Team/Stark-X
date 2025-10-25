'use client';

import { ReactNode } from 'react';

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export default function StyledButton({ children, onClick, className = '', icon }: StyledButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-8 py-4 text-lg font-bold text-white
        bg-gradient-to-b from-gray-800 to-gray-700
        rounded-full cursor-pointer
        shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)]
        transition-all duration-200 ease-in-out
        inline-flex items-center justify-center
        border border-gray-600
        hover:shadow-[0_1px_2px_rgba(0,0,0,1),0_5px_10px_rgba(0,0,0,0.4)]
        active:translate-y-0.5
        before:absolute before:-top-0.5 before:-right-0.5 before:-bottom-0.5 before:-left-0.5
        before:bg-gradient-to-b before:from-gray-600 before:to-black
        before:-z-10 before:rounded-full before:transition-all before:duration-200
        before:opacity-100
        ${className}
      `}
    >
      {children}
      {icon && (
        <div className="relative flex items-center justify-center w-10 h-10 ml-2.5 bg-gradient-to-b from-gray-800 to-gray-700 rounded-full shadow-[0_0_1px_rgba(0,0,0,1)] border border-gray-600 transition-all duration-200 before:absolute before:-top-0.5 before:-right-0.5 before:-bottom-0.5 before:-left-0.5 before:bg-gradient-to-b before:from-gray-600 before:to-black before:-z-10 before:rounded-full before:transition-all before:duration-200 before:opacity-100">
          <div className="icon transition-all duration-400 ease-in-out hover:rotate-[-35deg] hover:drop-shadow-[0_10px_20px_rgba(50,50,50,1),0_0_20px_rgba(2,2,2,1)] drop-shadow-[0_10px_20px_rgba(26,25,25,0.9),0_0_4px_rgba(0,0,0,1)]">
            {icon}
          </div>
        </div>
      )}
    </button>
  );
}
