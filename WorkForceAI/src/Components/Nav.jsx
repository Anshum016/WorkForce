import React, { useState } from 'react';
import { Link } from 'react-scroll';
import WORKFORCEAI from '../assets/WORKFORCEAI.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Mobile menu content
  const content = (
    <div className='lg:hidden absolute top-16 left-0 w-full bg-gray-950 z-40'>
      <ul className='text-center text-xl p-6'>
        <Link spy={true} smooth={true} to="Home" onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About" onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
        </Link>
        <Link spy={true} smooth={true} to="Tools" onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Tools</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact" onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <>
      <div className='flex items-center justify-between w-full px-6 py-4 text-amber-50 z-50 relative'>
        {/* Logo */}
        <Link to="Home" spy={true} smooth={true} duration={500} className="cursor-pointer">
        <img src={WORKFORCEAI} alt="Workforce AI Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-10 font-bold'>
          <ul className='flex gap-30'>
            <Link spy={true} smooth={true} to="Home">
              <li className='hover:text-red-400  border-slate-600 cursor-pointer'>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className='hover:text-red-400  border-slate-600 cursor-pointer'>About</li>
            </Link>
            <Link spy={true} smooth={true} to="Tools">
              <li className='hover:text-red-400  border-slate-600 cursor-pointer'>Tools</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className='hover:text-red-400  border-slate-600 cursor-pointer'>Contact</li>
            </Link>
          </ul>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className='block lg:hidden text-2xl z-50' onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Show mobile menu if clicked */}
      {click && content}
    </>
  );
};

export default Nav;
