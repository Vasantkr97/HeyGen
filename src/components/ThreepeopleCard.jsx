import React from 'react'

const ThreepeopleCard = () => {
  return (
    <div className="bottom-1 left-1 lg:bottom-4 lg:left-4 flex items-center justify-center z-30 backdrop-blur-[40px] bg-[#ffffff1a] rounded-xl min-w-[23.25rem] max-w-[26.25rem] min-h-[15rem] mb-10 ml-10 p-2  absolute inset-auto sm:max-w-[19rem] sm:min-h-[12rem] sm:mb-4 sm:ml-4">
        <div className='bg-white rounded-lg h-full min-h-[15rem] p-6 sm:min-h-[12rem] sm:p-4 md:min-h-[11rem]'>
            <div className='relative'>
                <div className='flex gap-4 md:gap-6 justify-start'>
                    <img 
                        src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db342e29294df7682b40e8_Avatar%201.avif" 
                        alt="Avatar 1" 
                        className='w-10 h-10 rounded-full border-2 border-green-600'
                    />
                    <img 
                        src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66eb0a35a235b95dd923f95a_headshot.webp" 
                        alt="Avatar 2" 
                        className='w-10 h-10 rounded-full'
                    />
                    <img 
                        src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66d3fc1ed7d2e1a016725b5f_Mask_group-1-removebg-preview%20(1).avif"                
                        alt="Avatar 3" 
                        className='w-10 h-10 rounded-full'
                    />
                </div>
                <div className='inline-block relative overflow-hidden border-t-4 border-gray-200 mt-4 font-normal'>
                    <div className='text-left mt-4 pb-6'>
                        <p>
                            Hey there! Welcome to HeyGen, where you can create and translate videos without a camera or crew.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThreepeopleCard