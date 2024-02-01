import React from 'react';
import Menu from '../assets/menu.svg';
import Rectangle from '../assets/rectangle.png';

function Navbar() {
  return (
    <>
     <div className='flex justify-between '>
      <div className='pt-[38px] pl-4 '>
        <img src={Menu} alt="" />
      </div>
      <div className='pt-[10px]'>
        <img src={Rectangle} alt="" />
      </div>
      <div className=' pt-[41px] flex pr-4 '>
        <span className='font-extrabold text-[#28C6F3]'>Mint</span>
      </div>
      
     </div>
    </>
  );
}

export default Navbar;
