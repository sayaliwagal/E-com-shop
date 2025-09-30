import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useCallApi from "../Utils/useCallApi";
import Accordion from "../Components/Accordion";

const ProductDescp = () => {
  const { title, id } = useParams();
  console.log(id);
  const singleData = useCallApi(`https://dummyjson.com/products/${id}`);

  console.log(singleData);
  return (
    <div>
      <div className="products-main">
        <div className="left">
          <div className="images">
            {singleData?.images?.map((imag, i) => {
              return (
                <img
                  src={imag}
                  alt="productImag"
                  key={i}
                  style={{ height: "200px", display: "block" }}
                />
              );
            })}
          </div>
          <div className="main-image">
            <img
              src={singleData?.images?.[0]}
              alt="productImge"
              style={{ height: "600px" }}
            />
          </div>
        </div>
        <div className="right">
          <h2>{singleData?.title}</h2>
          <p> {singleData?.brand}</p>
          <p>{singleData?.description}</p>
          <p>{singleData?.category}</p>
          <p>{singleData?.price}</p>
          <p>rating: {singleData?.rating}</p>
        </div>
      </div>
      {/* Accordion */}
      <h1 className="text-5xl text-center my-5">FAQ</h1>
      <Accordion/>
    </div>
  );
};

export default ProductDescp;
