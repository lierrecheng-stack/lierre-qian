import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`section-container ${className}`}
  >
    {children}
  </motion.section>
);

export default Section;
