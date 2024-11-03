import React from 'react'
import VioletCard from './VioletCard'

const AllYouNeed = () => {

  return (
    <div className='relative'>
        <div className='padding_Global px-8 h-full w-full'>
            <div className='Container-large mx-auto h-full w-full'>
                <div className='padding_section_medium py-28 '>
                    <div className='home-words_header relative flex mx-auto max-w-[52.5rem] items-center justify-center flex-col gap-6  '>
                        <div className='mb-8'>
                            <h1 className='text-[3.5rem] leading-[1.25rem] text-center '>All you need is words.</h1>
                        </div>
                        <div className='block'>
                            <p className='text-[1.1rem] text-center mb-[10px] '>
                            Write your script (or get some help with built-in ChatGPT), and watch an avatar read it flawlessly  in one take. Need to change something? No reshoots necessary, just edit the text.                            </p>
                        </div>
                        <a className='flex cursor-pointer flex-col items-start justify-start  mdd:justify-center mdd:items-start bg-black hover:bg-[#a34cdb] text-white text-center rounded-full lg:px-6 lg:py-2.4 px-6 py-3.5 md:px-5 md:py-2.5 font-medium transition-all duration-300 ease-in-out'>
                            Get started for free
                        </a>
                    </div>
                    <div className='relative flex mx-auto mt-[4rem] items-center justify-center max-w-[58.5rem]'>
                        <img loading='lazy' src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db3eb3865c7bf15ebcb841_Frame%20652.avif" 
                            className='inline-block max-w-[53.125rem] align-middle rounded-[1rem]'
                        />
                        <div className='inset-auto absolute left-10 bottom-10 flex p-[1rem] max-w-[19.875rem] w-full items-start justify-start flex-col rounded-[1rem] bg-[#31373c] gap-2'>
                            <div className='flex items-center justify-start gap-2'>
                                <div className='flex py-[0.25rem] px-[0.5rem] items-center justify-start rounded-[0.5rem] border border-gray-600 gap-[0.25rem] '>
                                    <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66a9f771873e3f98b4b92f58_%F0%9F%8C%8E.avif"
                                        className='inline-block h-4 w-4 align-middle '
                                    />
                                    <div className='text-[1rem] text-center text-white'>
                                        Alloy
                                    </div>
                                    <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66a9f7b1c83ec334b42593b2_caret-down.webp"
                                        className='inline-block h-4 w-4 align-middle'
                                    />
                                </div>
                                <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66a9f7e706db228e205bb37f_play-circle.avif"
                                    className='inline-block h-6 w-6 align-middle'
                                />
                            </div>
                            <div className='p-[0.5rem] min-h-[9rem] w-full rounded-[0.5rem] border border-gray-600'>
                                <p className='text-[0.9rem] text-white'>
                                    Welcome to HeyGen! Give me a script to read, and make edits any time you want.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <img loading='lazy' src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66dc391e06db0a58c13ee13e_texture%203.avif" 
            className='z-[-1] w-full h-[45] inline-block absolute align-middle'
        /> */}
    </div>
  )
}

export default AllYouNeed