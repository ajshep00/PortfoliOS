// components/Window.tsx
import React, { ReactNode } from 'react';
import Draggable from 'react-draggable';
import { BsDashLg, BsX } from 'react-icons/bs';

interface WindowProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  zIndex: number;
  onClick: () => void;
  minimized: boolean;
}

const Window: React.FC<WindowProps> = ({
  title,
  children,
  onClose,
  onMinimize,
  zIndex,
  onClick,
  minimized
}) => {
  const getBounds = () => ({
    top: 0,
    left: 0,
    right: window.innerWidth - 600,
    bottom: window.innerHeight - 150,
  });

  return (
    <Draggable
      defaultPosition={{ x: 50, y: 50 }}
      onStart={onClick}
      handle='.draggable-header'
      bounds={getBounds()}
    >
      <div
        className={`absolute w-[600px] bg-gray-800 bg-paper-texture-lg bg-cover rounded-lg shadow-lg ${minimized ? 'hidden' : 'block'}`}
        style={{ zIndex }}
        onClick={onClick}
      >
        <header className="bg-gray-700 p-2 rounded-lg flex items-center justify-between cursor-move draggable-header">
          <div className="text-lg font-semibold text-white">{title}</div>
          <div className="flex space-x-2">
            <button
              className="w-3 h-3 bg-yellow-400 rounded-full flex justify-center items-center"
              onClick={(e) => {
                e.stopPropagation();
                onMinimize(); // Minimize the window
              }}
            >
              <BsDashLg className='w-4/6 h-4/6 stroke-2' />
            </button>
            <button
              className="w-3 h-3 bg-rose rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                onClose(); // Close the window
              }}
            >
              <BsX className='w-full h-full stroke-1' />
            </button>
          </div>
        </header>
        <div className='w-full h-full p-4'>
          <main>{children}</main>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
