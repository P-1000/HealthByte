import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useStateContext } from '../context';
import { ConnectWallet } from "@thirdweb-dev/react";
import DisplayCampaigns from "../components/FundingComp/DisplayCampaigns"

const Funding = () => {

    const [isloading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getCampaigns } = useStateContext();
    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    }
    useEffect(() => {
        if (contract) fetchCampaigns();
        //   console.log(campaigns);
    }, [address, contract]);

    // const { connect, address } = useStateContext();
    return (
        <div className='flex'>
            <div className="left">
                <Sidebar />
            </div>
            <div className="right flex flex-col w-[80%] p-7">
                <div className="flex w-full items-center justify-between">
                    <h1 className='text-gray-800 text-2xl font-bold px-3 py-6'>Help us donating!🙌</h1>
                    <div className='flex items-center'>
                        <a href="/newcampaign">
                            <button className='bg-[#1c1c24] text-white px-5 py-4 shadow hover:shadow-2xl hover:scale-105 hover:bg-[#1c1c24]/80 transition-all rounded-2xl font-semibold mx-2'>Create Campaign</button>
                        </a>
                        <ConnectWallet
                            className='w-full'
                            dropdownPosition={{
                                side: "bottom",
                                align: "center",
                            }}
                        />
                    </div>
                </div>

                <div>
                    <DisplayCampaigns
                        title="All Campaigns"
                        isloading={isloading}
                        campaigns={campaigns}
                    />
                </div>

            </div>
        </div>
    )
}

export default Funding