import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [select, setSelect] = useState();

  const handdleChange = () => {
    console.log("clickkkkk");
    // console.log(e.target.value);
  };
  return (
    <div className="bg-[#38bdf8] flex justify-between w-[full] fixed top-0 right-0 left-0 z-50 h-[70px] items-center">
      <div className="ml-[30px] ">MasaiMart</div>
      <div className="flex justify-around gap-[100px] mr-[30px]">
        <Link to="/">
          <div className="cursor-pointer">All Prducts</div>
        </Link>
        <Link to="/wishlist">
          <div className="cursor-pointer">WishList</div>
        </Link>
      </div>
      <select id="sort" class="bg-[#38bdf8] ">
        <option selected onChange={handdleChange}>
          Sort
        </option>
        <option value="ASC">Low-High</option>
        <option value="DSC">High-Low</option>
      </select>
      {/* <select placeholder="Sort">
        <option value=""></option>
      </select> */}
      <filter>Filter</filter>
    </div>
  );
};

export default Navbar;
