import React from 'react';
import icons from '../assets/icons.png';

function Footer() {
  return (
    <div>
      <div className='flex mt-[30px] px-[53px]'>
        <div className='text-[#27282A] font-sans text-base leading-[20.16px]'>
          <ul className="flex gap-x-[30px]">
            <li className='min-w-[80px]'>Collections</li>
            <li className='min-w-[80px]'>Use Cases</li>
            <li className='min-w-[80px]'>Team</li>
          </ul>
        </div>

        <div className='pt-[40px] px-[88px]'>
          <img src={icons} alt="logos" />  
        </div>
      </div>

      {/* Mint Button */}
      <div className='mt-[34px] px-4'>
        <button className='bg-gradient-to-r from-[#F0F8FB] to-[#28C6F3] rounded-full min-w-[343px] min-h-[50px] text-[#F0F8FB] opacity-[100%]'>
          Mint
        </button>
      </div>

      {/* Horizontal Line */}
      <div className='px-4'>
        <hr className="mt-[42px] border-[1px] border-[#27282A] opacity-[10%]" />
        <p className='pt-5 flex justify-center font-sans text-sm text-[#27282A] opacity-[50%]'>
          Privacy Policy • Terms
        </p>
        <p className='pb-[36px] pt-5 flex justify-center font-sans text-sm text-[#27282A] opacity-[50%]'>© 2023 – Kraut9 – All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
