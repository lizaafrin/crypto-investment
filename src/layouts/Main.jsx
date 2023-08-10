import React from 'react';
import Banner from '../components/Home/Banner';
import YieldFees from '../components/Home/YieldFees';
import Features from '../components/Home/Features';
import Community from '../components/Home/Community';

const Main = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <YieldFees></YieldFees>
           <Features></Features>
           <Community></Community>
        </div>
    );
};

export default Main;