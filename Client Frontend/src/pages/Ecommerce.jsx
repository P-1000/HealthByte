import React from "react";
// import Sidebar from '../components/Sidebar';
// import banner from "../assets/banner.png"
// import pic from "../assets/med1.jpg"
import ProductCard from "../utils/ProductCard";
import { medicines } from "../utils/medicines.json";

const Ecommerce = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl ">Mediceins</h1>
        <div>
          <div>
            <h1 className="">Top deals of pain relief and cough & cold</h1>
          </div>
          {/* <div className=" flex  ">
            <ProductCard
              name="dolo"
              price="89,45"
              reson="for sugar"
              develi={"Sun, 29 Oct"}
              discount="5%"
            />
          </div> */}
         
        </div>
      </div>
      <div className="grid grid-cols-3">
        <ProductCard
          name="dolo"
          price="89,45"
          reson="for sugar"
          develi={"Sun, 29 Oct"}
          discount="5%"
        />
<ProductCard
          name="dolo"
          price="89,45"
          reson="for sugar"
          develi={"Sun, 29 Oct"}
          discount="5%"
        />
      </div>
    </>
  );
};

export default Ecommerce;
