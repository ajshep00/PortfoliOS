import React, { useEffect, useState } from 'react';
import LoadingBar from '../extras/LoadingBar';
import Logo from '../extras/Logo'
import Image from 'next/image';

interface BootScreenProps {
  onLoaded: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onLoaded }) => {
  const bgColor = 'rgba(0, 0, 255, 0.6)';

  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onLoaded();
    }, 5000); // Display duration for the boot screen

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-300 ease-in-out ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      // style={{ backgroundColor: bgColor }} // Semi-transparent background color
    >
      {/* Background Image
      <div className="absolute inset-0 z-0 bg-white bg-paper-texture-lg bg-cover">
        <Image
          src="/files/artwork/wallpaper/paper_wallpaper.jpg"
          alt="Background of crumpled paper wallpaper"
          fill={true}
          priority={true}
        //   style={{ objectFit: 'cover' }} // Ensures image covers the background properly
        />
      </div> */}
      <div className='relative z-10 flex flex-col items-center justify-around w-full h-full'>
        <Logo />
        <LoadingBar />
      </div>
    </div>
  );
};

export default BootScreen;
