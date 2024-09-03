// components/Folder.tsx
import React from 'react';
import windowConfig from '../extras/windowConfig';
import Icon from '../extras/Icon';

interface FolderProps {
  apps: string[]; // List of application names to display
  onOpenWindow: (windowName: string) => void; // Function to open the window
  folderName: string; // The name of the folder to get its config
}

const Folder: React.FC<FolderProps> = ({ apps, onOpenWindow, folderName }) => {
  const folderConfig = windowConfig[folderName];
  const folderApps = folderConfig?.folderApps || {};

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-lg w-60">
      <div className="flex flex-col items-center space-y-2">
        {apps.map((appName) => {
          const appConfig = folderApps[appName];
          return (
            <Icon
              key={appName}
              label={appConfig?.title || appName} // Use title from folderApps or fallback to appName
              onClick={() => onOpenWindow(appName)} // Open specific app when clicked
              isActive={false} // Update based on actual open state if needed
              borderColor="border-blue-500" // You can customize this as needed
              hoverColor="hover:bg-blue-600" // Customize hover color as needed
            />
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
