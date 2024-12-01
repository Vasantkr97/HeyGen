import React, { useState } from 'react'
import AdvatiseCard from './AdvatiseCard'
import heygenlogo  from '../assets/heygenlogo.svg'
import { AlignJustify, X, ChevronDown} from 'lucide-react';
import { NAV_ITEMS,BUTTONS, MOBILE_MENU } from '../contants/NavbarsItem';

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => {
        setisOpen(!isOpen)
    }

  return (
    <section className='sticky top-0 left-0 right-0 z-50 m-4 pb-4 md:pb-1 bg-white'>
        <div>
            <AdvatiseCard />
            <div className='z-0 p-2 md:p-1 m-4'>
            <div className='w-full h-full mx-auto'>
                <div className='flex flex-1 justify-between items-center gap-2'>
                    <div className='flex flex-row justify-center items-center gap-12'>
                        <a href="/" className='flex-shrink-0'>
                            <img className='max-w-full h-auto inline-block align-middle ' src={heygenlogo} alt="heygenLogo" />
                        </a>
                        <div className='hidden lg:flex flex-row space-x-6 lg:space-x-6 text-base md:text-sm'>
                            {
                                NAV_ITEMS.map((item, index) => (
                                    <a key={index} href={item.href} className='flex justify-between items-center'>
                                        <h1>{item.title}</h1> 
                                        {item.title && <button className='text-gray-400 text-sm'><ChevronDown className='w-5 h-4'/></button>}
                                    </a>
                                ))
                            }
                                
                        </div>
                    </div>
                    
                    {/* <nav className='h-[90svh] absolute bg-navbarmid overflow-auto'>
                        <div className='flex gap-2 justify-start items-center md:flex-col md:items-start'>
                            <div className='w-full static text-left z-index-900 ml-auto mr-auto'>
                                <div className='align-top text-gray-800 text-left mx-auto p-5 relative'>
                                    <p>Products</p>
                                </div>
                            </div>
                        </div>
                    </nav> */}
                    <div className='flex justify-center items-center ml-auto mr-4 gap-2'>
                        <a className={BUTTONS.contactSales.className} href="#">{BUTTONS.contactSales.text}</a>
                        <a className={BUTTONS.signUp.className} href="#">{BUTTONS.signUp.text}</a>
                        <a className={BUTTONS.login.className} href="#">{BUTTONS.login.text}</a>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='focus:outline-none'>
                            {isOpen ? <X/> : <AlignJustify />}
                        </button>
                    </div>
                </div>
            </div>
            </div>
            {isOpen && (<div className='text-base md:text-xs p-6'>
                            <div className='md:hidden backdrop-blur-lg'>
                                <div className='flex flex-col space-y-6'>
                                    {NAV_ITEMS.map((item,index) => (
                                        <a key={index} href="#" className='flex justify-between'>
                                            <h1>{item.title}</h1> 
                                            {item.hasDropdown && <ChevronDown />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-10 md:hidden backdrop-blur-lg'>
                                <button className='px-5 py-2.5 bg-signup text-white rounded-full hover:bg-bgsignupfree trasition-all 
                            duration-300 ease-in-out'>Get Started for free</button>
                                <div className='mt-4'>
                                    <button className='mt-2 pl-4 bg-bglogin rounded-full py-2.5 px-5 hover:bg-primary hover:text-white'>Login</button>
                                </div>
                            </div>
                        <div>
                        </div>
                    </div>) }
        </div>
    </section>
  )
}

export default Navbar