// components/DesktopLayout.tsx
import React, { useState, useEffect } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';
import windowConfig from '../extras/windowConfig';

const DesktopLayout: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<{ [key: string]: { zIndex: number, minimized: boolean } }>({});
  const [nextZIndex, setNextZIndex] = useState<number>(1);
  const [initialized, setInitialized] = useState<boolean>(false); // State to track initialization

  // Effect to initialize default open windows
  useEffect(() => {
    if (!initialized) {
      const initialOpenWindows = Object.entries(windowConfig).reduce((acc, [name, config]) => {
        if (config.defaultOpen) {
          acc[name] = { zIndex: nextZIndex, minimized: false };
          setNextZIndex(prev => prev + 1);
        }
        return acc;
      }, {} as { [key: string]: { zIndex: number, minimized: boolean } });

      setOpenWindows(initialOpenWindows);
      setInitialized(true); // Mark initialization as complete
    }
  }, [initialized, nextZIndex]);

  const openWindow = (windowName: string) => {
    if (!openWindows[windowName]) {
      // Open a new window
      setOpenWindows(prev => ({
        ...prev,
        [windowName]: {
          zIndex: nextZIndex,
          minimized: false
        }
      }));
      setNextZIndex(prev => prev + 1);
    } else if (openWindows[windowName]?.minimized) {
      // Restore a minimized window
      setOpenWindows(prev => ({
        ...prev,
        [windowName]: {
          ...prev[windowName],
          minimized: false,
          zIndex: nextZIndex // Bring to front
        }
      }));
      setNextZIndex(prev => prev + 1);
    }
  };

  const closeWindow = (windowName: string) => {
    setOpenWindows(prev => {
      const updated = { ...prev };
      delete updated[windowName];
      return updated;
    });
  };

  const minimizeWindow = (windowName: string) => {
    setOpenWindows(prev => ({
      ...prev,
      [windowName]: {
        ...prev[windowName],
        minimized: true
      }
    }));
  };

  const bringToFront = (windowName: string) => {
    setOpenWindows(prev => {
      const updated = { ...prev };
      const zIndex = nextZIndex;
      updated[windowName] = { ...updated[windowName], zIndex };
      return updated;
    });
    setNextZIndex(prev => prev + 1);
  };

  const renderWindowContent = (windowName: string) => {
    const Component = windowConfig[windowName]?.component;
    return Component ? <Component /> : <p>Content for {windowName}</p>;
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden h-screen w-screen">
      <div>
        {Object.entries(openWindows).map(([name, { zIndex, minimized }]) => (
          <Window
            key={name}
            title={name}
            onClose={() => closeWindow(name)}
            onMinimize={() => minimizeWindow(name)}
            zIndex={zIndex}
            onClick={() => bringToFront(name)}
            minimized={minimized}
          >
            {renderWindowContent(name)}
          </Window>
        ))}
        <div className='absolute bottom-0 w-full z-50'>
          <Taskbar 
            onOpenWindow={openWindow} 
            onMinimizeWindow={minimizeWindow} // Pass minimize handler
            windowNames={Object.keys(windowConfig)} 
            openWindows={openWindows} // Pass open windows state
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
