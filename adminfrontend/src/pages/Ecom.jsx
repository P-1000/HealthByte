import React from 'react';
import Sidebar from '../components/Sidebar';
import banner from "../assets/banner.png"
import pic from "../assets/med1.jpg"
import ProductCard from '../components/Ecommerce/ProductCard';
import {medicines} from "../utils/products.json"

const Ecom = () => {
    return (
        <div className='flex'>
            <div className="left w-[25%]">
                <Sidebar />
            </div>
            <div className="right pr-20">
                <div className="flex items-center justify-center rounded-2xl bg-transparent border ">
                    <div className='flex flex-col '>
                        <h1 className='text-[32px] flex py-3 font-semibold'>Welcome to<br /> Medico Ecommerce 💊</h1>
                        <p className=''>Find out every medicine for your needs at <br />lowest prices and also keep upto for our festive seasons!</p>
                    </div>
                    <img className='w-[40%]' src={banner} />
                </div>

                {/* <h2 className='text-2xl font-bold px-10 py-2'>Products</h2> */}
                <div className='products flex flex-wrap'>
                    {medicines && medicines.map((item) => (
                        <ProductCard key={item.id} id={item.id} imageURL={pic} name={item.name} amount={item.amount} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Ecom