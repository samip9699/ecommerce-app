import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Collection from "./pages/collection";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
function App() {
  return (
   
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/collection" element= {<Collection/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;