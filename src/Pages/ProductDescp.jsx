import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import useCallApi from "../Utils/useCallApi";
import Accordion from "../Components/Accordion";
import { FaHeart, FaTag } from "react-icons/fa";
import Error from "./Error.jsx";
import StarRating from "../Components/StarRating.jsx";
import CartContext from "../Utils/Context/CartContext.jsx";
import ProductZoomImage from "../Components/ProductZoomImage.jsx";

const ProductDescp = () => {
  const { title, id } = useParams();
  const navigate = useNavigate();
  const { cart, addCart, wishList, addWishList, removeWishList } =
    useContext(CartContext);
  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [zoomVisible, setZoomVisible] = useState(false);
  const { data, loading, error, refetch } = useCallApi(
    `https://dummyjson.com/products/${id}`
  );
  const [mainImage, setMainImage] = useState(data?.images?.[0] | "");

  //image hover
  useEffect(() => {
    if (data?.images?.length > 0) {
      setMainImage(data.images[0]);
    }
  }, [data]);
  //Check if product is already in wishlist or not
  useEffect(() => {
    if (data) {
      const inWishList = wishList.some((item) => item.id === data.id);
      setLiked(inWishList);
    }
  }, [wishList, data]);

  // Handle wishlist toggle

  //togle for like
  const handleWishListClick = (product) => {
    if (liked) {
      removeWishList(product); //remove form wishlist
    } else {
      addWishList(product); //wishlist add logic.
    }
    setLiked((prev) => !prev); //toggle
  };

  useEffect(() => {
    if (data) {
      const inCartList = cart.some((item) => item.id === data.id);
      setInCart(inCartList);
    }
  }, [cart, data]);

  //Hande Cart
  const handleCartClick = (product) => {
    if (inCart) {
      navigate("/cart"); //go to the cart page
    } else {
      addCart(product); //add to cart
      setInCart(true); //Update button state
    }
  };

  //Loading ui (shimmer )
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-2 animate-pulse">
        <div className="w-full flex flex-col md:flex-row gap-8 bg-white p-8 rounded-2xl">
          {/* Left Tumbnails  */}
          <div className="flex flex-col gap- min-w-[300px]">
            {Array.from({ length: 4 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="w-25 h-25 bg-gray-200 m-4 rounded-lg"
                ></div>
              );
            })}
          </div>
          {/* Main image Shimmer  */}
          <div className="flex-1 flex justify-center">
            <div className="h-[500px] w-[400px] bg-gray-200 rounded-xl"></div>
          </div>
          {/* Right details shimmer  */}
          <div className="flex-[1.5] flex flex-col gap-4">
            <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
            <div className="h-4 bg-gray-200 w-1/3 rounded"></div>
            <div className="h-8 bg-gray-200 w-1/2 rounded"></div>
            <div className="h-4 bg-gray-200 w-1/4 rounded"></div>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <div key={i} className="h-4 bg-gray-200 w-full rounded"></div>
                );
              })}
            </div>
            <div className="flex gap-4 mt-4">
              <div className="h-12 w-32 bg-gray-200 rounded-full"></div>
              <div className="h-12 w-32 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //Error State
  if (error) {
    return <Error />;
  }
  //Main Product UI.
  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-full mx-5 flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-lg">
          {/* Left Thumbnails  */}
          <div className="flex flex-col gap-4">
            {data?.images?.map((imag, i) => {
              return (
                <img
                  src={imag}
                  alt="thumbnail"
                  onMouseEnter={() => setMainImage(imag)} //change main image on hover
                  key={i}
                  className={`w-90 h-40 object-contain border-2 rounded-md cursor-pointer transition-all duration-300 ${
                    mainImage === imag ? "border-blue-500" : "border-gray-200"
                  } hover:scale-105`}
                />
              );
            })}
          </div>

          {/* Main Image  */}

            <div className="flex flex-col item-center justify-center">

            <ProductZoomImage
              src={mainImage}
              alt={data?.title}
              setZoomVisible={setZoomVisible}
              />
              </div>

              {zoomVisible && (
                <div 
                className="w-full h-[600px] border overflow-hidden rounded-md shadow-lg bg-white hidden lg:block"
                style={{
                  backgroundImage: `url(${mainImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backfacePosition: "center",
                }}
                ></div>
              )}

            {!zoomVisible && (
              <div className="flex flex-col justify-center">
                {/* Product Info  */}
                <div className="flex-[1.5] flex flex-col justify-start gap-4">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {data?.title}
                  </h2>
                  <p className="text-gray-600 font-medium"> {data?.brand}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-green-600">
                      ${data?.price}
                    </span>
                    <span className="line-through text-gray-400">
                      ${(data?.price * 1.8).toFixed(0)}
                    </span>
                    <span className="text-green-600 font-semibold">
                      80% off
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <span>
                      {data?.rating} <StarRating rating={data?.rating} /> (
                      {Math.floor(Math.random() * 100)} reviews)
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Available Offers
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex item-center gap-2">
                        <FaTag className="text-green-500" />
                        Get extra 15% off (price inclusive of discount)
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTag className="text-green-500" />
                        10% cashback on orders above $999
                      </li>
                      <li className="flex items-center hap-2">
                        <FaTag className="text-green-500" />
                        Free delivery for Plus members
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700">{data?.description}</p>
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => handleCartClick(data)}
                      className={`${
                        inCart
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-yellow-400 hover:bg-yellow-500 text-black"
                      } px-6 py-3 rounded-full font-semibold shadow transition-all duration-300`}
                    >
                      {inCart ? "Go to Cart" : "Add to Cart"}
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow">
                      Buy Now
                    </button>
                    <button
                      onClick={() => handleWishListClick(data)}
                      className={`p-4 rounded-full font-semibold shadow transition-all duration-300
            ${liked ? "bg-red-100" : "bg-gray-200 hover:bg-gray-300"}`}
                    >
                      <FaHeart
                        size={30}
                        className={`transition-all duration-300 ${
                          liked
                            ? "text-red-500 animate-pingOnce"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
 
        </div>
        {/* Accordion */}
        <h1 className="text-5xl text-center my-5">FAQ</h1>
        <Accordion />
      </div>
    </div>
  );
};

export default ProductDescp;
