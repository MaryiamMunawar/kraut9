import Frame from '../assets/Frame.png';
import icons from '../assets/icons.png';
function About(){
    return(
        <>
        <div>
            {/* heading */}
            <div className="pt-[40px] min-w-[139px] min-h-[30px] pl-4">
                <p className="text-[#27282A] font-extrabold leading-[30.24px] font-sans text-2xl">Our Mission</p>
            </div>

            {/* Paragraph */}

            <div className="pt-[10px] min-w-[323px] min-h-[660px] pl-4 pr-9">
                <p className="text-sm text-[#27282A] font-inter leading-[22px]">
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

            <div className='pt-10 px-4 gap-[10px]'>
                <button className= ' bg-[#28C6F3]  rounded-full min-w-[343px] min-h-[58px] text-[#F0F8FB] opacity-[100%]'>CTA</button>
            </div>

            {/* image */}
            <div className='pl-[74px] pt-[80px]'>
                <img src={Frame} alt="center img" />
            </div>

            <div className='flex justify-between  min-w-[88px] min-h-5 px-[53px] pt-[30px]'>
                <span className='text-[#27282A] font-sans text-base leading-[20.16px]'>Collections</span>
                
                <span className='text-[#27282A] font-sans text-base leading-[20.16px]'>Use Cases</span>
                <span className='text-[#27282A] font-sans text-base leading-[20.16px]'>Team</span>

            </div>

            <div className='pt-[40px] pl-[89px]'>
                <img src={icons} alt="logos" />
            </div>
            {/* Button */}

            <div className='pt-10 px-4 gap-[10px]'>
                <button className= ' bg-[#28C6F3]  rounded-full min-w-[343px] min-h-[50px] text-[#F0F8FB] opacity-[100%]'>Mint</button>
            </div>

            <div className='w-[343px] pl-4 pt-[42px]'>
                <hr class="my-8 border-[1px] border-[#27282A] opacity-[10%]"/>
            </div>

            <div className='min-w-[157px]  pl-[109px] pt-5'>
                <p className='font-sans leading-[17.64] text-sm text-[#27282A] opacity-[50%]'>
                    Privacy Policy    •    Terms
                </p>
            </div>

        </div>
        </>
    );

}
export default About;