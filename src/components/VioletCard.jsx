import React from 'react'

const VioletCard = () => {
  return (
    <section className='z-20 border-box'> 
     <div className='padding-Global px-5 lgg:px-5 mdd:px-5 w-full h-full smm:px-4'>
        <div className='container-Large mx-auto w-full h-full '>
            <div className='padding-section pt-28 pb-12 hex:pb-16 lg:py-28 lgg:py-16 mdd:py-12 mdd:relative'>
                <div className='home-language-wrapper  grid lgg:grid-cols-2 mdd:grid-cols-1 auto-cols-fr px-24 py-20 hex:px-24 hex:py-20 lg:px-16 lg:py-16 lgg:p-24 mdd:px-4 mdd:py-16 smm:px-4 smm:py-16 items-center justify-between  rounded-[2rem] bg-[#21005d] gap-x-4 gap-y-4 lg:gap-x-4 lg:gap-y-4 lgg:gap-x-4 mdd:gap-y-12 smm:gap-y-12'>
                    <div className='home-language-flex  mx-auto h-full max-w-[90rem] w-full flex items-center justify-between gap-x-4 gap-y-4 lg:gap-x-4 lg:gap-y-4 lg:px-4'>
                        <div className='home-language-content  flex flex-col max-w-[31.7rem] lgg:max-w-[31.7rem] mdd:max-w-full smm:max-w-full w-full items-start justify-start gap-x-8 gap-y-8 lg:gap-x-8 lg-gap-y-8 lgg:gap-y-6'>
                            <h2 className='text-[3.1rem] hex:text-[3.1rem] lg:text-[2.5rem] lgg:text-[3.8rem] leading-[3.2rem] hex:leading-[3.2rem] lg:leading-[2.5rem] lgg:leading-[3.9rem] font-normal text-[#fff] tracking-normal'>
                                Every video you have in every language you need.
                            </h2>
                            <div className='max-w-[31.7rem lgg:max-w-[31.7rem mdd:max-w-[35rem] '>
                                <p className='text-[#fff] text-[1rem] hex:text-[1rem] lg:text-[0.8rem] lgg:text-[1.2rem] mdd:text-[1.2rem]  font-normal'>
                                    Update existing videos to 175 languages and dialects in minutes. We can even translate for you or add subtitles, making sure lips and voice match perfectly for the world’s easiest, most effective localization.
                                </p>
                            </div>
                            <a href="#" className='text-black bg-white hover:bg-[#a34cdb] text-center text-sm rounded-full px-5 py-2.5 lgg:px-5 lgg:py-2.5 mdd:px-6 mdd:py-3 font-medium transition-all duration-300 ease-in-out'>Learn more</a>
                        </div>
                    </div>
                    <div className='lg:px-4 relative overflow-hidden flex flex-shrink items-center justify-end lgg:justify-end mdd:justify-center'>
                        <video autoPlay loop className='object-cover w-full h-full z-2 rounded-xl max-w-[26.7rem] hex:max-w-[26.7rem] hex:min-h-[34rem] lg:min-h-[26rem] lg:max-w-[20rem] lgg:max-w-[30rem] lgg:min-h-[39rem] mdd:max-w-[31rem] mdd:min-h-[43.4rem] smm:max-w-full smm:min-h-[35rem] '>
                            <source src='https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be%2F66e577329101468db7a867e9_HeyGen-13-Localize-580x580-081524-transcode.mp4'/>
                        </video>
                    </div>
                </div>
            </div>-
        </div>            
     </div>
    </section>
  )
}

export default VioletCard