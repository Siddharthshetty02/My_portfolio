import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";


// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero text */}
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
            Hi there!
            <br className="sm:block hidden" /> I am
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="text-gradient">{aboutMe.name}</span>
        </h1>
        <p className="font-poppins font-medium text-teal-300 text-[18px] md:text-[20px] mt-2 tracking-wide">
          {aboutMe.tagLine}
        </p>
        <p className={`${styles.paragraph} max-w-[520px] mt-4 text-[16px]`}>
          {aboutMe.intro}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="#projects"
            className="py-3 px-6 font-poppins font-medium text-[15px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:scale-105 transition-transform shadow-lg shadow-teal-500/20"
          >
            Explore Projects
          </a>
          <a
            href="#contactMe"
            className="py-3 px-6 font-poppins font-medium text-[15px] text-white border border-teal-400/40 hover:border-teal-300 rounded-[10px] outline-none hover:bg-teal-400/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-index-[5] h-[90%] w-[85%]">
          <Lottie {...defaultOptions} />
        </div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
