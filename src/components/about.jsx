import aboutImg from "../assets/aboutme.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const about = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)"}}
            initial={{ opacity: 0, x: -100, filter: "blur(5px)"}}
            transition={{ duration: 0.5, delay: 0.2}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="About me" />
                </div>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light">{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default about