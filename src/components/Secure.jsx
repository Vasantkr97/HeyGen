import React from 'react'

const Secure = () => {
  return (
    <section>
        <div className='padding_Global w-full h-full px-6 py-6'>
            <div className='Container_medium mx-auto w-full h-full max-w-[64rem]'>
                <div className='padding-secure-flex lgg:py-20 smm:py-8 '>
                    <div className='Home_secure_flex lgg:grid grid-flow-col smm:flex  smm:flex-col-reverse items-center justify-between gap-x-28 gap-y-20'>
                        <div className='Home_Secure_grid grid md:grid-cols-2 mdd:grid-rows-1 smm:grid-rows-4 col-span-5 gap-4 w-full '>
                            <div className='flex flex-col px-6 py-12 items-center justify-start rounded-[2rem] bg-[#e6ecf1] text-center gap-6'>
                                <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa009a4487cd01d6d0225d_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif" 
                                    className='inline-block max-w-full align-middle w-auto max-h-[5.5rem]'
                                />
                                <p className='text-[0.9rem] '>SOC 2 Type 2 Compliant
                                    <br />
                                </p>
                            </div>
                            <div className='flex flex-col px-6 py-10 items-center justify-start rounded-[2rem] bg-[#33d133] text-center gap-x-6 gap-y-6'>
                                <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa0100859bacb9d46731fa_65647d339c017f844ae8fe20_c2pa%201.avif" 
                                    className='inline-block max-w-full align-middle w-auto max-h-[5.5rem]'
                                />
                                <p className='text-[0.9rem] '>Coalition for Content Provenance and Authenticity (C2PA)
                                    <br />
                                </p>
                            </div>
                            <div className='flex flex-col px-6 py-12 items-center justify-start rounded-[2rem] bg-[#33d133] text-center gap-x-6 gap-y-6'>
                                <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa01427b43ab524e8a7d54_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif" 
                                    className='inline-block max-w-full align-middle w-auto max-h-[5.5rem]'
                                    />
                                <p className='text-[0.9rem] '>Content Authenticity Initiative
                                    <br />
                                </p>
                            </div>
                            <div className='flex flex-col px-6 py-12 items-center justify-start rounded-[2rem] bg-[#e6ecf1] text-center gap-x-6 gap-y-6'>
                                <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa016c9633c8dbdf53f9dc_Top_Layer.avif"
                                    className='inline-block max-width-full align-middle w-auto max-h-[5.5rem]'
                                    />
                                <p className='text-[0.9rem] '>Committed to the General Data Protection Regulation
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className='flex shrink flex-col col-span-auto items-start justify-center gap-x-8 gap-y-8'>
                            <h2 className='lg:text-[4rem] lg:font-normal lg:leading-[4rem] smm:text-[2rem] smm:leading-[2.5rem] mdd:text-[3rem]'> 
                                Secure. Responsible. Ethical.
                            </h2>
                            <p className='text-[0.8rem] smm:text-[1rem] mdd:text-[0.95rem] '>
                                We are committed to safety, security, and ethical use of our service. AI avatars can only be created and shared with express consent and cannot be used to spread content that’s harmful to others.
                            </p>
                            <a className='transition-all duration-300 ease-in-out font-medium px-6 py-2.5 rounded-[10rem] text-center text-[0.9rem] bg-black text-white hover:bg-[#a34cdb]'> 
                                Learn about Trust & Safety
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