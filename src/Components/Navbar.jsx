import React from 'react';
import Menu from '../assets/menu.svg';
import Rectangle from '../assets/Rectangle.png';

function Navbar() {
  return (
    <div className='grid grid-cols-3 justify-between items-center px-4'>
      <div className='flex items-center pt-[38px] pl-4'>
        <img src={Menu} alt="Menu" />
      </div>
      <span className='flex items-center justify-center pt-[10px]'>
        <img src={Rectangle} alt="Rectangle" />
      </span>
      <span className='flex items-center justify-end pt-[41px]  font-extrabold text-[#28C6F3]'>Mint</span>
    </div>
  );
}

export default Navbar;
