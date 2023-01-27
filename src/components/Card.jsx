import React, { useState } from "react";
import Heart from "./icons/Heart";

const Card = ({ img, price, category, title, brand, ele }) => {
  const [wishlistData, setWishListData] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  const handleWishList = () => {
    console.log("wishlist clicked");
    setWishListData([...wishlistData, ele]);
    console.log("wishlistData", wishlistData);
    window.localStorage.setItem("wishlist", JSON.stringify(wishlistData));
  };
  return (
    <div className="shadow-xl flex flex-col w-[100%] rounded-[20px]">
      <div>
        <img src={img} width={"100%"} className="rounded-[20px]" />
        <div className=" flex justify-between mt-[10px] px-[20px]">
          <div className=" flex flex-col items-start">
            <div>{title}</div>
            <div>₹ {price}</div>
          </div>
          <button onClick={handleWishList}>
            <Heart />
          </button>

          {/* <div>{brand}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
