// pages/index.tsx
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement; // Cast to HTMLLinkElement
    if (favicon) {
      console.log('Favicon element found:', favicon);
      favicon.href = '/files/artwork/favicon_frames/frame_03.png'; // Test with a known frame
    } else {
      console.log('Favicon element not found.');
    }
  }, []);

  return (
    <div>
      <h1>Welcome to my portfolio</h1>
    </div>
  );
};

export default Home;
