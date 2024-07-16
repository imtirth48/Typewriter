import { useEffect, useRef, useState } from 'react';
import './ThirdPage.css';
import pic2 from '../assets/3typewriter.jpg';

const ThirdPage = () => {
  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const topPosition = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (topPosition < windowHeight * 0.75) {
          setAnimate(true);
          setTextVisible(false); // Hide text when animation starts
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const timeoutId = setTimeout(() => {
        setTextVisible(true); // Show text after animation completes
      }, 1500); // 1000ms = 1s (match animation duration)

      return () => clearTimeout(timeoutId);
    }
  }, [animate]);

  return (
    <div>
      <div ref={containerRef} className={`container-box ${animate ? 'animate-container' : ''}`}>
        <p className={`upper-txt ${textVisible ? 'visible' : 'hidden'}`}>
          The typewriter was a creature of habit, demanding <br/>precise and deliberate movements. Each <br/>keystroke required a firm touch, a decisive action 
        </p>
        <p className={`lower-txt ${textVisible ? 'visible' : 'hidden'}`}>
          As the carriage inched forward, carrying the paper <br/>into view, there was a sense of anticipation, a<br/> blank canvas awaiting its transformation.
        </p>
      </div>
      <img className="cup" src={pic2} alt="img of cup with typewriter" />
    </div>
  );
};

export default ThirdPage;
