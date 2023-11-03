import React, { CSSProperties, useRef } from 'react';
import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '@/app/hooks/useIsoMorphicLayoutEffect';

type TextRevealProps = {
  children: React.ReactNode;
  className?: string | undefined;
  style?: CSSProperties;
};

const TextReveal: React.FC<TextRevealProps> = ({ children, className, style }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5,
      });
    }
  }, []);

  return <p ref={textRef} className={className} style={style}>{children}</p>;
};

export default TextReveal;
