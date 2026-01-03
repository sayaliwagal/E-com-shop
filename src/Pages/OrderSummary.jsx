import React, { useContext } from 'react'
import CartContext from '../Utils/Context/CartContext'
import PriceRow from '../Components/checkout/PriceRow'

const OrderSummary = () => {
  const { cart, totalPrice } = useContext(CartContext);

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

           
        <button disabled={cart.length=== 0} className='w-full mt-6 bg-green-600 hover:bg-green-700 disabled:backdrop-opacity-30 text-white py-3 rounded-lg font-semibold'>
          Place Order
        </button>

    </div>
  )
}

export default OrderSummary
