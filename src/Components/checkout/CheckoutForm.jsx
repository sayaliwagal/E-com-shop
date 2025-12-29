import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const CheckoutForm = () => {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        paymentMethod: "COD"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextHandler = () => {
        localStorage.setItem("checkoutData", JSON.stringify(formData));
        navigate("/order-summary");
    };
  return (
    <div className="max-w-4xl mx-auto p-6 my-10 dark:bg-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-6">
            Checkout
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {["fullName", "email", "phone", "address", "city", "pincode"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            required
            placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
            className="border p-3 rounded w-full dark:bg-gray-700 dark:border-gray-600"
            onChange={handleChange}
          />
        ))}
        </div>
        <div className="mt-4">
            <label className='block font-semibold'>Payment Method</label>
            <select name="paymentMethod" 
            className="border p-3 rounded w-full dark:bg-gray-700 dark:border-gray-600"
            onChange={handleChange}>
                <option value="COD">Cash On Delivery</option>
                <option value="UPI">UPI</option>
                <option value="Card">Debit / Credit Card</option>
            </select>
        </div>
        <button
        className="mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        onClick={nextHandler}>
            Continue
        </button>
      
    </div>
  )
}

export default CheckoutForm
