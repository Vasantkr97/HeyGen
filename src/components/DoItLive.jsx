import React, { useState } from 'react'

const DoItLive = () => {
    const [isMuted, setIsMuted] = useState(true);

    const micHandler = () => {
        setIsMuted(!isMuted)
    }

  return (
    <section>
        <div className='padding_Global w-full h-full pl-6 pr-6'>
            <div className='container-medium mx-auto w-full max-w-[64rem] '>
                <div className='padding_section pb-28'>
                    <div className='HomeFlexLiveWrap flex lgg:flex-row  smm:flex-col-reverse mx-auto item-center justify-between gap-y-16 lgg:space-x-24 '>
                        <div className='HomeFlexLiveLeft overflow-hidden rounded-[2rem]'>
                            <div className='relative'>
                                    <video autoPlay loop type="video/mp4" muted= {isMuted}
                                        className='inline-block items-baseline object-cover relative mx-auto w-[40rem] h-[38rem] lgg:w-[60rem] lgg:h-[38rem] mdd:w-full mdd:h-full smm:w-full smm:h-full'
                                        src="https://res.cloudinary.com/diqmvbeg6/video/upload/f_auto,q_auto/v1727308222/HeyGen-2.0-StreamingAvatar-1400x1600-081524_npuqow.mp4"></video>
                                    <a className='cursor-pointer bg-[#ffffff1a] border border-white/30 rounded-lg w-16 h-16 p-2 absolute inset-10 top-10 left-10'>
                                    <button onClick={micHandler} className='flex w-full h-full items-center justify-center rounded-lg p-0 bg-[#fff]'>
                                            <img 
                                                className='w-6 h-6 inline-block align-middle'
                                                src={
                                                !isMuted 
                                                ?  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f38b6f5cd633eefce3efb4_%5C%5C.png"
                                                :  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f2e8b62f0f951eb6f22fb9_Frame.png"
                                            } alt={isMuted ? "Muted" : "UnMuted"} />
                                    </button>
                                    </a>
                            </div>
                        </div>
                        <div className='HomeLiveFlexRight flex flex-col items-start justify-center gap-x-8 gap-y-8 w-4/5 mdd:w-4/5 smm:w-full'>
                            <h2 className='mdd:text-[3.5rem] smm:text-[2.5rem] font-nomral leading-none '> Do it Live</h2>
                            <p className='lgg:text-[1rem] mdd:text-[1.27rem] smm:text-[1.1rem] font-normal'>
                                Your customers can speak to your avatar live. They ask questions and an avatar responds, using your knowledge base and an LLM to enable a natural conversation with a person, not a painful interaction with a chat-bot.
                            </p>
                            <a className='bg-black text-white hover:bg-[#a34cdb] items-center rounded-[10rem] lgg:px-3.8 lgg:py-1.6 smm:px-5 smm:py-2.5'>
                                See a demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DoItLive