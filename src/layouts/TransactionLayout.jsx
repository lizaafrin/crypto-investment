import React from 'react';
import SecondBanner from '../components/Transaction/SecondBanner';
import Coins from '../components/Transaction/Coins';

const TransactionLayout = () => {
    return (
        <div className='h-[1750px] bg-black'>
            <div>
                <SecondBanner></SecondBanner>
            </div>
            <div className='relative z-10 top-40'>
                <Coins></Coins>
            </div>
            
        </div>
    );
};

export default TransactionLayout;