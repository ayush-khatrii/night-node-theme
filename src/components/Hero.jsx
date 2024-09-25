import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

const Hero = () => {
  // Function to scroll down to the next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-5xl lg:text-[9rem] mb-5 text-[#7fd956] font-semibold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Night Node
        </motion.h1>
        <motion.p
          className='lg:text-xl font-extralight md:text-3xl my-5 w-4/5 lg:w-8/12 text-zinc-400'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
        >
          Inspired by Node.js, dark hues and vibrant accents to keep your coding smooth and easy on the eyes.        </motion.p>
        <div className='flex mt-6 lg:text-xl justify-center items-center text-center flex-col md:flex-row w-full gap-4'>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ayushkhatri.nightnode"
            className="flex items-center px-4 py-2 bg-[#7fd956] text-black rounded-lg hover:bg-[#6dc349] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDownload className="mr-2" size={18} /> Download for VS Code
          </a>
          <a
            href="https://github.com/ayush-khatrii/night-node"
            className="flex items-center px-4 py-2 bg-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" size={20} /> View code on GitHub
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
