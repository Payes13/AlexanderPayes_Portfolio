import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* THIS IS THE PURPLE CIRCLE */}
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          {/* THIS IS THE LINE BELOW THE CIRCLE */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Alexander</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I’m a Full Stack Web and AWS Cloud Developer,<br className='sm:block hidden' />
          &nbsp;building website interfaces, web applications, <br className='sm:block hidden' /> and scalable cloud solutions.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-0 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
