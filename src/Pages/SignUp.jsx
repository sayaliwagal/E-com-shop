import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../Utils/Context/AuthContext";

 const SignUp = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [ form, setForm ] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = signup(form);
       if(success) navigate("/login");
    };

    return (
        <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-32 p-8 shadow rounded">
            <input 
            placeholder="Name"
            className="border p-2 w-full mb-3"
            onChange={(e) => setForm({ ...form, name:e.target.value})} 
            />
            <input 
            placeholder="Email"
            className="border p-2 w-full mb-3"
            onChange={(e) => setForm({ ...form, email:e.target.value})}
            />
            <input 
            placeholder="Password"
            type="password"
            className="border p-2 w-full mb-3"
            onChange={(e) => setForm({ ...form, password:e.target.value})}
            />
            <button 
            className="bg-yellow-500 w-full p-2">
                Signup
            </button>
        </form>
    )
}

export default SignUp;