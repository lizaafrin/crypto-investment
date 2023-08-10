import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const Coins = () => {
    const [coinsData, setCoinsData] = useState([]);
    useEffect(() => {
        fetch('coins.json')
            .then(response => response.json()
                .then(data => setCoinsData(data)))

    }, [])

    const modal = () => {
        Swal.fire({
            title: '<strong>Connect Wallet</strong>',
            icon: 'info',
            html:
              '<u>Metamask</u> ' +
              '<u>CoinBase Wallet</u> ' +
              '<u>Other Wallets</u> ',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Do not have a wallet!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
          })
    }


    return (
        <div className='flex justify-center'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 max-w-6xl w-full'>
                {
                    coinsData.map(coin =>
                        <div key={coin._id} className='bg-gradient-to-b from-[#191F30] to-[#101625] border-[#181E2F] border-solid border-2 rounded-2xl p-2 mb-10'>
                            <div className='p-4'>
                                <div className='flex text-white'>
                                    <div className='flex flex-grow flex-row items-center'>
                                        <img className='inline mr-3 h-12 w-12' src={coin.coinImage} alt="" />
                                        <p className="inline text-2xl font-bold ">{coin.coinName}</p>
                                    </div>
                                    <div>
                                        <a className="inline-flex flex-row rounded-lg bg-gradient-to-r from-backgroundPrimary to-[#10141F] p-2 border-solid border-backgroundPrimary border-2 hover:border-accentSecondary items-center" href={coin.exchangeWebsite}>
                                            <img className='font-thin mr-3 h-6 w-6' src={coin.exchangeWebsiteLogo} />
                                            <p className="text-sm text-tPrimary slim-text">{coin.exchangeWebsiteName}</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="flex flex-col my-6 flex-grow">
                                        <p className="text-xs text-[#9597A0]">Staked</p>
                                        <p className="text-2xl text-white font-bold">$0</p>
                                        <p className="text-xs text-[#9597A0]">0 GLP</p>
                                    </div>
                                    <div className="flex flex-col my-6">
                                        <p className="text-xs text-[#9597A0]">APY</p>
                                        <div className="min-w-[5rem] w-full">
                                            <p className="text-2xl text-white font-bold">{coin.apy}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => modal()} className="w-full text-white bg-gradient-to-r from-[#6f47ef] to-[#6f47da] hover:from-[#7c57e8] hover:to-[#7e5ddc] p-3 rounded-lg uppercase font-bold">Connect Wallet</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Coins;