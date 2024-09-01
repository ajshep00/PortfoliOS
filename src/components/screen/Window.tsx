// components/Window.tsx
import React, { ReactNode, useState } from 'react';
import Draggable from 'react-draggable';
import Image from 'next/image'

interface WindowProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  zIndex: number;
  onClick: () => void;
  minimized: boolean;
}

const Window: React.FC<WindowProps> = ({ title, children, onClose, onMinimize, zIndex, onClick, minimized }) => {
  // const paperTexture = '/files/artwork/textures/paper_texture.png'
  const minimize_icon = '/files/artwork/icons/minimize_icon.png'
  const close_icon = '/files/artwork/icons/close_icon.png'

  const getBounds = () => ({
    top: 0,
    left: 0,
    right: window.innerWidth - 600, // Adjust the right boundary according to the window width
    bottom: window.innerHeight - 150, // Adjust the bottom boundary according to the window height
  });

  return (
    <Draggable
      defaultPosition={{ x: 50, y: 50 }} // All windows start in the same place
      onStart={onClick} // Bring window to front when dragged
      handle='.draggable-header'
      bounds={getBounds()} // Prevent dragging out of the parent bounds
    >
      <div
        className={`absolute w-[600px] bg-gray-800 bg-paper-texture-lg bg-cover rounded-lg shadow-lg p-4 ${minimized ? 'hidden' : 'block'} `} // Hide the window when minimized
        style={{ zIndex }}
        onClick={onClick} // Bring to front when clicked
      >
        <header className="bg-gray-700 p-2 rounded-lg flex items-center justify-between cursor-move draggable-header">
          <div className="text-lg font-semibold text-white">{title}</div>
          <div className="flex space-x-2">
          <button
              className="w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                onMinimize(); // Call the minimize function
              }}
            >
              <Image 
                src={minimize_icon}
                alt="minimize icon"
                width={9}
                height={8}
              />
            </button>
            <button
              className="w-3 h-3 bg-rose rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from propagating to the window
                onClose(); // Call the close function
              }}
            >
              <Image 
                src={close_icon}
                alt="close icon"
                width={7.5}
                height={7.5}
              />
            </button>
          </div>
        </header>
        <div className='w-full h-full'>
          <main className="px-2 py-4">{children}</main>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
