'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DefaultMotionContainer = ({ children }: Props) => {
  const styleValues = { padding: '1rem' };
  const initialValues = { opacity: 0, x: 50 };
  const animateValues = { opacity: 1, x: 0 };
  const transitionValues = {
    duration: 0.8,
    delay: 0.1,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.div
      style={styleValues}
      initial={initialValues}
      animate={animateValues}
      transition={transitionValues}
    >
      {children}
    </motion.div>
  );
};

export default DefaultMotionContainer;
