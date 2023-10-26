// import { getDiscountedPricePercentage } from "@/utils/helper";
import React from "react";
const ProductCard = ({ id, imageURL, name, amount }) => {
    return (
        <a
            href={`/medico/product/${id}`}
            className="transform overflow-hidden bg-white m-4 rounded-xl  duration-200 hover:scale-105 cursor-pointer border shadow-lg "
        >
            <img src={imageURL} alt="Poduct Image" className="w-[280px]" />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{amount}
                    </p>

                    
                </div>
            </div>
        </a>
    );
};

export default ProductCard;