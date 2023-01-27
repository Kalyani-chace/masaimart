import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#22d3ee] flex justify-between w-[full] fixed top-0 right-0 left-0 z-50 h-[70px] items-center">
      <div className="ml-[30px] ">MasaiMart</div>
      <div className="flex justify-around gap-[100px] mr-[30px]">
        <div className="cursor-pointer">All Prducts</div>
        <div className="cursor-pointer">WishList</div>
      </div>
    </div>
  );
};

export default Navbar;
