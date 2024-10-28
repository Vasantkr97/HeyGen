import { motion } from "framer-motion"
import users from '../contants/readyToCreate.js'
import React from 'react'
import { useMediaQuery } from "react-responsive";

const ReadyToCreate = () => {
    const isMediumOrSmall = useMediaQuery({ query: '(max-width: 786px)'})

  return (
    <section>
        <div className='padding_Global w-full h-full pl-6 pr-6'>
            <div className='Container_medium mx-auto w-full h-full'>
                <div className='padding_section_Medium pt-20 pb-28'>
                    <div className='HomeReadyWrapper flex flex-col items-center justify-start gap-8'>
                        <h2 className='lg:text-[3.5rem] font-normal mdd:text-[2.7rem] smm:text-[2rem]'>
                            Ready to create? 
                        </h2>
                        <a className='px-6 py-2.5 bg-black text-white hover:bg-[#a34cdb] rounded-[2rem] transition duration-300 ease-in-out'>
                            Get started for free
                        </a>
                    </div>
                    <div className='homereadyFlexWrapper contain-inline-size'>
                        <SlidingUser1 />
                        {isMediumOrSmall && <SlidingUser2 />}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

const SlidingUser1 = () => {
    const usersArr = [...users, ...users];

    return (
        <div className="relative w-full h-full flex mt-16 overflow-hidden ">
            <div className="inset-0 z-20 before:absolute before:top-0 before:left-0 
                before:bg-gradient-to-r before:w-1/6 before:h-full before:from-white before:to-transparent
                after:absolute after:right-0 after:top-0 after:bg-gradient-to-l
                after:h-full after:w-1/6 after:from-white after:to-transparent"></div>
            <motion.div  
                animate={{
                    x:["0%", "-100%"],
                    transition: {
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                    }
                }}
                className='flex items-center justify-center gap-5 mix-blend-multiply'>
                { usersArr.map((image, index) => (
                            <img 
                            key={index}
                            src={image.src} 
                            alt={image.name}
                            className='inline-block lgg:max-w-[11.5rem] mdd:max-w-[13.125rem] smm:max-w-[9rem] w-full rounded-[0.5rem] align-middle'
                        />
                    ))
                }
            </motion.div>
        </div>
    )
    }


    const SlidingUser2 = () => {
        const usersArr = [...users, ...users];
    
        return (
            <div className="relative w-full h-full flex mt-16 overflow-hidden ">
                <div className="inset-0 z-20 before:absolute before:top-0 before:left-0 
                    before:bg-gradient-to-r before:w-1/6 before:h-full before:from-white before:to-transparent
                    after:absolute after:right-0 after:top-0 after:bg-gradient-to-l
                    after:h-full after:w-1/6 after:from-white after:to-transparent"></div>
                <motion.div  
                    animate={{
                        x:["0%", "100%"],
                        transition: {
                            ease: "linear",
                            duration: 20,
                            repeat: Infinity,
                        }
                    }}
                    className='flex items-center justify-center gap-5 mix-blend-multiply'>
                    { usersArr.map((image, index) => (
                                <img 
                                key={index}
                                src={image.src} 
                                alt={image.name}
                                className='inline-block lgg:max-w-[11.5rem] mdd:max-w-[13.125rem] smm:max-w-[9rem] w-full rounded-[0.5rem] align-middle'
                            />
                        ))
                    }
                </motion.div>
            </div>
        )
        }

export default ReadyToCreate



