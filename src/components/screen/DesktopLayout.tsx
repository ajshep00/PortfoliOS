import React, { useState, useEffect } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';
import windowConfig from '../extras/windowConfig';

const DesktopLayout: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<{ [key: string]: { zIndex: number, minimized: boolean } }>({});
  const [nextZIndex, setNextZIndex] = useState<number>(1);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (!initialized) {
      const initialOpenWindows = Object.entries(windowConfig).reduce((acc, [name, config]) => {
        if (config.defaultOpen && !config.isFolder) { // Open only non-folder windows by default
          acc[name] = { zIndex: nextZIndex, minimized: false };
          setNextZIndex(prev => prev + 1);
        }
        return acc;
      }, {} as { [key: string]: { zIndex: number, minimized: boolean } });

      setOpenWindows(initialOpenWindows);
      setInitialized(true);
    }
  }, [initialized, nextZIndex]);

  const openWindow = (windowName: string) => {
    // Check if windowName is directly in the main windowConfig
    const config = windowConfig[windowName];
  
    if (config) {
      if (config.isFolder) {
        // Handle opening a folder
        setOpenWindows(prev => ({
          ...prev,
          [windowName]: {
            zIndex: nextZIndex,
            minimized: false
          }
        }));
        setNextZIndex(prev => prev + 1);
      } else {
        // Handle opening an individual application
        if (!openWindows[windowName]) {
          setOpenWindows(prev => ({
            ...prev,
            [windowName]: {
              zIndex: nextZIndex,
              minimized: false
            }
          }));
          setNextZIndex(prev => prev + 1);
        } else if (openWindows[windowName]?.minimized) {
          setOpenWindows(prev => ({
            ...prev,
            [windowName]: {
              ...prev[windowName],
              minimized: false,
              zIndex: nextZIndex
            }
          }));
          setNextZIndex(prev => prev + 1);
        }
      }
    } else {
      // Search for nested applications inside folders
      const folderContainingApp = Object.values(windowConfig).find(
        (entry) => entry.folderApps && entry.folderApps[windowName]
      );
  
      if (folderContainingApp && folderContainingApp.folderApps) {
        const appConfig = folderContainingApp.folderApps[windowName];
        if (!openWindows[windowName]) {
          setOpenWindows(prev => ({
            ...prev,
            [windowName]: {
              zIndex: nextZIndex,
              minimized: false
            }
          }));
          setNextZIndex(prev => prev + 1);
        } else if (openWindows[windowName]?.minimized) {
          setOpenWindows(prev => ({
            ...prev,
            [windowName]: {
              ...prev[windowName],
              minimized: false,
              zIndex: nextZIndex
            }
          }));
          setNextZIndex(prev => prev + 1);
        }
      }
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
    // Check if the windowName is a folder
    const folderConfig = windowConfig[windowName];
  
    if (folderConfig?.isFolder) {
      return (
        <folderConfig.component
          apps={Object.keys(folderConfig.folderApps || {})}
          onOpenWindow={openWindow}
          folderName={windowName}
        />
      );
    }
  
    // Check if the windowName is a nested application inside a folder
    const folderContainingApp = Object.values(windowConfig).find(
      (entry) => entry.folderApps && entry.folderApps[windowName]
    );
  
    if (folderContainingApp && folderContainingApp.folderApps) {
      const appConfig = folderContainingApp.folderApps[windowName];
      return appConfig ? <appConfig.component /> : <p>Content for {windowName}</p>;
    }
  
    // Default case for individual applications
    const appConfig = windowConfig[windowName];
    return appConfig?.component ? <appConfig.component /> : <p>Content for {windowName}</p>;
  };
  
  
  

  return (
    <div className="relative bg-gray-900 overflow-hidden h-screen w-screen">
      <div>
        {Object.entries(openWindows).map(([name, { zIndex, minimized }]) => (
          <Window
            key={name}
            title={windowConfig[name]?.title || name}
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
            onMinimizeWindow={minimizeWindow}
            windowNames={Object.keys(windowConfig)}
            openWindows={openWindows}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
