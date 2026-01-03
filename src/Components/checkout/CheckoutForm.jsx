
import { form } from "motion/react-client";
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
    const [ errors, setErrors ] = useState({});


    useEffect(() => {
        if(Object.keys(errors).length === 0)
        localStorage.setItem("checkoutAddress", JSON.stringify(formData));

    }, [errors]);

    const handleChange = (e) => {
        const { name, value  } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if(errors[name]){
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if(!formData.name.trim()) 
            newErrors.name = "Name is Required";
        if(!/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Please enter vaild email";
        if(!/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Phone Number must be 10 digits";
        if(!formData.address.trim())
            newErrors.address = "Address is Required";
        if(!formData.city.trim())
            newErrors.city = "City is Required";
        if(!/^\d{6}$/.test(formData.pincode))
            newErrors.pincode = "Pincode must be 6 digits long";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(!validate()){
            return;
        }
        onSubmit(formData);
    };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Shipping Address
        </h2>
        {["name", "email", "phone", "address"].map((field) => (
            <div key={field}>
                <input name={field} className="input" value={formData[field]}  onChange={handleChange} placeholder={field.toUpperCase()} />
                {errors[field] && (
                    <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
            </div>
        ))}

        <div className="grid grid-cols-2 gap-4">
            {["city", "pincode"].map((field) => (
                <div key={field}>
                    <input name={field} className="input"  value={formData[field]} onChange={handleChange}  placeholder={field.toUpperCase()} />
                    {errors[field] && (
                        <p className="text-red-500 text-sm">{errors[field]}</p>
                    )}
                </div>
            ))}
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold">
            Continue
        </button>
    </form>
  )
}

export default CheckoutForm
