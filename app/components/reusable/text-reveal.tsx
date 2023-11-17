import React from "react";
import { motion, useAnimation } from "framer-motion";

interface SplitTextRevealProps {
  text: string;
  className: string;
}

const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  text,
  className,
}) => {
  const controls = useAnimation();

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  React.useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div variants={textVariants} initial="hidden" animate={controls}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className={className}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitTextReveal;
