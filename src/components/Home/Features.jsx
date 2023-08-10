import React, { useEffect } from 'react';

import { FaBeer, FaChartLine, FaCheckCircle, FaDollarSign, FaLaptopHouse } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(()=>{
        Aos.init({ duration: 3000 });
    },[])
    return (
        <div className='bg-gradient-to-b from-[#3F37AA] to-[#8F18F7] w-full flex flex-col items-center px-2 py-4 min-h-screen justify-center'>
            <p className='text-center text-white text-5xl sm:text-7xl leading-5'>Key Features</p>
            <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
                <div className='grid mt-11 grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10'>
                    <div className='card bg-gradient-to-b from-[#191F30] to-[#101625] rounded-2xl flex-col max-w-[400px] w-[90vw] sm:h-[330px]'>
                        <h1 className='pt-6 rounded-t-2xl text-3xl text-center text-white w-full h-20'>Crypto Investment</h1>
                        <hr className='w-2/3 mx-auto border-1 border-zinc-300' />
                            <FaDollarSign className='bg-gradient-to-b from-[#3F37AA] to-[#8F18F7] text-8xl mt-6 p-3 rounded-full text-white mx-auto'></FaDollarSign> 
                            <small className='mt-4 text-center text-slate-400 text-base mx-4'>Rely on CRI's expert team to handpick the best Crypto Investment tokens for your investments, offering you the most promising DeFi opportunities.</small>    
                    </div>
                    <div className='card bg-gradient-to-b from-[#191F30] to-[#101625] rounded-2xl flex-col max-w-[400px] w-[90vw] sm:h-[330px]'>
                        <h1 className='pt-6 rounded-t-2xl text-3xl text-center text-white w-full h-20'>Auto-compounding</h1>
                        <hr className='w-2/3 mx-auto border-1 border-zinc-300' />
                            <FaChartLine className='bg-gradient-to-b from-[#3F37AA] to-[#8F18F7] text-8xl mt-6 p-3 rounded-full text-white mx-auto'></FaChartLine> 
                            <small className='mt-4 text-center text-slate-400 text-base mx-4'>Harness compound interest, our smart contracts reinvest your earnings and maximize returns without any extra effort.</small>    
                    </div>
                    <div className='card bg-gradient-to-b from-[#191F30] to-[#101625] rounded-2xl flex-col max-w-[400px] w-[90vw] sm:h-[330px]'>
                        <h1 className='pt-6 rounded-t-2xl text-3xl text-center text-white w-full h-20'>Single Stake</h1>
                        <hr className='w-2/3 mx-auto border-1 border-zinc-300' />
                            <FaLaptopHouse className='bg-gradient-to-b from-[#3F37AA] to-[#8F18F7] text-8xl mt-6 p-3 rounded-full text-white mx-auto'></FaLaptopHouse> 
                            <small className='mt-4 text-center text-slate-400 text-base mx-4'>Deposit one asset, and we'll handle the rest, ensuring top-notch returns without juggling multiple tokens.</small>    
                    </div>
                    <div className='card bg-gradient-to-b from-[#191F30] to-[#101625] rounded-2xl flex-col max-w-[400px] w-[90vw] sm:h-[330px]'>
                        <h1 className='pt-6 rounded-t-2xl text-3xl text-center text-white w-full h-20'>Trustless</h1>
                        <hr className='w-2/3 mx-auto border-1 border-zinc-300' />
                            <FaCheckCircle className='bg-gradient-to-b from-[#3F37AA] to-[#8F18F7] text-8xl mt-6 p-3 rounded-full text-white mx-auto'></FaCheckCircle> 
                            <small className='mt-4 text-center text-slate-400 text-base mx-4'>Our permissionless, trustless approach safeguards your assets using cutting-edge technology and protocols.</small>    
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;