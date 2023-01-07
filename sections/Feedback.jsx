'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 }`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[32px] text-white"> Thopz </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px]  leading-[16px] text-white">Founder of Meta</p>
        </div>
        <p className="font-bold sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white mt-[24px]">
          "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum"</p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img src="/planet-09.png" alt="planet"
          className="w-full h-auto lg:h-[610px] min-h-[210px] object-cover rounded-3xl"
        />
        <motion.div
          variants={zoomIn(0.1, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="/stamp.png" alt="stamp"
            className="h-36 w-36 object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
