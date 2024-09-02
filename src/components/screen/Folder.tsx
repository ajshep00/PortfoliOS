// components/Folder.tsx
import React from 'react';
import windowConfig from '../extras/windowConfig';

interface FolderProps {
  apps: string[]; // List of application names to display
  onOpenWindow: (windowName: string) => void; // Function to open the window
  folderName: string; // The name of the folder to get its config
}

const Folder: React.FC<FolderProps> = ({ apps, onOpenWindow, folderName }) => {
  const folderConfig = windowConfig[folderName];
  const folderApps = folderConfig?.folderApps || {};

  const handleClick = (appName: string) => {
    onOpenWindow(appName);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-lg w-60">
      <ul>
        {apps.map((appName) => {
          const appConfig = folderApps[appName]; // Access the app from folderApps
          return (
            <li
              key={appName}
              className="cursor-pointer hover:bg-gray-700 p-2 rounded-md"
              onClick={() => handleClick(appName)}
            >
              {appConfig?.title || appName} {/* Use title from folderApps or fallback to appName */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Folder;
