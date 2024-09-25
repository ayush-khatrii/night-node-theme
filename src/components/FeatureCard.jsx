import { motion } from "framer-motion"
const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-br flex justify-center flex-wrap items-center text-center flex-col from-zinc-[#0f0f0f] to-zinc-[#0a0a0a] p-6 rounded-lg shadow-lg border border-zinc-800 hover:border-[#7fd956] transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, scale: 0.95, }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'circInOut' }}
      whileHover={{ boxShadow: '0 0 20px rgba(127, 217, 86, 0.3)' }}
    >
      <div className="text-[#7fd956] text-3xl mb-4">{icon}</div>
      <h3 className=" text-[#7fd956] text-xl font-medium mb-2">{title}</h3>
      <p className="text-zinc-300 font-extralight">{description}</p>
    </motion.div>
  )
}

export default FeatureCard;