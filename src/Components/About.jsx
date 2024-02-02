import Frame from '../assets/Frame.png';
import icons from '../assets/icons.png';

function About() {
  return (
    <div className="mt-8 px-4">
      {/* Heading and Paragraph */}
      <div>
        <p className="text-[#27282A] font-extrabold text-2xl leading-[30.24px] font-sans">
          Our Mission
        </p>
        <p className="text-sm text-[#27282A] font-inter leading-[22px] pt-2">
          Kraut 9's mission is to revolutionize classical industries and drive unparalleled growth by harnessing the power of Non-Fungible Tokens. We create innovative solutions that elevate brands, increase sales, and generate new avenues of revenue. We specialize in bespoke NFT-based royalty programs and seamlessly merge the physical and digital realms through product-linked NFTs. Kraut 9 aims to develop new revenue streams, establish brand authority using web3 technologies, and guide businesses through the world of NFTs.
          <br />
          <br />
          Visual artists benefit from our help to monetize their work quickly and even participate on resales. Imagine a community of loyal fans you can directly interact with. Imagine a significant increase in popularity. Worldwide! That is where Kraut 9 will take you.
          <br/>
          <br/>
          We work closely with our clients, customizing strategies to maximize growth potential and demystify complexities. Kraut 9 welcomes businesses to a realm where classical industries and NFTs converge, shattering traditional marketing boundaries and embracing the future of commerce.
          <br/>
          <br />
          Together, we redefine success in a rapidly evolving world.
        </p>
      </div>

      {/* CTA Button */}
      <div className='mt-10 px-4 gap-4'>
        <button className='bg-gradient-to-r from-[#F0F8FB] to-[#28C6F3] rounded-full min-w-[343px] min-h-[58px] text-[#F0F8FB] opacity-[100%]'>
          CTA
        </button>
      </div>

      {/* Image */}
      <div className='px-[74px] mt-[80px]'>
        <img src={Frame} alt="center img" />
      </div>

      {/* Other Sections */}
      <div className='flex  mt-[30px] px-[52px] '>
        <div className='text-[#27282A] font-sans text-base leading-[20.16px]'>
          <ul className="flex gap-x-[30px]  ">
            <li className='min-w-[80px]'>Collections</li>
            <li className='min-w-[80px]'>Use Cases</li>
            <li className='min-w-[80px]'>Team</li>
          </ul>
        </div>
      </div>

      <div className='mt-[40px] px-[89px]'>
        <img src={icons} alt="logos" />
      </div>

      {/* Mint Button */}
      <div className='mt-[34px] px-4 gap-[10px]'>
        <button className='bg-gradient-to-r from-[#F0F8FB] to-[#28C6F3] rounded-[30px] min-w-[343px] min-h-[50px] text-[#F0F8FB] opacity-[100%]'>
          Mint
        </button>
      </div>

      {/* Horizontal Line */}
      <div className='px-4'>
        <hr className="mt-[42px] border-[1px] border-[#27282A] opacity-[10%]"/>
        <p className=' pt-5 flex justify-center font-sans  text-sm text-[#27282A] opacity-[50%]'>
            Privacy Policy    •    Terms
        </p>
        <p className='pb-[36px] pt-5 flex justify-center font-sans  text-sm text-[#27282A] opacity-[50%]'>© 2023 – Kraut9 – All Rights Reserved</p>
      </div>

      
        
      
    </div>
  );
}

export default About;
