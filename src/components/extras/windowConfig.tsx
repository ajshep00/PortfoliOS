// extras/windowConfig.tsx
import WelcomeApp from '../application/welcome_app';
import ResumeApp from '../application/resume_app';
import CreditsApp from '../application/credits_app';

import EducationApp from '../application/about_apps/education_app';
import ExperienceApp from '../application/about_apps/experience_app';

import Folder from '../screen/Folder';

import TestProject from '../application/project_apps/testProject';
import SecondTestProject from '../application/project_apps/testProject2';

interface WindowConfigEntry {
  component: React.FC<any>; // Allow any props for components
  title: string;
  defaultOpen?: boolean;
  isFolder?: boolean; // Indicates if this entry is a folder
  folderApps?: { [key: string]: WindowConfigEntry }; // Contains apps for the folder
}

interface WindowConfig {
  [key: string]: WindowConfigEntry;
}

const windowConfig: WindowConfig = {
  Welcome: {
    component: WelcomeApp,
    title: 'Welcome',
    defaultOpen: true,
    isFolder: false
  },
  Resume: {
    component: ResumeApp,
    title: 'Resume',
    defaultOpen: false,
    isFolder: false
  },
  Credits: {
    component: CreditsApp,
    title: 'Credits',
    defaultOpen: false,
    isFolder: false
  },
  AboutMe: {
    component: Folder,
    title: 'About Me',
    isFolder: true,
    folderApps: {
      Education: {
        component: EducationApp,
        title: 'Education',
        defaultOpen: false,
      },
      Experience: {
        component: ExperienceApp,
        title: 'Experience',
        defaultOpen: false,
      }
    },
  },
};

export default windowConfig;
