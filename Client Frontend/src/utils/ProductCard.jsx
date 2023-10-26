import React from "react";

const ProductCard = ({ name, price, develi }) => {
  return (
    <div className=" group  mt-10   relative bg-[#fff] w-56 h-[300px] shadow-[0_5px_15px_rgba(0,0,0,0.25)] overflow-hidden transition-[1s] rounded-xl ">
        <div className=" absolute">

    <div className=" rounded-xl   w-32  box-border transition-[1s] ">
      <img
        className="rounded-2xl  w-32   group-hover:absolute group-hover:transition-[3s] group-hover:bottom-[200px] block transition-[1s]  my-0 "
        src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/4f52de3934a24db98550be0e08ab6044.jpg"
        alt="Awesome Sunglasses"
        />
    </div>
    <div className="bg-white group-hover:overflow-visible group-hover:shadow-[0_5px_15px_rgba(0,0,0,0.25)] group-hover:transition-[1s] group-hover: -bottom-[400px] w-56 box-border shadow-[0_0_0_rgba(0,0,0,0)] transition-[1s] pt-0 p-2.5">
      <h2 className="w-full text-base m-0 pb-[25px] p-0">
        {name}
        <br />
        <span className="text-xs text-[#bbb] font-[normal]">Men's Collection</span>
      </h2>
      <div className=" font-[bold] text-xl right-[10px] top-0">{price}</div>
      <label className="text-sm">
        Delivery by<b> {develi}</b>
      </label>
      <h2 className="text-sm">bottle of 60 capsules</h2>
      <a
        className="block bg-[#333] text-white text-center no-underline transition-[1s] mt-[15px] mb-0 mx-0 p-[5px] rounded-[5px] hover:transition-[1s]"
        href="#"
        >
        Add to cart
      </a>
    </div>
          </div>
  </div>



  );
};

export default ProductCard;
