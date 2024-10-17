import { motion } from "framer-motion"
import logo from "../contants/data.js"



const Logos = () => {
    const imagesArr = [...logo, ...logo];
  return (
    <div className="overflow-hidden">
        <motion.div 
            animate={{
                x: ["0%", "-100%"],
                transition: {
                    ease: "linear",
                    duration: 15,
                    repeat: Infinity,
                }
            }}
            className='flex justify-center items-center opacity-40 mix-blend-multiply gap-12 md:gap-40'>
                {imagesArr.map((image, index) => (

                    <img 
                    key={index}
                    src={image.src} 
                    alt={image.name} 
                    className='flex-none max-h-[2rem] inline-block max-w-full align-middle'
                    />
                          
                ))}
        </motion.div>
    </div>
  )
}

export default Logos