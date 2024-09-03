// components/Folder.tsx
import React from 'react';
// import allApplications from '../extras/flattenedWindowConfig'; // Import the flattened config
import windowConfig from '../extras/windowConfig';
import Icon from '../extras/Icon';
import allApplications from '../extras/flattenedWindowConfig';

interface FolderProps {
  apps: string[]; // List of application names to display
  onOpenWindow: (windowName: string) => void; // Function to open the window
  folderName: string; // The name of the folder to get its config
}

const Folder: React.FC<FolderProps> = ({ apps = [], onOpenWindow, folderName }) => {
  // Validate if the folderName exists and is a folder
  const folderConfig = windowConfig[folderName];

  console.log("FolderConfig:", folderConfig)
  console.log("Folder Name: ", folderName)
  console.log("Folder apps[]: ", apps)

  if (!folderConfig) {
    console.error(`Folder not found: ${folderName}`);
    return <div className="bg-red-500 text-white p-4 rounded-md w-60">Folder not found: {folderName}</div>;
  }

  if (!folderConfig.isFolder) {
    console.error(`Invalid folder type: ${folderName}`);
    return <div className="bg-red-500 text-white p-4 rounded-md w-60">Invalid folder type: {folderName}</div>;
  }

  // Ensure folderApps exists
  const folderApps = folderConfig?.folderApps || {};

  return (
    <div className="text-white p-4  shadow-lg"> 
      <div className="flex flex-wrap items-center justify-normal gap-2">
        {apps.length > 0 ? (
          apps.map((appName) => {
            const appConfig = folderApps[appName];
            return (
              <div className='w-32 bg-gray-800 rounded-lg'>
                <Icon
                  key={appName}
                  label={appConfig?.title || appName} // Use title from allApplications or fallback to appName
                  onClick={() => onOpenWindow(appName)} // Open specific app when clicked
                  isActive={false} // Update based on actual open state if needed
                />
              </div>
            );
          })
        ) : (
          <p>No applications available</p>
        )}
      </div>
    </div>
  );
};

export default Folder;
