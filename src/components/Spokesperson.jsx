const Spokesperson = () => {
    return (
      <section className='mt-28 mdd:mt-16'>
        <div className='padding global w-full h-full pl-4 pr-4 md:pl-5 md:pr-5 sm:pl-3 sm:pr-3 '>
          <div className="container-large mr-auto ml-auto ">
            <div className="padding-section-medium  pb-12 md:pt-16 md:pb-16 lg:pb-28">
              <div className="home-meet_flex flex flex-row justify-between gap-x-12 gap-y-12 sm:flex-col sm:gap-x-6 sm:gap-y-6 mdd:flex-col lgg:flex-row lgg:gap-x-20 lgg:gap-y-24 lgg:justify-center lgg:items-start">
                <div className="block grid-cols-2 w-full max-w-1/2 gap-[0.675rem] auto-rows-auto lgg:max-w-full sm:max-w-full">
                  <img 
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f293b4a47fd8302f5dd681_Frame%20684.webp" 
                    alt="Spokesperson Avatar"
                    className="block w-full max-w-full sm:inline-block lg:align-middle lg:max-w-full lg:inline-block sm:max-w-full sm:h-auto"
                  />
                </div>
                <div className="home-meet_content w-full flex flex-col items-start mr-auto lgg:max-w-full smm:relative">
                  <h2 className="text-[2.5rem] leading-none font-medium mb-[10px] mt-8 sm:text-[1.75rem] lgg:mt-24 mdd:mt-4">
                    Meet Your new spokesperson.
                  </h2>
                  <div className="margin_top my-2 sm:my-1 lgg:my-2"></div>
                  <div className="antialiased box-border">
                    <p className="text-lg leading-6 lgg:leading-7 lgg:text-base sm:text-base">
                      It's you. Well, an AI version of you that speaks 175 languages, moves naturally, and always follows the script. Create your own avatar with just a webcam, or use one of our avatars. Change voice, clothes, or background with a click.
                    </p>
                  </div>
                  <div className="mt-4 mb-4 lgg:mt-[1.75rem] sm:mt-[1.25rem]">
                    <a href="#" className="flex cursor-pointer flex-col items-center justify-center bg-black hover:bg-primary text-white text-center rounded-full px-6 py-3.5 md:px-5 md:py-2.5 font-medium transition-all duration-300 ease-in-out">
                      Signup up for free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Spokesperson;
  