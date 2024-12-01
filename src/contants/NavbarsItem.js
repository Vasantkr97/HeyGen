// constants.js

export const NAV_ITEMS = [
    {
      title: 'Products',
      href: '#',
      hasDropdown: true,
    },
    {
      title: 'Use Cases',
      href: '#',
      hasDropdown: true,
    },
    {
      title: 'Resources',
      href: '#',
      hasDropdown: true,
    },
    {
      title: 'Company',
      href: '#',
      hasDropdown: true,
    },
    {
      title: 'Pricing',
      href: '#',
      hasDropdown: false,
    },
  ];
  
  export const BUTTONS = {
    contactSales: {
      text: 'Contact Sales',
      href: '#',
      className: 'hidden lg:inline relative mx-auto text-black py-2.5 px-5 text-sm',
    },
    signUp: {
      text: 'Sign up for free',
      href: '#',
      className:
        'inline-flex text-white bg-signup rounded-full justify-center text-center cursor-pointer font-medium hover:bg-bgsignupfree md:py-2 py-3 md:px-5 px-6 transition-all duration-300 ease-in-out leading-normal text-sm md:text-base',
    },
    login: {
      text: 'Login',
      href: '#',
      className:
        'md:py-2 py-3 md:px-5 px-6 bg-bglogin hover:bg-primary hover:text-white rounded-full text-sm md:text-base hidden md:inline',
    },
  };
  
  export const MOBILE_MENU = {
    getStarted: {
      text: 'Get Started for free',
      className: 'px-5 py-2.5 bg-signup text-white rounded-full hover:bg-bgsignupfree transition-all duration-300 ease-in-out',
    },
    login: {
      text: 'Login',
      className: 'mt-2 pl-4 bg-bglogin rounded-full py-2.5 px-5 hover:bg-primary hover:text-white',
    },
  };
  