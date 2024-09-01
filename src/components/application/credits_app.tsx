import React, { ReactNode } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const CreditsApp: React.FC = () => {
  return (
    <div className='text-white flex justify-around'>
      <div>
        <h2>Artwork</h2>
        <div className='h-[1.5px] bg-white mb-2'></div>
        <ul>
          <li>
            <button>
              <RiArrowDropDownLine />
            </button>
            <a href='https://dangelostudio.art' className='text-rose'>D&apos;Angelo Studio</a></li>
        </ul>
      </div>
      <div>
        <h2>Frameworks Used</h2>
        <div className='h-[1.5px] bg-white mb-2'></div>
        <ul>
          <li><a href='https://nextjs.org/' className='text-rose'>next.JS</a></li>
          <li><a href='https://tailwindcss.com' className='text-rose'>tailwindCSS</a></li>
        </ul>
      </div>
      <div>
        <h2>Inspiration</h2>
        <div className='h-[1.5px] bg-white mb-2'></div>
        <ul>
          <li><a href='https://vivek9patel.github.io/' className='text-rose'>Vivek Patel&apos;s Portfolio</a></li>
        </ul>
      </div>

    </div>
  );
};

export default CreditsApp;
