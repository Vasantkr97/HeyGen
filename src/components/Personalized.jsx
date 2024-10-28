import React from 'react'

const Personalized = () => {

  return (
    <section>
        <div className='padding-Global w-full h-full pl-6 pr-6'>
            <div className='Container_large w-full h-full !mr-auto !ml-auto  max-w-full'>
                <div className='home_personalized_wrapper flex flex-row lgg:grid lgg:grid-cols-2 smm:flex-col items-center justify-between rounded-[2rem] bg-[#e6ecf1] gap-x-28'>
                    <div className='Home_content flex flex-col pl-24 hex:pl-24 lg:pl-16 smm:px-6 smm:py-8 items-start justify-start gap-x-8 gap-y-8'>
                        <h2 className='text-[3.4rem] hex:text-[3.4rem] lg:text-[2.6rem] md:text-[3rem] smm:text-[2rem] leading-[1.1] font-normal '>
                            Personalized messages without a person.                        
                        </h2>
                        <p className='text-[1rem] hex:text-[1rem] lg:text-[0.8rem] mdd:text-[1.2rem] smm:text-[1.1rem] '>
                            Use your avatar to send personalized videos and branded landed pages to each contact in your CRM. Bump up qualified leads and conversion rates with videos crafted for individuals, made at scale.
                        </p>
                        <a className='font-medium py-3 px-6 hex:py-3 hex:px-6 lg:py-1.5 lg:px-5 rounded-[10rem] text-center text-white bg-black hover:bg-[#a34cdb] transition-all duration-300 ease delay-0'>Learn More</a>
                    </div>
                    <div className='overflow-hidden'>
                        <img 
                            className='inline-block rounded-[2rem] min-w-[43rem] max-h-[45rem] '
                            loading="lazy" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acc2f79b20eb25841c2c9f_Frame%20568.avif">
                        </img>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Personalized