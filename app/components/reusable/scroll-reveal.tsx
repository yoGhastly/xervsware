import React, { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ClassValue } from "clsx";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string | undefined;
  style?: CSSProperties;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className, style }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref as unknown as React.MutableRefObject<HTMLDivElement>}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
