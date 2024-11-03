import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';


const ThreepeopleCard = () => {
const [videoDisplay, setVideoDisplay] = useState("https://resource.heygencdn.com/homepage/AImail_final_opt.mp4");
  const [muted, setMuted] = useState(true);
  const [openSection, setOpenSection] = useState("Marketing");
  
  const micHandler = () => {
    setMuted(!muted)
  }
  const ToggleSection = (section,videoUrl) => {
    setOpenSection(openSection === section ? null : section)
    setVideoDisplay(videoUrl)
  }
    
  return (
    <div className='flex max-w-7xl  h-full w-full flex-row justify-between gap-x-20'>
        <div className='relative min-w-[36rem]'>
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
        </div>
        <div className='flex w-full flex-col h-auto'>
            <a onClick={() => ToggleSection("marketing","https://resource.heygencdn.com/homepage/AImail_final_opt.mp4")} className='relative flex flex-col cursor-pointer text-left py-3 w-full items-stretch justify-between border-b border-b-gray-300'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[1.25rem]'>Marketing</h2>
                    <div className='flex items-center justify-start'>
                        {openSection === "marketing" ? <ChevronUp/> : <ChevronDown/>}
                    </div>
                </div>
                {openSection ==="marketing" && (<div className='w-full overflow-hidden cursor-pointer'>
                    <div className='p-4'>
                        <p className='whitespace-pre-line text-[0.9rem]'>
                            Make product explainers and how-to’s for anyone, anywhere, instantly.
                        </p>
                    </div>
                    <div className='flex items-center justify-end gap-2'>
                        <img src="https://cdn.prod.website-files.com/66e1917cda150940c2817f77/66e1917cda150940c28180a3_arrow-right.png" className='w-5 h-6' />
                        <p className='text-[#a34cdb] text-[1.2rem] font-medium'>Learn more</p>
                    </div>
                </div>)}
            </a>
            <a onClick={() => ToggleSection("sales","https://res.cloudinary.com/diqmvbeg6/video/upload/v1727421703/WebFlow/uwxrdmkggahxyselqn7f.mp4")} className='relative flex flex-col cursor-pointer text-left py-3 w-full items-stretch justify-between border-b border-b-gray-300'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[1.25rem]'>Sales</h2>
                    <div className='flex items-center justify-start'>
                        {openSection === "sales" ? <ChevronUp/> : <ChevronDown/>}
                    </div>
                </div>
                {openSection === "sales" &&  (<div className='w-full overflow-hidden cursor-pointer'>
                    <div className='p-4'>
                        <p className='whitespace-pre-line text-[0.9rem]'>
                        Train new reps, provide the latest competitive intelligence, and teach reps to sell new products with localized, engaging videos they can watch on-demand. Or reach out to leads with personalized videos made just for them.                        </p>
                    </div>
                    <div className='flex items-center justify-end gap-2'>
                        <img src="https://cdn.prod.website-files.com/66e1917cda150940c2817f77/66e1917cda150940c28180a3_arrow-right.png" className='w-5 h-6' />
                        <p className='text-[#a34cdb] text-[1.2rem] font-medium'>Learn more</p>
                    </div>
                </div>)}
            </a>
            <a onClick={() => ToggleSection("learning","https://res.cloudinary.com/diqmvbeg6/video/upload/q_auto/v1727420992/WebFlow/z91rvukl6qhr5wejwvta.mp4")} className='relative flex flex-col cursor-pointer text-left py-3 w-full items-stretch justify-between border-b border-b-gray-300'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[1.25rem]'>Learning & Development</h2>
                    <div className='flex items-center justify-start'>
                        {openSection === "learning" ? <ChevronUp/> : <ChevronDown/>}
                    </div>
                </div>
                {openSection === "learning" && (<div className='w-full overflow-hidden cursor-pointer'>
                    <div className='p-4'>
                        <p className='whitespace-pre-line text-[0.9rem]'>
                        Nobody wants to read training docs and e-learning content, and now they don’t have to.                        </p>
                    </div>
                    <div className='flex items-center justify-end gap-2'>
                        <img src="https://cdn.prod.website-files.com/66e1917cda150940c2817f77/66e1917cda150940c28180a3_arrow-right.png" className='w-5 h-6' />
                        <p className='text-[#a34cdb] text-[1.2rem] font-medium'>Learn more</p>
                    </div>
                </div>)}
            </a>
            <a onClick={() => ToggleSection("localization","https://res.cloudinary.com/diqmvbeg6/video/upload/q_auto/v1727421678/WebFlow/zscnxyrjlqtmial5j3kr.mp4")} className='relative flex flex-col cursor-pointer text-left py-3 w-full items-stretch justify-between border-b border-b-gray-300'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[1.25rem]'>Localization</h2>
                    <div className='flex items-center justify-start'>
                        {openSection === "localization" ? <ChevronUp/> : <ChevronDown/>}
                    </div>
                </div>
                {openSection === "localization" && (<div className='w-full overflow-hidden cursor-pointer'>
                    <div className='p-4'>
                        <p className='whitespace-pre-line text-[0.9rem]'>
                        Translate ads, courses, video podcasts and more to reach your global audience. Say sayonara to dubbing and bonjour to AI voice and lip sync.                        </p>
                    </div>
                    <div className='flex items-center justify-end gap-2'>
                        <img src="https://cdn.prod.website-files.com/66e1917cda150940c2817f77/66e1917cda150940c28180a3_arrow-right.png" className='w-5 h-6' />
                        <p className='text-[#a34cdb] text-[1.2rem] font-medium'>Learn more</p>
                    </div>
                </div>)}
            </a>
        </div>
    </div>
  )
}

export default ThreepeopleCard