import bicon from '../assets/bicon.png';
function Boxes() {
    return(
        <>
        {/* Box # 1 */}
        <div className="pl-4">
            <div className="custom-box border-[1px] border-[#FFCB00] w-[343px] h-[346px]  rounded-[20px]">
                <div className='pl-5 pt-5'>
                <img src={bicon} alt="box-icon" />
                </div>
                {/* heading */}
                <div className='pl-5 min-w-[235px] min-h-5 pt-5'>
                    <p className='text-[#27282A] leading-[20.16px] font-sans font-extrabold text-base'>The future of loyalty programs</p>
                </div>
                {/* paragraph */}
                <div className='px-5 min-w-[303px] min-h-[176px] pt-[10px] pb-5'>
                    <p className='text-sm font-inter leading-[22px] font-normal text-[#27282A]'>

                        With Kraut 9 you utilize NFT loyalty passes to get closer to your customers than before.
                        <br />
                        <br />
                        Sell them even on your website to raise money and get a cut of any subsequent sales, creating a brand-new source of revenue. With Kraut 9 you make this even as easy as ordering from a web shop.
                    </p>
                </div>


            </div>
        </div>

        {/* Box # 2 */}
        <div className="pl-4 pt-5">
            <div className="custom-box border-[1px] border-[#FFCB00] w-[343px] h-[280px]  rounded-[20px]">
                <div className='pl-5 pt-5'>
                <img src={bicon} alt="box-icon" />
                </div>
                {/* heading */}
                <div className='pl-5 min-w-[254px] min-h-5 pt-5'>
                    <p className='text-[#27282A] leading-[20.16px] font-sans font-extrabold text-base'>The future of authenticity proofs</p>
                </div>
                {/* paragraph */}
                <div className='px-5 min-w-[303px] min-h-[110px] pt-[10px] pb-5'>
                    <p className='text-sm font-inter leading-[22px] font-normal text-[#27282A]'>
                    With Kraut 9 you provide your customers an unfakeble and easy to transfer authenticity proof by linking an NFT to your product. You can even earn money everytime that product is being resold.

                    </p>
                </div>


            </div>
        </div>

        {/* Box # 3 */}

        <div className="pl-4 pt-5">
            <div className="custom-box border-[1px] border-[#FFCB00] w-[343px] h-[258px]  rounded-[20px]">
                <div className='pl-5 pt-5'>
                <img src={bicon} alt="box-icon" />
                </div>
                {/* heading */}
                <div className='pl-5 min-w-[232px] min-h-5 pt-5'>
                    <p className='text-[#27282A] leading-[20.16px] font-sans font-extrabold text-base'>The future of revenue streams</p>
                </div>
                {/* paragraph */}
                <div className='px-5 min-w-[303px] min-h-[88px] pt-[10px] pb-5'>
                    <p className='text-sm font-inter leading-[22px] font-normal text-[#27282A]'>
                    Kraut 9 helps you creating new revenue streams for your business with NFT sales and sales commissions every time your NFTs are being resold on secondary markets.

                    </p>
                </div>


            </div>
        </div>

        {/* Box # 4 */}

        <div className="pl-4 pt-5">
            <div className="custom-box border-[1px] border-[#FFCB00] w-[343px] h-[236px]  rounded-[20px]">
                <div className='pl-5 pt-5'>
                <img src={bicon} alt="box-icon" />
                </div>
                {/* heading */}
                <div className='pl-5 min-w-[235px] min-h-5 pt-5'>
                    <p className='text-[#27282A] leading-[20.16px] font-sans font-extrabold text-base'>The future of brand authority</p>
                </div>
                {/* paragraph */}
                <div className='px-5 min-w-[303px] min-h-[66px] pt-[10px] pb-5'>
                    <p className='text-sm font-inter leading-[22px] font-normal text-[#27282A]'>
                    You are leading the way in innovation. With Kraut 9 you will increase brand authority in your industry by leading the way into web3.
                    </p>
                </div>


            </div>
        </div>
        </>
    );
}
export default Boxes;