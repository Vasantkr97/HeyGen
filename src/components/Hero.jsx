import React, { useState } from 'react'
import Logos from './Logos';
import { heroData } from '../contants/heroData';


const Hero = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [videodisplay, setVideoDisplay] = useState(heroData.video.defaultUrl)
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    
    const micHandler = () => {
        setIsMuted(!isMuted)
    }
    const imageOnClick = (videoUrl,avatarId) => {
        setVideoDisplay(videoUrl);
        setSelectedAvatar(avatarId);
    }


  return (
    <section className='pt-2.5 mt-18 relative'>
        <img loading='lazy' src={heroData.backgroundImage}
                className='z-[-2] w-full h-full inline-block absolute align-middle'
            />
        <div className='flex flex-col items-center justify-center gap-6'>
            <div className='text-center mt-6 '>
                <div>
                    <h1 className='text-5xl font-normal antialiased'>
                        {heroData.heading}
                    </h1>
                </div>
                <div className='text-center mt-6 md:text-left gap-y-6'>
                    <p className='ml-14 mr-14 text-xl font-[400] antialiased hover:subpixel-antialiased text-center tracking-tight text-gray-800'>
                        {heroData.subheading}
                    </p>
                    <div className='pt-9 flex flex-col justify-center items-center gap-y-4'>
                        <a href="#" className='text-lg inline-flex items-center 
                        justify-center bg-signup hover:bg-bgsignupfree font-normal
                        px-8 py-3.5 md:px-5 md:py-2.5 rounded-full text-white trasition-all 
                        duration-300 ease-in-out`'>{heroData.ctaButton.text}</a>
                        <p className='text-sm'>
                            {heroData.ctaButton.additionalText}
                        </p>
                        <div className='px-6 mt-12 relative'>
                            <div className='relative w-full h-full mx-auto 
                                bg-gray-200 rounded-[2rem] overflow-hidden'>
                                <video autoPlay loop muted={isMuted} type='video/mp4' 
                                    src={videodisplay}
                                    className="h-full w-full object-cover outline-none">
                                </video>
                                <div className='flex justify-center items-center cursor-pointer bg-white bg-opacity-[0.1] border border-white border-opacity-[0.18] rounded-lg w-18 h-18 p-2.5 absolute top-10 left-10 "'>
                                    <button onClick={micHandler}  className='bg-[#fff] rounded-lg  p-4'>
                                        <img  className='w-8 h-8 md:w-6 md:h-6 inline-block align-middle' src={
                                            isMuted
                                            ? heroData.mic.mutedIcon
                                            : heroData.mic.unmutedIcon
                                            } 
                                            alt={isMuted ? "Muted" : "Unmuted"} 
                                        
                                            />
                                    </button>
                                </div>
                                <div className='invisible sm:visible'>
                                <div className="bottom-1 left-1 lg:bottom-4 lg:left-4 flex items-center justify-center z-30 backdrop-blur-[40px] bg-[#ffffff1a] rounded-xl min-w-[23.25rem] max-w-[26.25rem] min-h-[15rem] mb-10 ml-10 p-2  absolute inset-auto sm:max-w-[19rem] sm:min-h-[12rem] sm:mb-4 sm:ml-4">
                                <div className='bg-white rounded-lg h-full min-h-[15rem] p-6 sm:min-h-[12rem] sm:p-4 md:min-h-[11rem]'>
                                    <div className='relative'>
                                        <div className='flex gap-4 md:gap-6 justify-start'>
                                            { heroData.video.avatars.map((avatar,index) =>(
                                                <img key={index}
                                                    src={avatar.imageUrl}
                                                    alt={avatar.id} 
                                                    onClick={() => imageOnClick(avatar.videoUrl, avatar.id)}
                                                    className={`w-10 h-10 rounded-full border-2 cursor-pointer ${selectedAvatar === avatar.id ? "border-green-600" : ""} `}
                                                />
                                            )) }
                                        </div>
                                        <div className='inline-block relative overflow-hidden border-t-4 border-gray-200 mt-4 font-normal'>
                                            <div className='text-left mt-4 pb-6'>
                                                <p>
                                                    {heroData.testimonial.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 flex flex-wrap justify-center items-center'>
                <div className='flex flex-wrap justify-center items-center gap-2 text-xl md:text-xl lg:text-lg'>
                    <p className='max-w-md break-words'>
                        {heroData.trustInfo.text}
                    </p>
                    <div className='flex flex-row justify-center items-center gap-2 max-w-md break-words'>
                        <img src={heroData.trustInfo.rating.icon} 
                            alt='Rating Icon'
                            className='max-w-full inline-block align-middle w-5 h-5'
                            />
                        <p>
                            {heroData.trustInfo.rating.label}
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