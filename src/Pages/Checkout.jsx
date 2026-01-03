import { useNavigate } from "react-router";
import CheckoutForm from "../Components/checkout/CheckoutForm";
import OrderSummary from "./OrderSummary";
import { useContext } from "react";
import CartContext from "../Utils/Context/CartContext";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);

  const handlePlaceOrder = (addressData) => {
    if(cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    localStorage.setItem("shippingAddress", JSON.stringify(addressData));
    clearCart();
    navigate("/order-success");
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* Left: Form */}
        <div className="md:col-span-2 bg-slate-100 dark:bg-gray-800 p-6 rounded-xl shadow">
          <CheckoutForm onSubmit = {handlePlaceOrder} />
        </div>
        {/* Right: Summary  */}
        <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-xl shadow">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
