import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useMediaQuery } from "react-responsive";

const Products = () => {
  const [select, setSelect] = useState("ASC");

  const [products, setProducts] = useState();
  const [limit, setLimit] = useState(12);
  let response;
  let count = 1;
  const isSmallMobile = useMediaQuery({ query: `(max-width: 635px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 1183px)` });
  const handleLimit = () => {
    count++;
    // setLimit();
  };
  //   const select = localStorage.getItem("select");
  console.log("select in products", select);
  let sortedProducts;
  useEffect(() => {
    console.log("sdfsdf");
    const sortItems = () => {
      sortedProducts = products?.sort((a, b) => {
        console.log("a,b", a, b);
        return a.price - b.price;
      });
      console.log("sortedProducts", sortedProducts);
      setProducts(sortedProducts);
    };
    sortItems();
  }, [select, sortedProducts]);

  useEffect(() => {
    console.log(".....");
    const fetchData = async () => {
      response = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=${limit}&page=${count}`
      );

      console.log(response.data.data);
      setProducts(response?.data?.data);
      console.log("products", products);
    };

    fetchData();
  }, [response]);
  useEffect(() => {}, [products]);
  return (
    <div className="mt-[100px]">
      <select
        id="sort"
        class="bg-[#38bdf8] "
        onChange={(e) => setSelect(e.target.value)}
      >
        <option selected>Sort</option>
        <option value="ASC">Low-High</option>
        <option value="DSC">High-Low</option>
      </select>
      <div
        className={`grid ${
          isSmallMobile
            ? "grid-cols-1"
            : isMobile
            ? "grid-cols-2"
            : "grid-cols-4"
        }  gap-[30px] hover:shadow-lg mt-[100px]`}
      >
        {products?.map((ele, ind) => {
          return (
            <Card
              ele={ele}
              key={ele.id}
              img={ele.image}
              price={ele.price}
              category={ele.category}
              title={ele.title}
              brand={ele.brand}
            />
          );
        })}
      </div>
      <div className=" w-[100%] h-[80px] flex items-center justify-around">
        <button
          onClick={handleLimit}
          className="bg-[#38bdf8] p-[12px] shadow-xl rounded-[12px] hover:opacity-[70%] transiton  duration-[300ms]"
        >
          {" "}
          Previous
        </button>
        <button className="bg-[#38bdf8] p-[12px] shadow-xl rounded-[12px] hover:opacity-[70%] transiton  duration-[300ms]">
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
