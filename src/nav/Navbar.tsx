import { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import NavItem from '../components/navItem';
import close from '../assets/images/icon-close.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
const Navbar = () => {

 const navItems = ['Product','Features', 'Pricing','Login']

 const [openMenu, setopenMenu] = useState(false)


  return (
    <nav className='flex flex-row gap-4 py-10   px-5 lg:px-20 md:mt-2 md:px-17 
    justify-between relative dt:top-10 items-center z-1000 font-barlow font-bold '>
        <a href='#'><img src={Logo} alt='logo' /></a>
        <ul className={`absolute lg:relative top-25 md:top-50
         m-2:left-13 m-2:top-30 lg:top-0 left-5.5 lg:left-[-1.5em]  md:left-[35%] z-100
        gap-5 flex  w-[330px] h-[250px] lg:w-75 lg:h-auto  items-center justify-center lg:justify-normal
         lg:gap-7 font-medium shadow-md bg-base-100 md:shadow-none lg:bg-transparent
           ${openMenu ?  'flex-col lg:flex-row' : ' lg:flex lg:flex-row hidden'} `}>
        {navItems.map((item, index) => (
        <NavItem key={index} text={item} />
         ))}
        </ul>
        <button onClick={() => setopenMenu(!openMenu)} className='lg:hidden'>
            <img src={openMenu ?  close : hamburger} alt='menu' />
        </button>
    </nav>
  )
}

export default Navbar