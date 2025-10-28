import { useEffect, useState } from "react";
import './index.css';

const FlipWords = ({ words, interval = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState("in");

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimState("out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimState("in");
      }, 400); // matches flipOut duration
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={`flip-word ${animState}`}>
      {words[index]}
    </span>
  );
};

export default FlipWords;
