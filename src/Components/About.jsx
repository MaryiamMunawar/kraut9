import Frame from '../assets/Frame.png';

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
      <div className='mt-10 '>
        <button className='bg-gradient-to-r from-[#F0F8FB] to-[#28C6F3] rounded-full min-w-[343px] min-h-[58px] text-[#F0F8FB] opacity-[100%]'>
          CTA
        </button>
      </div>
      

      {/* Image */}
      <div className='px-[74px] mt-[80px]'>
        <img src={Frame} alt="center img" />
      </div>
    </div>
  );
}

export default About;
