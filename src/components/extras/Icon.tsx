// components/Icon.tsx
import React from 'react';

interface IconProps {
  label: string;
  onClick: () => void;
  isActive: boolean; // Indicates if the icon is active (window is open)
  borderColor?: string;
  hoverColor?: string;
  active?: string; // Background color when active
  isMinimized?: boolean; // New prop for minimized state
}

const Icon: React.FC<IconProps> = ({
  label,
  onClick,
  isActive,
  borderColor = 'border-rose',
  hoverColor = 'hover:bg-rose',
  active = 'border-b-2 bg-rose/20', // Default color when active
  isMinimized
}) => {
  const minimizedColor = 'border-b-2'; // Color when minimized

  return (
    <div
      className={`flex flex-col items-center cursor-pointer rounded-lg ${borderColor} p-1.5 ${isActive ? (isMinimized ? minimizedColor : active) : hoverColor} transition ease-in-out duration-300`}
      onClick={onClick}
    >
      <span className="text-xs font-bold">{label}</span>
    </div>
  );
};

export default Icon;
