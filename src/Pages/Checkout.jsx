import CheckoutForm from "../Components/checkout/CheckoutForm";
import OrderSummary from "./OrderSummary";
import { useState } from "react";


const Checkout = () => {

  const [ shippingData, setShippingData ] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* Left: Form */}
        <div className="md:col-span-2 bg-slate-100 dark:bg-gray-800 p-6 rounded-xl shadow">
          {!shippingData? (
            <CheckoutForm onSubmit = {setShippingData} />
          ):(
            <p className="text-green-600 font-semibold">
              Shipping details saved
            </p>
          )}
        </div>
        {/* Right: Summary  */}
        <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-xl shadow">
          <OrderSummary shippingData={shippingData} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
