import React from 'react';

import { secureContent, secureHeader } from '../contants/SecureData';

const Secure = () => {
  return (
    <section>
        <div className='padding_Global w-full h-full px-6 py-6'>
            <div className='Container_medium mx-auto w-full h-full max-w-[64rem]'>
                <div className='padding-secure-flex lgg:py-20 smm:py-8 '>
                    <div className='Home_secure_flex lgg:grid grid-flow-col smm:flex  smm:flex-col-reverse items-center justify-between gap-x-28 gap-y-20'>
                        <div className='Home_Secure_grid grid md:grid-cols-2 mdd:grid-rows-1 smm:grid-rows-4 col-span-5 gap-4 w-full '>
                            {secureContent.map((item)=>(
                            <div key={item.id} className='flex flex-col px-6 py-12 items-center justify-start rounded-[2rem] bg-[#e6ecf1] text-center gap-6' style={{ background: item.bgColor }}>
                                <img src={item.image}
                                    alt={item.text} 
                                    className='inline-block max-w-full align-middle w-auto max-h-[5.5rem]'
                                />
                                <p className='text-[0.9rem] '>{item.text}
                                    <br />
                                </p>
                            </div>
                            ))}
                        </div>
                        <div className='flex shrink flex-col col-span-auto items-start justify-center gap-x-8 gap-y-8'>
                            <h2 className='lg:text-[4rem] lg:font-normal lg:leading-[4rem] smm:text-[2rem] smm:leading-[2.5rem] mdd:text-[3rem]'> 
                                {secureHeader.title}
                            </h2>
                            <p className='text-[0.8rem] smm:text-[1rem] mdd:text-[0.95rem] '>
                                {secureHeader.description}
                            </p>
                            <a className='transition-all duration-300 ease-in-out font-medium px-6 py-2.5 rounded-[10rem] text-center text-[0.9rem] bg-black text-white hover:bg-[#a34cdb]'> 
                                {secureHeader.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Secure