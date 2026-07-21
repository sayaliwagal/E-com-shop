import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import DynamicTitle from "./Components/DynamicTitle.jsx";
import Layout from "./Pages/Layout.jsx";
import { CartProvider } from "./Utils/Context/CartContext.jsx";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "./Utils/Context/ProductContext.jsx";
import { AuthProvider } from "./Utils/Context/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { SearchProvider } from "./Utils/Context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
          <CartProvider>
        <ProductProvider>
          <SearchProvider>
            <Provider store={store}>
              <DynamicTitle />
                <Layout />
                <Toaster />
            </Provider>
          </SearchProvider>
        </ProductProvider>
          </CartProvider>
        </AuthProvider>
    </BrowserRouter>
);
