import { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import NavItem from '../components/navItem';
import close from '../assets/images/icon-close.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
const Navbar = () => {

 const navItems = ['Product','Features', 'Pricing','Login']

 const [openMenu, setopenMenu] = useState(false)


  return (
    <nav className='flex flex-row gap-4 py-10 px-5 lg:px-20 md:mt-2 md:px-25 
    justify-between relative dt:top-10 items-center z-1000 font-barlow font-bold '>
        <a href='#'><img src={Logo} alt='logo' /></a>
        <ul className={`absolute md:relative top-25 md:top-0 left-5.5 lg:left-[-1.5em]  md:left-0 z-100
        gap-5 flex  w-[330px] h-[250px] md:w-75 md:h-auto  items-center justify-center md:justify-normal
         md:gap-7 font-medium shadow-md bg-base-100 md:shadow-none md:bg-transparent  ${openMenu ?  'flex-col md:flex-row' : ' md:flex md:flex-row hidden'} `}>
        {navItems.map((item, index) => (
        <NavItem key={index} text={item} />
         ))}
        </ul>
        <button onClick={() => setopenMenu(!openMenu)} className='md:hidden'>
            <img src={openMenu ?  close : hamburger} alt='menu' />
        </button>
    </nav>
  )
}

export default Navbar