// Pic.js

import { useEffect, useRef, useState } from 'react';
import pic1 from '../assets/2typewriter.jpg';
import './Pic.css';

const Pic = () => {
  const textBlockRef = useRef(null);
  const bottomBlockRef = useRef(null);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const textBlock = textBlockRef.current;
    const bottomBlock = bottomBlockRef.current;

    const handleScroll = () => {
      if (textBlock && bottomBlock) {
        const textTopPosition = textBlock.getBoundingClientRect().top;
        const bottomTopPosition = bottomBlock.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (textTopPosition < windowHeight * 0.75 || bottomTopPosition < windowHeight * 0.75) {
          setAnimateText(true);
        } else {
          setAnimateText(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="img-container">
      <img src={pic1} alt="image of type-writer" />
      <div
        ref={textBlockRef}
        className={`text-block ${animateText ? 'animate-text' : ''}`}
      >
        ELECTRO-MECHANICAL MACHINE
      </div>
      <div
        ref={bottomBlockRef}
        className={`bottom-block ${animateText ? 'animate-text1' : ''}`}
      >
        qwerty ** teleprinter ** keyboard ** typewriter ** keyboard ** machine.
      </div>
    </div>
  );
};

export default Pic;
