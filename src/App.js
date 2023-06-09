import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Shop from './Shop';
import Blog from './Blog';
import About from './About';
import ContactUs from './Contact';
import Cart from './Cart';
import "./App.css";
import MenProducts from "./pages/MenProducts";
import WomenProducts from "./pages/WomenProduct";
import ProductDetails from "./pages/productDetails";
import Login from "./pages/Authentication/login";
import SignUp from "./pages/Authentication/signUp";

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/category/men" element={<MenProducts />} />
        <Route path="/category/women" element={<WomenProducts />} />
        <Route path="/productdetails" element={<ProductDetails/>} />
        <Route path="/login" element={<Login/>} />   
        <Route path="/signUp" element={<SignUp/>} />   
      </Routes>
    </Router>
    </div>
  );
}

export default App