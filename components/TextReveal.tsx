// components/TextReveal.tsx
import React from "react";

interface TextRevealProps {
  text: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ text }) => {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg dark:bg-black">
      <span className="text-reveal-animation">{text}</span>
    </div>
  );
};

export default TextReveal;
