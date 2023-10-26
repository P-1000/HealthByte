import React from "react";

const ProductCard = (props) => {

    const {name,price,quantity,develi , discount,reson} = props;

  return (
    <div className="item   ">
      <div className="img-box rounded-xl ">
        <img
          className="rounded-3xl"
          src="https://source.unsplash.com/1-nx1QR5dTE"
          alt="Awesome Sunglasses"
        />
      </div>
      <div className="details">
        <h2>
          Awesome Sunglasses
          <br />
          <span>Men's Collection</span>
        </h2>
        <div className="price">149$</div>
        <label>Quantity</label>
        <ul>
          <li>5-10</li>
          <li>11-15</li>
          <li>15-30</li>
        </ul>
        <label>Color</label>
        <ul className="colors">
          <li />
          <li />
          <li />
        </ul>
        <a href="#">Add to cart</a>
      </div>
    </div>
  );
};

export default ProductCard;
