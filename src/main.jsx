import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import DynamicTitle from "./Components/DynamicTitle.jsx";
import Layout from "./Pages/Layout.jsx";
import { CartProvider } from "./Utils/Context/CartContext.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Utils/Context/ThemeContext.jsx";
import { ProductProvider } from "./Utils/Context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
          <CartProvider>
        <ProductProvider>
            <DynamicTitle />
            <Layout />
            <Toaster />
        </ProductProvider>
          </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
