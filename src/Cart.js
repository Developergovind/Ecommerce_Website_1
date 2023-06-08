
import './App.css';
import Header from './components/Header'
import CartBanner from './components/CartBanner';
import Cartdetails  from './components/cart'
import AddToCart from './components/AddTocart';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function Cart() {
  return (
    <div >

     <Header/>
     <CartBanner/>
     <Cartdetails/>
     <AddToCart/>
     <NewsLetter/>
     <Footer/>
   
    </div>
  );
}

export default Cart;
