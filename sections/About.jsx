'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0 " />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}
    >
      <TypingText title="| About Meta" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* <span className="font-extrabold text-white ">
          Next.js 13
        </span> was recently released, learn more and see the upgrade guide. Version 13 also introduces beta features like the app directory that works alongside the pages directory (stable) for incremental adoption. You can continue using pages in Next.js 13, but if you want to try the new app features, see the new beta docs.
     */}
        I am a Frontend Web Developer based in the Philippines. I am passionate about creating beautiful and functional web applications. I am an IT Graduate and I am always looking for new challenges to learn new technologies. Im a Resourceful Front End Web Developer bringing in-depth knowledge of latest technology trends to produce clean website design. Detail-oriented collaboration with others to define project expectations and demand. Hands-on testing and debugging to address inconsistencies and maintain performance thresholds.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.4, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>

    About section
  </section>
);

export default About;
