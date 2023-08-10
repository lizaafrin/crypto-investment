import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Community = () => {
    useEffect(()=>{
        Aos.init({ duration: 1000 });
    },[])
    return (
        <div className='bg-white w-full flex flex-col items-center justify-center p-24 min-h-screen'>
            <p className='text-center text-black text-4xl sm:text-7xl font-bold'>Join The Community</p>
            <div data-aos="fade-in-up">
                <div className='flex h-full max-h-[12rem] items-center justify-center flex-row my-2 gap-10 [&>*]:h-full [&>*]:w-full pt-24'>
                    <a href="https://t.me/rldfinance">
                        <img src="https://www.rld.finance/telegram-logo.png" className='h-44 w-44' alt="" />
                    </a>
                    <a href="https://discord.gg/uMuzHWVPzR">
                        <img src="https://www.rld.finance/discord-logo.png" className='h-44 w-44' alt="" />
                    </a>
                    <a href="https://twitter.com/RldFinance">
                        <img src="https://www.rld.finance/twitter-logo.png" className='h-44 w-44' alt="" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Community;