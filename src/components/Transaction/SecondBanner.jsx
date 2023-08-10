import React from 'react';
import logo from '../../assets/money.png'
import { FaCreditCard, FaLandmark } from 'react-icons/fa';
import Coins from './Coins';
import { Link } from 'react-router-dom';

const SecondBanner = () => {
    return (
        <div className='text-white w-full bg-gradient-to-r from-[#3F37AA] to-[#8F18F7] h-64 absolute'>
            <div className=''>
                <div className='flex items-center px-3 sm:px-10 w-full'>
                    <div className="flex items-center mr-16 w-full">
                        <img src={logo} alt="" className='w-14 rounded-full p-2' />
                        <Link to='/'><p className='ml-0 text-3xl text-white font-bold tracking-[.25em]'>CRI</p></Link>
                    </div>
                    <div className='flex flex-row justify-center items-center ml-auto text-sm'>
                        <div className='px-5 md:block'>
                            <a target="_blank" rel="noopener noreferrer" href="https://rld-1.gitbook.io/rld/">Docs</a>
                        </div>
                        <div className='ml-auto w-32'>
                            <button className="bg-black rounded-lg p-3 hover:bg-[#6F47EF]">Connect Wallet</button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-8 px-3 sm:px-10 w-full mt-2'>
                    <div className='flex gap-4 items-center'>
                        <div className='border border-gray-400 rounded-xl w-12 h-10 flex items-center justify-center p-[3px]'>
                            <FaCreditCard className='text-xl'></FaCreditCard>
                        </div>
                        <div>
                            <p className='text-[#9597A3] text-xs'>Balance</p>
                            <p className='text-2xl font-bold'>$ 0.00</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='border border-gray-400 rounded-xl w-12 h-10 flex items-center justify-center p-[3px]'>
                            <FaLandmark></FaLandmark>
                        </div>
                        <div>
                            <p className='text-[#9597A3] text-xs'>TVL</p>
                            <p className='text-2xl font-bold'>$ 19,069.09</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;