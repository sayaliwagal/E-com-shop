import CheckoutForm from "../Components/checkout/CheckoutForm";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* Left: Form */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <CheckoutForm />
        </div>
        {/* Right: Summary  */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
