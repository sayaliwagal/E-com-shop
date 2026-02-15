import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

 // Load user from loacalStorage on app start.

 useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    if(authUser){
        setUser(authUser);
    }
 }, []);

 //Signup
 const signup = (formData) => {
  let users = JSON.parse(localStorage.getItem("users"));

  if(!users) users = [];

  if(!Array.isArray(users)){
    users = [];
  }

  const exists = users.find((u) => u.email === formData.email);
  if(exists){
    toast.error("User already exists");
    return false;
  }
  users.push(formData);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("authUser", JSON.stringify(formData));

    setUser(formData);
    toast.success("Account created successfully!");
    return true;
 };

 //Login 

 const login = (email, password) =>{
    const users = JSON.parse(localStorage.getItem("users"));

    if(!users) users = [];

    if(!Array.isArray(users)) users = [];

    const found = users.find(
        (u) => u.email === email && u.password === password
    );
    
    if(!found){
        toast.error("No account found. Pease signup. ");
        return false;
    }
    localStorage.setItem("authUser", JSON.stringify(found));
    setUser(found);

    toast.success("Loging successful");
    return true;
 };

 //Logout 
 const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    toast.success("Logged out");
 };

 return (
    <AuthContext.Provider value={{ user, signup,login, logout}}>
        {children}
    </AuthContext.Provider>
 );
};

export const useAuth= () => useContext(AuthContext);