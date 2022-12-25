'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, textContainer } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    Typing Text
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2>Title Text</h2>
);
