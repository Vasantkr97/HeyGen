import React, { useState } from 'react'
import ThreepeopleCard from './ThreepeopleCard';
import Logos from './Logos';


const Hero = () => {
    const [isMuted, setIsMuted] = useState(true);

    const micHandler = () => {
        setIsMuted(!isMuted)
    }


  return (
    <section className='pt-2.5 mt-18'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <div className='text-center mt-6 '>
                <div>
                    <h1 className='text-5xl font-normal antialiased'>
                        Create and translate videos with AI
                    </h1>
                </div>
                <div className='text-center mt-6 md:text-left gap-y-6'>
                    <p className='ml-14 mr-14 text-xl font-[400] antialiased hover:subpixel-antialiased text-center tracking-tight text-gray-800'>
                        Produce studio-quality videos in 175 languages without a camera or crew.
                    </p>
                    <div className='pt-9 flex flex-col justify-center items-center gap-y-4'>
                        <a href="#" className='text-lg inline-flex items-center 
                        justify-center bg-signup hover:bg-bgsignupfree font-normal
                        px-8 py-3.5 md:px-5 md:py-2.5 rounded-full text-white trasition-all 
                        duration-300 ease-in-out`'>Get started for free</a>
                        <p className='text-sm'>
                            Unlimited video | No credit card needed
                        </p>
                        <div className='px-6 mt-12 relative'>
                            <div className='relative w-full h-full mx-auto 
                                bg-gray-200 rounded-ee-3xl rounded-se-3xl rounded-ss-3xl rounded-es-3xl overflow-hidden'>
                                <video autoPlay loop muted={isMuted} type='video/mp4' 
                                    src="https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4" 
                                    className="h-full w-full object-cover">
                                </video>
                                <div className='flex justify-center items-center cursor-pointer bg-white bg-opacity-[0.1] border border-white border-opacity-[0.18] rounded-lg w-18 h-18 p-2.5 absolute top-10 left-10 "'>
                                    <button onClick={micHandler}  className='bg-[#fff] rounded-lg  p-4'>
                                        <img  className='w-8 h-8 md:w-6 md:h-6 inline-block align-middle' src={
                                            isMuted
                                            ? "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f2e8b62f0f951eb6f22fb9_Frame.png"
                                            : "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f38b6f5cd633eefce3efb4_%5C%5C.png"
                                            } 
                                            alt={isMuted ? "Muted" : "Unmuted"} 
                                        
                                            />
                                    </button>
                                </div>
                                <div className='invisible sm:visible'>
                                    <ThreepeopleCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 flex flex-wrap justify-center items-center'>
                <div className='flex flex-wrap justify-center items-center gap-2 text-xl md:text-xl lg:text-lg'>
                    <p className='max-w-md break-words'>
                        Trusted by over 45,000 customers |

                    </p>
                    <div className='flex flex-row justify-center items-center gap-2 max-w-md break-words'>
                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f199f848e447ac8da0de24_Frame.webp" alt 
                            className='max-w-full inline-block align-middle w-5 h-5'
                            />
                        <p>
                            Rated 4.8/5 on G2
                        </p>
                    </div>
                </div>
            </div>
            {/* Infinite scrolling */}
            <div className='relative w-full max-w-full overflow-hidden mt-5'>
                <div className='flex w-full gap-x-40 gap-y-40 ml-4'>
                    <Logos/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero