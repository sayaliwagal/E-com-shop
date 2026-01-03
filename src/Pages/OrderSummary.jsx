import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import CartContext from '../Utils/Context/CartContext'
import PriceRow from '../Components/checkout/PriceRow'
import toast from "react-hot-toast";

const OrderSummary = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

  const subTotal = totalPrice();
  const delivery = subTotal > 500 ? 0 : 50;
  const total = subTotal + delivery;

  if(cart.length === 0) {
    return (
      <p className="text-center text-slate-400">
        Your Cart is Empty.
      </p>
    );
  }
  
  const handlePlaceOrder = () => {
    if(cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    const addressData = JSON.parse(localStorage.getItem("checkoutAddress"));

    if(!addressData){
      toast.error("Shipping address missing");
      return;
    }
    localStorage.setItem("shippingAddress", JSON.stringify(addressData));
    clearCart();
    navigate("/order-success");
  };
  return (
    <div className="dark:text-slate-50">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Order Summary
        </h2>

        {cart.map(item => (
          <div key={item.id} className="flex justify-between text-sm mb-2">
            <span>{item.title}</span>
            <span>$ {item.price}</span>
          </div>
        ))}
        <hr className="my-4" />

        <PriceRow label="Subtotal" value={subTotal} />
        <PriceRow label="Delivery" value={delivery} />
        <PriceRow label="Total" value={total} bold />

           
        <button 
        onClick={handlePlaceOrder}
        disabled={cart.length=== 0} className='w-full mt-6 bg-green-600 hover:bg-green-700 disabled:backdrop-opacity-30 text-white py-3 rounded-lg font-semibold'>
          Place Order
        </button>

    </div>
  )
}

export default OrderSummary
