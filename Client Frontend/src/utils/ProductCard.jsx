import React from "react";

const ProductCard = ({ product }) => {
  const { image, name, price, brand, category } = product;

  return (
    <div className="relative m-1  p-2 flex w-60  h-[22rem] max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        href="#"
        className="relative  mx-3 mt-3 flex h-60 overflow-hidden   rounded-xl"
      >
        <img className="object-cover" src={image} alt="product image" />
        <span className="absolute top-0 left-0  w-fit m-2 ml-5 rounded-xl bg-black/60  backdrop-blur-2xl px-2 text-center text-sm font-medium text-white">
          {brand}
        </span>
      </a>
      <div className="mt-5 mx-3 px-3 pb-1 ">
        <a href="#">
          <h5 className="tet-xl tracking-tight text-slate-900">{name}</h5>
          <span className="text-md font-light text-slate-900/80">
            {category}
          </span>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-xs gap-1 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
             <p>
            <span className="text-xl font-bold text-white/90">{price}</span>
          </p>
            Add to cart
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
