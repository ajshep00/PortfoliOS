// extras/flattenedWindowConfig.ts
import windowConfig from './windowConfig';

// Flatten the configuration entries
const flattenWindowConfig = (config: any) => {
  const result: { [key: string]: any } = {};

  const traverse = (entry: any, key: string) => {
    if (!entry) return;

    // Add entry to result using its original key
    result[key] = {
      ...entry,
      key // Preserve the original key
    };

    // Traverse nested folderApps if available
    if (entry.folderApps) {
      Object.entries(entry.folderApps).forEach(([nestedKey, nestedEntry]) => {
        traverse(nestedEntry, nestedKey);
      });
    }
  };

  // Traverse the root entries
  Object.entries(config).forEach(([key, entry]) => {
    traverse(entry, key);
  });

  return result;
};

const allApplications = flattenWindowConfig(windowConfig);

export default allApplications;
