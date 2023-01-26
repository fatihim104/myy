import "./App.css";
import Basket from "./components/Basket";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { CartProvider } from "./CartContext";

function App() { 
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>  
  );
}

export default App;