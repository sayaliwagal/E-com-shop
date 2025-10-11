import { children, createContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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

    
  return (
    <CartContext.Provider value={{ cart, addCart, clearCart, removeProduct, increaseQty, decreaseQty, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
