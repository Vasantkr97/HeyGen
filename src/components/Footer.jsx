import React from 'react'
import { footerData } from '../contants/FooterData'


const Footer = () => {

  return (
    <section className='z-10 relative bg-[#f1f5f7]'>
        <div className='Global_Padding w-full -h-full px-6'>
            <div className='ContainerLarge mx-auto h-full w-full'>
                <div className='padding_Section+_Medium pt-24 pb-24'>
                    <div className='Footer_Flex flex gap-8 flex-row lgg:flex-row mdd:flex-col smm:flex-col'>
                        <div className='Footer_Flex_left overflow-hidden relative flex h-full max-w-[18.6rem] w-full items-end justify-center rounded-[1rem] bg-[#b570e2] '>
                            <img src={footerData.logo} 
                                className='block mx-auto max-h-full h-100 max-w-full w-full '
                                alt={footerData.logoAlt}
                                />
                            <div className='absolute mb-[1rem] '>
                                <a className='transition duration-300 ease-in-out font-medium py-2.5 px-6 rounded-[10rem] text-center text-white bg-black hover:bg-[#b570e2]  '>
                                    { footerData.ctaText }
                                </a>
                            </div>
                            <img src={footerData.logo2}
                                className='inset-0 top-0 left-0 right-auto bottom-auto absolute block mt-[1.5rem] ml-[1rem] w-[6.25rem] '
                                alt='logo'
                                />
                        </div>
                        <div className='Footer_Flex_Right flex flex-1 flex-col gap-y-6'>
                            <div className='footer_Right_Top grid grid-cols-4 mdd:grid-cols-4 auto-cols-fr items-start justify-start  '>
                                {footerData.footerSections.map((section, index) => (
                                    <div key={index} className='footer_RIght_Top_flex  flex flex-col max-w-[13.25rem] pr-[1.25rem] gap-4  '>
                                        <p className='text-[1.25rem] font-medium'>{section.title}</p>
                                        <div className='flex flex-col'>
                                            {
                                                section.links.map((link, index) => (
                                                    <a key={index} className='text-[0.8rem] pb-[0.25rem] pt-[0.25rem] flex-auto text-[#000] box-border font-normal'>{link}</a>
                                                ))
                                            }
                                    </div>
                                </div>))
                                }
                            </div>

                            <div className='Footer_Right_bottom flex lgg:flex-row mdd:flex-col items-center justify-start lgg:gap-[3rem] mdd:gap-[1.5rem] '>
                                <div className='flex gap-3'>
                                    {
                                        footerData.appLogos.map((link, index) => (
                                            <img key={index} src={link}
                                                className='inline-block align-middle max-h-[1.8rem] h-full max-w-[5.1rem] w-full mix-blend-multiply '
                                            />
                                        ))
                                    }
                                </div>
                                <div className='flex max-w-[19.5rem] w-full flex-col items-start justify-start lgg:items-start lgg:justify-start smm:items-center smm:justify-center'>
                                    <p className='text-[0.7rem] text-center '>{footerData.copyrightText}</p>
                                    <p className='text-[0.7rem] text-center '>{footerData.address}</p>
                                </div>
                                <div className='flex items-center justify-start gap-3'>
                                    {footerData.socialIcons.map((link, index) => (
                                        <a className='inline-block max-w-full '>
                                            <img src={link} 
                                                className='inline-block align-middle h-full max-h-[1.5rem] w-full max-w-[1.5rem] '
                                            />
                                        </a>
                                    ))}
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