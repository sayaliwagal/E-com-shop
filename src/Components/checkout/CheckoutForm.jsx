import { useEffect, useState } from "react"
import toast from "react-hot-toast";


const CheckoutForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
    });

    useEffect(() => {
        localStorage.setItem("checkoutAddress", JSON.stringify(formData));

    }, [formData]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, phone, address, city, pincode } = formData;

        if(!name || !email || !phone || !address || !city || !pincode){
            toast.error("Please fill all fields");
            return;
        }
        if(!email.includes("@")){
            toast.error("Enter a valid email");
            return;
        }

        // if(!phone.length < 11){
        //     toast.error("Enter valid phone number");
        // }
        onSubmit(formData);
    }
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Shipping Address
        </h2>
        <input name="name" className="input" value={formData.name}  onChange={handleChange} placeholder="Full Name" />
        <input name="email" className="input"  value={formData.email} onChange={handleChange} placeholder="Email" />
        <input name="phone" className="input"  value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
        <input  name="address" className="input"  value={formData.address} onChange={handleChange}  placeholder="Street Address" />

        <div className="grid grid-cols-2 gap-4">
            <input name="city" className="input"  value={formData.city} onChange={handleChange}  placeholder="City" />
            <input name="pincode" className="input"  value={formData.pincode} onChange={handleChange}  placeholder="Pincode" />
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold">
            Continue
        </button>
    </form>
  )
}

export default CheckoutForm
