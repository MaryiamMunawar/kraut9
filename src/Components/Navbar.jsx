import React from 'react';
import Menu from '../assets/menu.svg';
import Rectangle from '../assets/Rectangle.png';

function Navbar() {
  return (
    <div className='grid grid-cols-3 justify-between items-center px-4'>
      <div className='pt-[38px]'>
        <img src={Menu} alt="" />
      </div>
      <div className='pt-[10px]'>
        <img src={Rectangle} alt="" />
      </div>
      <div className='pt-[41px] flex justify-center items-center'>
        <div>
          <span className='font-extrabold text-[#28C6F3]'>Mint</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
