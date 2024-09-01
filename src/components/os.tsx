import { useState, useEffect } from 'react';
import DesktopLayout from '../components/screen/DesktopLayout';
import BootScreen from '../components/screen/BootScreen';

const OS = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [showDesktop, setShowDesktop] = useState<boolean>(false);

  const handleLoaded = () => {
    setFadeOut(true);
    // Wait for the BootScreen fade-out duration before showing the DesktopLayout
    setTimeout(() => {
      setLoading(false);
      setShowDesktop(true);
    }, 300); // Duration of BootScreen transition opacity
  };

  return (
    <div className="relative h-screen w-screen">
      {/* BootScreen */}
      {loading && <BootScreen onLoaded={handleLoaded} />}
      
      {/* Transition Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${fadeOut ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundColor: '#111827' }} // Specify the transition color
      />

      {/* DesktopLayout */}
      <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${showDesktop ? 'opacity-100' : 'opacity-0'}`}>
        <DesktopLayout />
      </div>
    </div>
  );
};

export default OS;
