import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState();
  let response;
  useEffect(() => {
    console.log(".....");
    const fetchData = async () => {
      response = await axios.get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
      );

      console.log(response.data.data);
      setProducts(response?.data?.data);
      console.log("products", products);
    };

    fetchData();
  }, [response]);
  return (
    <div>
      <div className="grid grid-cols-4 gap-[30px] hover:shadow-lg mt-[100px]">
        {products?.map((ele, ind) => {
          return (
            <Card
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
    </div>
  );
};

export default Products;
