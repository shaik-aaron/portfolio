import { useEffect, useState } from "react";

function TextCarousel() {
  const phrases = ["software engineer", "QA engineer", "singer", "gamer"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 mt-4">
      <p className="font-geistmedium text-gray-400 text-2xl">I am a</p>
      <div>
        {phrases.map((phrase, index) => (
          <div
            key={phrase}
            className="absolute transition-all duration-500 font-geistmedium text-2xl"
            style={{
              transform: `translateY(${(index - currentIndex) * 100}%)`,
              opacity: index === currentIndex ? 1 : 0,
            }}
          >
            {phrase}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextCarousel;
