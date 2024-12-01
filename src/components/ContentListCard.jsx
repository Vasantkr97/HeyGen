import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';
import ContentListConstants from '../contants/ContentListConstanst';
import { useMediaQuery } from 'react-responsive';
//import { useResponsiveVideo } from '../hooks/useResponsive';


const ContentListCard = () => {
  const [videoDisplay, setVideoDisplay] = useState(ContentListConstants[0]?.link);
  const [muted, setMuted] = useState(true);
  const [openSection, setOpenSection] = useState("Marketing");
  
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTab = useMediaQuery({ query: "(max-width: 768px)" });

  const micHandler = () => {
    setMuted(!muted)
  }
  const ToggleSection = (section,videoUrl) => {
    if (isDesktop) {
        setOpenSection(openSection === section ? null : section)
    }
    else {
        setOpenSection(section);
    }
    setVideoDisplay(videoUrl)
  }

 
  return (
    <div className='flex max-w-7xl  h-full w-full flex-row justify-between items-center gap-x-20'>
        {isDesktop && (<div className='relative min-w-[33rem]'>
            <video autoPlay loop muted={muted} 
                className=' rounded-[1rem] w-full'
                src={videoDisplay}>
            </video>
            <a className='cursor-pointer bg-[#ffffff1a] border border-white/30 rounded-lg w-14 h-14 p-1.5 absolute inset-10 top-10 left-10'>
                <button onClick={micHandler} className='bg-[#fff] flex items-center justify-center w-full h-full rounded-md'>
                <img 
                    className='w-5 h-5 inline-block align-middle'
                    src={
                    !muted 
                    ?  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f38b6f5cd633eefce3efb4_%5C%5C.png"
                    :  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f2e8b62f0f951eb6f22fb9_Frame.png"
                    }
                    alt={muted ? "muted" : "Unmuted"} 
                />
                </button>
            </a>
        </div> )}
        <div className='flex w-full flex-col h-auto'>
            {
                ContentListConstants.map((list,index) => (
                    <a key={index} onClick={() => ToggleSection(list.text, list.link)} className='relative flex flex-col cursor-pointer text-left py-3 w-full items-stretch justify-between border-b border-b-gray-300'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[1.25rem]'>{list.text}</h2>
                            <div className='flex items-center justify-start'>
                                {openSection === list.text ? <ChevronUp/> : <ChevronDown/>}
                            </div>
                        </div>
                        {openSection === list.text && (<div className='w-full overflow-hidden cursor-pointer'>
                            <div className='p-4'>
                                <p className='whitespace-pre-line text-[0.9rem]'>
                                    {list.subtext}
                                </p>
                            </div>
                            <div className='flex items-center justify-end gap-2'>
                                <img src="https://cdn.prod.website-files.com/66e1917cda150940c2817f77/66e1917cda150940c28180a3_arrow-right.png" alt="loho" className='w-5 h-6' />
                                <p className='text-[#a34cdb] text-[1.2rem] font-medium'>Learn more</p>
                            </div>
                            {isTab && (<div className='relative min-w-[24rem] mt-[20px]'>
                                <video autoPlay loop muted={muted} 
                                    className=' rounded-[1rem]'
                                    src={videoDisplay}>
                                </video>
                                <a className='cursor-pointer bg-[#ffffff1a] border border-white/30 rounded-lg w-14 h-14 p-1.5 absolute inset-10 top-10 left-10'>
                                    <button onClick={micHandler} className='bg-[#fff] flex items-center justify-center w-full h-full rounded-md'>
                                    <img 
                                        className='w-5 h-5 inline-block align-middle'
                                        src={
                                        !muted 
                                        ?  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f38b6f5cd633eefce3efb4_%5C%5C.png"
                                        :  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f2e8b62f0f951eb6f22fb9_Frame.png"
                                        }
                                        alt={muted ? "muted" : "Unmuted"} />
                                    </button>
                                </a>
                            </div>)}
                        </div>
                        
                    )}
                    </a>
                ))
            }
        </div>
    </div>
  )
}

export default ContentListCard