import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Banner = () => {
    useEffect(()=>{
        Aos.init({ duration: 3000 });
    },[])
    return (
        <div className='bg-indigo-600 bg-opacity-1 h-full'>
            <div className='text-white w-full bg-gradient-to-r from-[#3F37AA] to-[#8F18F7]'>
                <div className='bg-gradient-to-b from-[#3F37AA] to-[#8F18F7]'>
                    <div className='w-full min-h-full flex flex-col items-center z-10 relative pb-40'>
                        <h1 className='font-bold text-6xl pt-8 text-center'>Crypto <span className='text-[#E9CAFF]'>Investment</span></h1>
                        <p className='slim-text text-white text-center mt-5 sm:mt-10 text-xl sm:text-2xl'>Grow Your Crypto Investments Like a Pro,<br />Hassle-Free.</p>
                        <div className='text-center'>
                            <button className='text-center p-3 px-10 text-white mt-5 sm:mt-10 rounded-3xl text-l sm:text-xl bg-gray-900 hover:bg-slate-800'><Link to='/transaction'>Get Started</Link></button>
                        </div>
                        <p className='p-10 sm:p-0 sm:mt-10 text-[#E9CAFF] text-center'>CRI (💯,💰) is your ultimate partner for boosting yields on Arbitrum. <br />
                            Our platform helps you grow your bags with top Crypto Investment tokens, fantastic vaults,<br />
                            and popular assets like $ETH, $USDC, $BFR, $GMX, and $GLP.</p>
                    </div>

                </div>
            </div>
            <div data-aos='fade-up'
            data-aos-anchor-placement="top-bottom" className='bg-[#232736] w-full flex items-center justify-center p-8 h-[85vw] max-h-[65vw] sm:h-[60vw] sm:max-h-[55rem] flex-col relative'>
                <img src="https://www.rld.finance/interface.jpeg" className='border-4 w-[95vw] sm:w-[80vw] sm:max-w-[70rem] shadow-lg rounded-3xl border-black  absolute top-[-7em]' />
            </div>
        </div>
    );
};

export default Banner;