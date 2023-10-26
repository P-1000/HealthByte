import React, {useContext, createContext} from 'react';
// import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { useAddress, useContract, useContractWrite, ConnectWallet, useContractRead } from '@thirdweb-dev/react';
import {ethers} from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const {contract} = useContract('0x7e46e639613095F29C67B2AaB043d8b7684cFBD1');
    const {mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign');
    const { mutateAsync: donateToCampaign, isLoading } = useContractWrite(contract, "donateToCampaign")
    const address = useAddress();
    // const connect = useMetamask();

    const publishCampaign = async(form) => {
        try {
            const data = await createCampaign({ args: [address, form.title, form.description, form.target,new Date(form.deadline).getTime(), form.image] });
            // const data = await createCampaign([
            //      address,
            //     form.title,
            //     form.description,
            //     form.target,
            //     new Date(form.deadline).getTime(),
            //     form.image
            // ])
            console.log("contract call success",data);
        } catch (error) {
            console.log("contract call failure",error);
        }
    }

    const getCampaigns = async () => {
        // const campaigns =  useContractRead(contract, 'getCampaigns');
        const campaigns = await contract.call('getCampaigns');
        const parsedCampaigns = campaigns.map((campaign, i)=>({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }));
        return parsedCampaigns;
    }

    const getUserCampaigns = async () => {
        const allCampaigns = await getCampaigns();
        const filteredCampaigns = allCampaigns.filter((campaign)=> campaign.owner === address);

        return filteredCampaigns;
    }
    const donate = async (pId, amount) => {
        const formattedAmount = ethers.utils.parseUnits(amount, 18).toString();
        // const data = await contract.call('donateToCampaign',pId, amount);
        const data = await donateToCampaign({ args: [pId] }, formattedAmount );

        return data;
    }
    const getDonations = async (_id) => {
        const { donations, isLoading } = useContractRead(contract, "getDonators", [_id])
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for(let i=0; i< numberOfDonations; i++){
            parsedDonations.push({
                donator:donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString())
            })
        }
        return parsedDonations;
    }
    return (
        <StateContext.Provider
        value={{
            address,
            contract,
            createCampaign: publishCampaign,
            getCampaigns,
            getUserCampaigns,
            donate,
            getDonations
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);