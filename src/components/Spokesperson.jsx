
const Spokesperson = () => {
  return (
    <section className='mt-28 mdd:mt-16'>
        <div className='padding global w-full h-full pl-6 pr-6 md:pl-5 md:pr-5 sm:pl-4 sm:pr-4 '>
            <div className="container-large mr-auto ml-auto ">
                <div className="padding-section-medium  pb-12 md:pt-16 md:pb-16 lg:pb-28">
                    <div className="home-meet_flex lg:gap-24 lg:flex lg:flex-row lg:grid-rows-auto lg:grid-cols-2 lg:grid-auto-cols-fr lg:justify-between lg:place-items-center lg:place-content-stretch lg:justify-items-stretch lgg:flex lgg:flex-col lgg:gap-12 lgg:justify-center lgg:items-start mdd:flex mdd:flex-col mdd:gap-12 smm:flex-col smm:gap-8">
                       <div className="block grid-cols-2 w-full max-w-1/2 gap-[0.675rem] auto-rows-auto lgg:max-w-full">
                            <img 
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f293b4a47fd8302f5dd681_Frame%20684.webp" 
                                alt
                                className="block w-full max-w-full sm:inline-block lg:align-middle lg:max-w-full lg:inline-block"
                                 />
                        </div>
                        <div className="home-meet_content w-full flex flex-col items-start mr-auto lgg:flex lgg:max-w-full lgg:items-start lgg:justify-start lgg:flex-col mdd:w-full mdd:items-start mdd:justify-start smm:relative">
                            <h2 class="text-[4rem] leading-none font-medium mb-[10px] mt-24 smm:mt-8 lgg:mt-24 mdd:mt-4 smm:text-[1.75rem] mdd:text-[3rem] lgg:text-[3rem] ">
                                Meet Your new spokesperson.
                            </h2>
                            <div className="margin_top m-2 smm:m-1.25 mdd:m-1.5 lgg:m-2"></div>
                            <div className="antialiased box-border">
                                <p className="text-lg leading-6 lgg:leading-7 lgg:text-base mdd:mr-20 ">
                                    Its you. Well, an AI version of you that speaks 175 languages, moves naturally, and always follows the script. Create your own avatar with just a webcam, or use one of our avatars. Change voice, clothes, or background with a click.
                                </p>
                            </div>
                            <div className="mt-4 mb-4 mr-4 lgg:mt-[1.75rem] mdd:mr-[1.25rem] mdd:mb-[1.25rem]mdd:mt-[1.25rem]  lgg:mr-[1.5rem] lgg:mb-[1.5rem] smm:mt-[1.25rem] smm:mr-[1.25rem] smm:mb-[1.25rem]">
                                <a href="#" className="flex cursor-pointer flex-col items-start justify-start  mdd:justify-center mdd:items-start bg-black hover:bg-primary text-white text-center rounded-full lg:px-5 lg:py-2.5 px-6 py-3.5 md:px-5 md:py-2.5 font-medium transition-all duration-300 ease-in-out">Signup up for free</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Spokesperson