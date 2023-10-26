import React from "react";
// import Sidebar from '../components/Sidebar';
// import banner from "../assets/banner.png"
// import pic from "../assets/med1.jpg"
import ProductCard from "../utils/ProductCard";
import { medicines } from "../utils/medicines.json";

const Ecommerce = () => {
  const products = [
    {
      "id": 1,
      "name": "Advil",
      "brand": "Pfizer",
      "category": "Pain reliever",
      "description": "Advil is a nonsteroidal anti-inflammatory drug (NSAID) that is used to relieve pain, fever, and inflammation. It is available over-the-counter in tablet and liquid form.",
      "price": 10.99,
      "quantity": 100,
      "image": "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?auto=format&fit=crop&q=80&w=2839&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 2,
      "name": "Tylenol",
      "brand": "McNeil Consumer ",
      "category": "Pain reliever",
      "description": "Tylenol is a pain reliever and fever reducer. It is available over-the-counter in tablet and liquid form.",
      "price": 9.99,
      "quantity": 100,
      "image": "https://images.unsplash.com/photo-1579194440951-0c501e8ba3c5?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 3,
      "name": "Zyrtec",
      "brand": "J&J Consumer Inc.",
      "category": "Allergy medication",
      "description": "Zyrtec is an over-the-counter allergy medication that is used to treat symptoms such as sneezing, runny nose, itchy eyes, and hives.",
      "price": 12.99,
      "quantity": 100,
      "image": "https://images.unsplash.com/photo-1519161720427-f7711f9efce3?auto=format&fit=crop&q=80&w=2875&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 4,
      "name": "Claritin",
      "brand": "Pfizer Consumer ",
      "category": "Allergy medication",
      "description": "Claritin is an over-the-counter allergy medication that is used to treat symptoms such as sneezing, runny nose, itchy eyes, and hives.",
      "price": 11.99,
      "quantity": 100,
      "image": "https://images.unsplash.com/photo-1579182874016-50f3cfba230a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 4,
      "name": "Claritin",
      "brand": "Pfizer Consumer ",
      "category": "Allergy medication",
      "description": "Claritin is an over-the-counter allergy medication that is used to treat symptoms such as sneezing, runny nose, itchy eyes, and hives.",
      "price": 11.99,
      "quantity": 100,
      "image": "https://images.unsplash.com/photo-1579182874016-50f3cfba230a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
  return (
    <>
      <div className="flex flex-col">
      <div className="">
        <h1 className="text-3xl px-6 mt-8 mx-6 font-bold ">Mediceins</h1>
        <div>
          <div className="mt-14">
            <h1 className=" px-6   text-2xl mx-6 font-semibold ">Top deals of pain relief and cough & cold</h1>
          </div>
        </div>
      </div>
      <div className="flex  ">
      <div className="flex p-6 gap-6 flex-wrap justify-between h-[26rem] ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}  />
      ))}
    </div>
      </div>
      </div>
    </>
  );
};

export default Ecommerce;
