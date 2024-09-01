// extras/windowConfig.tsx
import WelcomeApp from '../application/welcome_app';
import ResumeApp from '../application/resume_app';
import CreditsApp from '../application/credits_app';

interface WindowConfigEntry {
  component: React.FC;
  defaultOpen?: boolean; // Optional boolean to specify if the window should be open by default
}

interface WindowConfig {
  [key: string]: WindowConfigEntry;
}

const windowConfig: WindowConfig = {
  Welcome: {
    component: WelcomeApp,
    defaultOpen: true, // This window will be open by default
  },
  Resume: {
    component: ResumeApp,
    defaultOpen: false,
  },
  Credits: {
    component: CreditsApp,
    defaultOpen: false,
  },
};

export default windowConfig;
