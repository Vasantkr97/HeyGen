import React, { useState } from 'react'
import ContentListCard from './ContentListCard';

const ContentCreators = () => {

  return (
    <section className='z-11 relative h-full'>
      <div className='Padding_Global w-full h-full pl-6 pr-6'>
        <div className='ContainerLarge w-full h-full mx-auto'>
          <div className='Padding_section_medium pt-16 pb-16 '>
            <div className='Avtar_Problem_wrapper max-w-[65rem] mx-auto '>
              <div className='avatar-problem-header flex flex-col mx-auto max-w-full items-center justify-start gap-6'>
                  <h2 className='font-normal gg:text-[2.2rem] ll:text-[2rem] gg:leading-[1.2rem] ss:text-[1.675rem] ss:leading-[1.4] ss:min-w-[40px]'>
                    Video for content creators like you. 
                  </h2>
                  <p className='text-center text-[1rem] whitespace-pre-line '>
                  Whatever you do, whoever you work with — here’s how HeyGen can help.</p>
              </div>
              <div className='Avatar_problem_tabs flex mx-auto mt-[4rem] items-stretch justify-start  '>
                <ContentListCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentCreators