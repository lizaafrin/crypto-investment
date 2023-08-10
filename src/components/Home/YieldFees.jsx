import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const YieldFees = () => {

    useEffect(()=>{
        Aos.init({ duration: 3000 });
    },[])
    return (
        <div className='bg-white w-full flex items-center justify-center p-8 min-h-screen flex-col md:flex-row gap-4'>
            <div className='md:w-1/2 flex flex-col items-center justify-center mb-4'>
                <p className='text-center text-black font-bold text-5xl sm:text-7xl sm:mb-0'>High Yield Low Fees</p>
                <p className='text-center mt-4 text-gray-400 text-lg w-90'>Investing in crypto made simple, affordable and rewarding for all. High yield and low fees, always on autopilot.</p>
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement="top-bottom"
            className='max-w-[400px] w-[90vw] flex flex-col gap-6'>
                <div className='card bg-gradient-to-b from-[#191F30] to-[#101625] rounded-2xl p-2 h-[200px]'>
                    <div className='flex'>
                        <div className='flex flex-grow flex-row items-center'>
                            <img src="https://www.rld.finance/usdc-logo.svg" alt="" className='inline mr-3 h-12 w-12' />
                            <p className='inline text-2xl font-bold text-white'>USDC</p>
                        </div>
                        <div>
                            <a href="https://app.hop.exchange/#/pools?token=USDC" className='inline-flex flex-row rounded-lg bg-gradient-to-r from-black to-[#10141F] p-2 border-solid border-black border-2 hover:border-purple-500 items-center'>
                                <img className='font-thin mr-3 w-6 h-6' src="https://www.rld.finance/hop-logo.svg" alt="" />
                                <p className='text-sm text-white slim-text'>HOP</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex my-6'>
                            <p className='min-w-[5rem] h-full w-full text-4xl sm:text-5xl text-white'>8.27% APY</p>
                        </div>
                    </div>


                </div>
                <div className='card bg-gradient-to-b from-[#191F30] to-[#101625] rounded-2xl p-2 h-[200px]'>
                    <div className='flex'>
                        <div className='flex flex-grow flex-row items-center'>
                            <img src="https://www.rld.finance/_next/image?url=%2Fgns-logo.png&w=64&q=75" alt="" className='inline mr-3 h-12 w-12' />
                            <p className='inline text-2xl font-bold text-white'>GNS</p>
                        </div>
                        <div>
                            <a href="https://app.hop.exchange/#/pools?token=USDC" className='inline-flex flex-row rounded-lg bg-gradient-to-r from-black to-[#10141F] p-2 border-solid border-black border-2 hover:border-purple-500 items-center'>
                                <img className='font-thin mr-3 w-6 h-6' src="https://www.rld.finance/_next/image?url=%2Fgns-logo.png&w=64&q=75" alt="" />
                                <p className='text-sm text-white slim-text'>Gains Network</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex my-6'>
                            <p className='min-w-[5rem] h-full w-full text-4xl sm:text-5xl text-white'>3.83% APY</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default YieldFees;