import React from 'react';
import Blue from '../assets/Blue.png';

function Content() {
  return (
    <>
      {/* Main content container */}
      <div className='mt-[40px] min-w-[343px] min-h-[120px] pl-4'>
        <p className='text-[#27282A] font-extrabold text-[32px] leading-[40.32px] font-sans'>
          Kraut 9 is Europe's premier NFT-based marketing agency
        </p>
      </div>

      {/* Small paragraph */}
      <div className='min-w-[323px] min-h-[48px] pl-[17px] pt-4'>
        <p className='font-normal leading-6 text-[#27282A] opacity-[67%] font-inter'>
          leading the way in revolutionizing <br />marketing with NFTs
        </p>
      </div>

      {/* Button */}
      <button className="mt-[30px] bg-gradient-to-r from-[#F0F8FB] to-[#28C6F3] rounded-full min-w-[343px] min-h-[58px] text-[#F0F8FB] opacity-[100%] mx-4">
        Email
      </button>

      {/* Image */}
      <div className='pl-4 pt-[61px]'>
        <img src={Blue} alt="image2" />
      </div>
    </>
  );
}

export default Content;
