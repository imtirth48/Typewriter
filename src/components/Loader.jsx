import { useState, useEffect, useRef } from 'react';
import './Loader.css';

const Loader = ({ setLoading }) => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const firstLineMessage = "Hey,I'm TIRTH SHAH :)";
  const secondLineMessage = "Welcome to the website!";
  const firstLineIndex = useRef(0);
  const secondLineIndex = useRef(0);
  const firstLineTimeout = useRef(null);
  const secondLineTimeout = useRef(null);
  const typingComplete = useRef(false); // Ref to track if first line typing is complete

  useEffect(() => {
    const typeFirstLine = () => {
      if (firstLineIndex.current < firstLineMessage.length) {
        const nextChar = firstLineMessage[firstLineIndex.current];
        setFirstLine((prev) => prev + (nextChar !== undefined ? nextChar : ''));
        firstLineIndex.current++;
        firstLineTimeout.current = setTimeout(typeFirstLine, 100); // Adjust typing speed as needed
      } else {
        // Set flag to indicate first line typing is complete
        typingComplete.current = true;
        secondLineTimeout.current = setTimeout(typeSecondLine, 200); // Delay before starting the second line
      }
    };

    const typeSecondLine = () => {
      if (secondLineIndex.current < secondLineMessage.length) {
        const nextChar = secondLineMessage[secondLineIndex.current];
        setSecondLine((prev) => prev + (nextChar !== undefined ? nextChar : ''));
        secondLineIndex.current++;
        secondLineTimeout.current = setTimeout(typeSecondLine, 100); // Adjust typing speed as needed
      } else {
        // When both lines are typed, hide the loader
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Additional delay before hiding loader
      }
    };

    typeFirstLine();

    // Cleanup function to clear timeouts when the component unmounts
    return () => {
      clearTimeout(firstLineTimeout.current);
      clearTimeout(secondLineTimeout.current);
      firstLineIndex.current = 0;
      secondLineIndex.current = 0;
      setFirstLine("");
      setSecondLine("");
    };
  }, [setLoading, firstLineMessage, secondLineMessage]);

  return (
    <div className="loader-container">
      <div className="input-wrapper">
        <p className={`typing-animation ${typingComplete.current ? 'no-blink' : ''}`}>{firstLine}</p><br />
        <p className="typing-animation">{secondLine}</p>
      </div>
    </div>
  );
};

export default Loader;
