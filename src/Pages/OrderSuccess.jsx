import React from 'react'
import { Link } from "react-router"

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow text-center max-w-md">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
                Order Placed!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for shopping wih us. Your order has been placed successfully.
            </p>
            <Link 
            to="/"
            className='inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg'>
             Continue Shopping
            </Link>
        </div>
    </div>
  )
}

export default OrderSuccess
