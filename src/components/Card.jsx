import React from "react";
import Heart from "./icons/Heart";

const Card = ({ img, price, category, title, brand }) => {
  return (
    <div className="shadow-xl flex flex-col w-[100%] rounded-[20px]">
      <div>
        <img src={img} width={"100%"} className="rounded-[20px]" />
        <div className=" flex justify-between mt-[10px] px-[20px]">
          <div className=" flex flex-col items-start">
            <div>{title}</div>
            <div>₹ {price}</div>
          </div>
          <Heart />
          {/* <div>{brand}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
