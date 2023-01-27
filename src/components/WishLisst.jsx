import React, { useEffect, useState } from "react";
import Card from "./Card";

const WishLisst = () => {
  const [wishlist, setWishList] = useState(
    JSON.parse(window.localStorage.getItem("wishlist"))
  );
  useEffect(() => {
    setWishList(JSON.parse(window.localStorage.getItem("wishlist")));
  }, []);
  useEffect(() => {
    const fetchWishList = () => {};
    console.log("wishlist wishlist wishlist", wishlist);
    fetchWishList();
  }, [wishlist]);
  return (
    <div className="mt-[200px] grid grid-cols-4 gap-[30px] hover:shadow-lg mt-[100px">
      {JSON.parse(window.localStorage.getItem("wishlist"))?.map((ele, ind) => {
        return (
          <Card
            ele={ele}
            key={ind}
            img={ele.image}
            price={ele.price}
            category={ele.category}
            title={ele.title}
            brand={ele.brand}
          ></Card>
        );
      })}
    </div>
  );
};

export default WishLisst;
