import { RiReactjsLine } from "react-icons/ri"
import { RiVuejsFill } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { DiPython } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
      },
    },
})

const technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div
         whileInView={{ opacity: 1, x: 0 , filter: "blur(0px)"}}
         initial={{ opacity: 0, x: -100 , filter: "blur(5px)"}}
         transition={{ duration: 1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiVuejsFill className="text-7xl text-lime-500"/>
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400"/>
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-yellow-500"/>
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-600"/>
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-600"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default technology