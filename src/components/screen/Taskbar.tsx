// components/Taskbar.tsx
import React from 'react';
import Icon from '../extras/Icon';
import allApplications from '../extras/flattenedWindowConfig';

interface TaskbarProps {
  onOpenWindow: (windowName: string) => void;
  onMinimizeWindow: (windowName: string) => void;
  windowNames: string[];
  openWindows: { [key: string]: { zIndex: number, minimized: boolean } };
}

const Taskbar: React.FC<TaskbarProps> = ({ onOpenWindow, onMinimizeWindow, windowNames, openWindows }) => {
  const handleClick = (windowName: string) => {
    const windowState = openWindows[windowName];

    if (!windowState) {
      // Open the window if it's not open
      onOpenWindow(windowName);
    } else if (windowState.minimized) {
      // Restore the window if it's minimized
      onOpenWindow(windowName);
    } else {
      // Minimize the window if it's open
      onMinimizeWindow(windowName);
    }
  };

  return (
    <div className="w-full h-11 bg-gray-800 text-white flex items-center justify-center px-4 py-4">
      <div className="flex items-center space-x-4">
        {windowNames.map((windowName) => {
          const { title } = allApplications[windowName] || {};
          const isActive = !!openWindows[windowName];
          const isMinimized = !!openWindows[windowName]?.minimized;

          return (
            <Icon
              key={windowName}
              label={title || windowName}
              onClick={() => handleClick(windowName)}
              isActive={isActive}
              isMinimized={isMinimized}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Taskbar;
