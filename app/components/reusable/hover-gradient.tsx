import { CSSProperties, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

type HoverGradientProps = {
  children: ReactNode;
  className?: string | undefined;
  style?: CSSProperties;
} & MotionProps;

const HoverGradient: React.FC<HoverGradientProps> = ({ children, ...rest }) => {
  return (
    <motion.div
      whileHover={{
        background: 'linear-gradient(270deg, #695093 0.05%, rgba(188, 110, 136, 0.82) 17.55%, rgba(200, 183, 215, 0.00) 81.47%)',
      }}
      initial={{ background: 'transparent' }}
      style={{
        background: 'transparent',
        transition: 'background 0.6s cubic-bezier(0.42, 0, 0.58, 1)',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default HoverGradient;
