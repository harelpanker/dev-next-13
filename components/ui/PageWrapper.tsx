'use client';

import { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type pageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: FC<pageWrapperProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
