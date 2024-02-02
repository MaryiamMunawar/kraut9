import React from 'react';
import bicon from '../assets/bicon.png';

function Boxes() {
  const boxData = [
    {
      title: 'The future of loyalty programs',
    //   height: '346px',
      content: 'With Kraut 9 you utilize NFT loyalty passes to get closer to your customers than before. Sell them even on your website to raise money and get a cut of any subsequent sales, creating a brand-new source of revenue. With Kraut 9 you make this even as easy as ordering from a web shop.',
    },
    {
      title: 'The future of authenticity proofs',
    //   height: '280px',
      content: 'With Kraut 9 you provide your customers an unfakeable and easy to transfer authenticity proof by linking an NFT to your product. You can even earn money every time that product is being resold.',
    },
    {
      title: 'The future of revenue streams',
    //   height: '258px',
      content: 'Kraut 9 helps you create new revenue streams for your business with NFT sales and sales commissions every time your NFTs are being resold on secondary markets.',
    },
    {
      title: 'The future of brand authority',
    //   height: '236px',
      content: 'You are leading the way in innovation. With Kraut 9 you will increase brand authority in your industry by leading the way into web3.',
    },
  ];

  return (
    <div className="pl-4 mt-5">
      {boxData.map((box, index) => (
        <div key={index} className={`mt-${index === 0 ? '0' : '5'}`}>
          <div className={`custom-box border-[1px] border-[#FFCB00] w-[343px] h-[${box.height}] rounded-[20px]`}>
            <div className='pl-5 pt-5'>
              <img src={bicon} alt="box-icon" />
            </div>
            <div className='px-5 pt-5 pb-5'>
              <p className='text-[#27282A] leading-[20.16px] font-sans font-extrabold text-base'>{box.title}</p>
              <p className='text-sm font-inter leading-[22px] font-normal text-[#27282A] pt-[10px]'>{box.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Boxes;
