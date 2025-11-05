import { children, createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //Load from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishList, setWishList] = useState(() => {
    const savedWishList = localStorage.getItem("wishList");
    return savedWishList ? JSON.parse(savedWishList) : [];
  });
  const [auth, setAuth] = useState(false);

//Sync with localStorage whenever data changes
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

useEffect(() => {
  localStorage.setItem("wishList", JSON.stringify(wishList));
}, [wishList]);

  // Cart Logic (already present).....
  const addCart = (product) => {
    console.log("data added");
    const exists = cart.find((item) => {
      return item.id === product.id;
    });
    if (exists) {
      toast.error(`${product.title} is already added to cart!!`);
      return;
    }
    setCart([...cart,{...product, qty:1}]);
    toast.success(`${product.title} has Successfully added to the cart!!`);

};
    const clearCart = () => {
      setCart([]);
      toast.success("All Products has been removed!!");
    };

    const removeProduct = (product) => {
      const newCartItems = cart.filter((item) => {
        return item.id !== product.id;
      });
      setCart([...newCartItems]);
      toast.success(`${product.title} has been removed!!`);
    };

 //Increase quantity
    const increaseQty = (product) => {
      const newCart = cart.map((item) =>{
        if(item.id === product.id){
          return {
             ...product, qty:product.qty + 1
          }
        }else{
          return item;
        }
      })
      setCart([...newCart])
    }

    //Decrease quantity
        const decreaseQty = (product) => {
      const newCart = cart.map((item) =>{
        if(item.id === product.id && item.qty > 1){
          return {
             ...product, qty:product.qty - 1
          }
        }else{
          return item;
        }
      })
      setCart([...newCart]);
    }

    //total Price

    const totalPrice = () =>{
      const tPrice= cart.reduce((totalPrice, item) => {
                  return totalPrice  = totalPrice + item.price * item.qty;
      },0);
       return tPrice;
    }

    // WishList Logic
    const addWishList = (product) => {
      const exists = wishList.find((item) => item.id === product.id);
      if(exists){
        toast.error(`${product.title} is already in wishlist!`);
        return;
      }
      setWishList([...wishList, product]);
      toast.success(`${product.title} added to wishlist!`);
    };

    const removeWishList = (product) => {
      setWishList(wishList.filter((item) => item.id !== product.id));
      toast.success(`${product.title} removed form wishlist!`);
    };

    const moveToCart = (product) => {
      removeWishList(product);
      addCart(product);
      toast.success(`${product.title} moved to cart !`)
    }

    //login feature
    const login = () =>{
      setAuth(true);
      toast.success("Logged in successfully ");
    }

    const logout = () => {
      setAuth(false);
      toast.success("Log out successfully");
    }

    
  return (
    <CartContext.Provider value={{ cart, addCart, clearCart, removeProduct, increaseQty, decreaseQty, totalPrice, login, logout, auth, wishList, addWishList, removeWishList, moveToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
