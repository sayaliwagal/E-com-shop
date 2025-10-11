import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import DynamicTitle from './Components/DynamicTitle.jsx';
import Layout from './Pages/Layout.jsx';
import { CartProvider } from './Utils/Context/CartContext.jsx';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DynamicTitle />
    <CartProvider>
    <Layout />
    </CartProvider>
    </BrowserRouter>
    <Toaster />
  </StrictMode>,
)
