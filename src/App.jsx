import { motion } from 'framer-motion';
import { FaGithub, FaNodeJs } from 'react-icons/fa'; // GitHub icon
import { FiDownload } from 'react-icons/fi'; // Download icon
import FeatureCard from './components/FeatureCard';
import Hero from './components/Hero';
import { TextHoverEffect } from './components/ui/text-hover-effect';
import { RxExternalLink } from "react-icons/rx";


const features = [
  {
    icon: <FaNodeJs />,
    title: "Node.js-Inspired Palette",
    description: "A color scheme crafted from Node.js hues for a seamless coding experience."
  },
  {
    icon: '✨',
    title: "Vibrant & Soothing Highlights",
    description: "Important elements stand out with vivid, yet calming Node.js colors."
  },
  {
    icon: '🎨',
    title: "Consistent Dark Design",
    description: "A unified dark theme that keeps your workspace focused and distraction-free."
  }
];


export default function App() {
  return (
    <section className='flex mx-auto flex-col justify-center items-center text-center gap-5 px-5 overflow-hidden'>
      <Hero />
      <div className='flex justify-between items-center flex-col-reverse lg:flex-row-reverse gap-20 px-5'>
        <motion.div
          className='border border-zinc-800 my-10'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
          <img
            className='rounded-sm'
            src={`https://raw.githubusercontent.com/ayush-khatrii/night-node/c76bb1fde12657ad8712ff475d4645059c449b42/images/code-snippet-1.jpg`}
            alt="night-node"
          />

        </motion.div>
        <TextHoverEffect text={"Nigh Node"} />
      </div>

      <motion.div
        className="my-8 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </motion.div>

      <h1 className='text-lg my-10  text-zinc-300'>
        <a href="https://ayushkhatri.site" target="_blank" className='flex justify-center items-center text-center'>
          Made with ❤️ by
          <b className='relative text-[#7fd956] mx-2 underline-effect'>
            Ayush Khatri
          </b>
          <RxExternalLink color='#7fd956' />
        </a>
      </h1>

    </section >
  );
}
