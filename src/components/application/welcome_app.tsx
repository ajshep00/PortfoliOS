import React, { ReactNode } from 'react';
import Window from '../../components/screen/Window'
  
  const WelcomeApp: React.FC = () => {
  return (
        <div>
            <div className='text-white'>
            <p>
                Hi, My name is Alex, and I am a recent Computer Science graduate looking for a job!
                I am currently working on making my portfolio with <a href='https://nextjs.org/' className='text-rose'>next.JS</a>, 
                and <a href='https://tailwindcss.com' className='text-rose'>tailwindCSS</a>, but it is an ever-evolving
                work-in-progress, so stay tuned to see some updates!
            </p>
            <br></br>
            <p>
                My goal is to simulate the desktop experience in a web-browser, taking inspiration from&nbsp; 
                <a href='https://www.linkedin.com/in/vivek9patel' className='text-rose'>Vivek Patel</a>&#39;s&nbsp; 
                <a href='https://vivek9patel.github.io/' className='text-rose'>Personal Portfolio</a> that simulates
                Ubuntu 20.04, but building it from the ground-up so that I can learn it as well as they have and make it my own!
            </p>
            <br></br>
            <p>
                So far I only have a bit of the UI implemented, but the windows are draggable and I am working on implementing a 
                &quot;boot screen&quot; for when the page first loads. I have many more plans for the future and I am excited to share them 
                with you! In the meantime,  feel free to peruse what is currently available (including my resume!), and enjoy!
            </p>

            </div>
            
        </div>
  );
};

export default WelcomeApp;
