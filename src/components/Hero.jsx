import React from 'react'

const Hero = () => {
  return (
    <section className='pt-2.5'>
        <div className='flex flex-col items-center justify-center'>
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
                        duration-300 ease-in-out'>Get started for free</a>
                        <p className='text-sm'>
                            Unlimited video | No credit card needed
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero