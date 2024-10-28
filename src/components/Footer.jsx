import React from 'react'

const Footer = () => {
  return (
    <section className='z-10 relative bg-[#f1f5f7]'>
        <div className='Global_Padding w-full -h-full px-6'>
            <div className='ContainerLarge mx-auto h-full w-full'>
                <div className='padding_Section+_Medium pt-24 pb-24'>
                    <div className='Footer_Flex flex gap-8 flex-row lgg:flex-row mdd:flex-col smm:flex-col'>
                        <div className='Footer_Flex_left overflow-hidden relative flex h-full max-w-[18.6rem] w-full items-end justify-center rounded-[1rem] bg-[#b570e2] '>
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e4920729c590c4e43a4a1e_footer-avatars.gif" 
                                className='block mx-auto max-h-full h-100 max-w-full w-full '
                                />
                            <div className='absolute mb-[1rem] '>
                                <a className='transition duration-300 ease-in-out font-medium py-2.5 px-6 rounded-[10rem] text-center text-white bg-black hover:bg-[#b570e2]  '>
                                        Get started for free
                                </a>
                            </div>
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a3528054f620c6ba541a_heygen-logotype-alt.svg" 
                                className='inset-0 top-0 left-0 right-auto bottom-auto absolute block mt-[1.5rem] ml-[1rem] w-[6.25rem] '
                                />
                        </div>
                        <div className='Footer_Flex_Right flex flex-1 flex-col gap-y-6'>
                            <div className='footer_Right_Top grid grid-cols-4 mdd:grid-cols-4 auto-cols-fr items-start justify-start  '>
                                <div className='footer_RIght_Top_flex  flex flex-col max-w-[13.25rem] pr-[1.25rem] gap-4  '>
                                    <p className='text-[1.25rem] font-medium'>Use Cases</p>
                                    <div className='flex flex-col'>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Agencies</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Marketing</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Sales</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Learning & Development</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Product Overviews</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Scaled Outreach</a>
                                    </div>
                                </div>
                                <div className='footer_RIght_Top_flex  flex flex-col max-w-[13.25rem] pr-[1.25rem] gap-4  '>
                                    <p className='text-[1.25rem] font-medium'>Features</p>
                                    <div className='flex flex-col'>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>AI Avatars</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>AI Voices</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Video Translate</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Personalized Video</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Interactive Avatar</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Zapier</a>
                                    </div>
                                </div>
                                <div className='footer_RIght_Top_flex  flex flex-col max-w-[13.25rem] pr-[1.25rem] gap-4  '>
                                    <p className='text-[1.25rem] font-medium'>Resources</p>
                                    <div className='flex flex-col'>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>API Documentation</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>FAQ</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Blog</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Tutorial</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>weekly Webinar</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Case Studies</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Help Center</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Alternative</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Affiliate Program</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Status</a>
                                    </div>
                                </div>
                                <div className='footer_RIght_Top_flex  flex flex-col max-w-[13.25rem] pr-[1.25rem] gap-4  '>
                                    <p className='text-[1.25rem] font-medium'>Company</p>
                                    <div className='flex flex-col'>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>About Us</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Careers</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Privacy Policy</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Terms of Service</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Security Portal</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Ethics</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Moderation Policy</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Coolie Preference</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Contact</a>
                                        <a className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>Halloween Contest 2024</a>

                                    </div>
                                </div>
                            </div>
                            <div className='Footer_Right_bottom flex lgg:flex-row mdd:flex-col items-center justify-start lgg:gap-[3rem] mdd:gap-[1.5rem] '>
                                <div className='flex gap-3'>
                                    <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbc45f6dde35184e07314_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif" 
                                        className='inline-block align-middle max-h-[1.8rem] h-full max-w-[5.1rem] w-full mix-blend-multiply '
                                        />
                                    <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbc4551fee2df87e70b26_65647d339c017f844ae8fe20_c2pa%201.avif" 
                                    className='inline-block align-middle max-w-[2.5rem] w-full max-h-[2.1875rem] '
                                    />
                                </div>
                                <div className='flex max-w-[19.5rem] w-full flex-col items-start justify-start lgg:items-start lgg:justify-start smm:items-center smm:justify-center'>
                                    <p className='text-[0.7rem] text-center '>@Copyright HeyGen</p>
                                    <p className='text-[0.7rem] text-center '>12130 Millennium Drive Suite 300, Los Angeles, CA 90094</p>
                                </div>
                                <div className='flex items-center justify-start gap-3'>
                                    <a className='inline-block max-w-full '>
                                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd699b20eb258418695e_facebook.avif" 
                                            className='inline-block align-middle h-full max-h-[1.5rem] w-full max-w-[1.5rem] '
                                            />
                                    </a>
                                    <a className='inline-block max-w-full '>
                                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd9051fee2df87e82563_linkedin.avif" 
                                            className='inline-block align-middle h-full max-h-[1.5rem] w-full max-w-[1.5rem] '
                                            />
                                    </a>
                                    <a className='inline-block max-w-full '>
                                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd826ef9246156379c4f_youtube.avif" 
                                            className='inline-block align-middle h-full max-h-[1.5rem] w-full max-w-[1.5rem] '
                                            />
                                    </a>
                                    <a className='inline-block max-w-full '>
                                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd8219d2cec985edaef9_x.avif" 
                                            className='inline-block align-middle h-full max-h-[1.5rem] w-full max-w-[1.5rem] '
                                            />
                                    </a>
                                    <a className='inline-block max-w-full '>
                                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd69184b4ec374b11ff2_Discord.avif" 
                                            className='inline-block align-middle h-full max-h-[1.5rem] w-full max-w-[1.5rem] '
                                            />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer