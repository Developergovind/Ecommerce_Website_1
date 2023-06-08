
import './App.css';
import Header from './components/Header'
import ShopBanner from './components/ShopBanner';
import Filters from './components/filterComponent'
import FeturedCollection from './components/FeaturedCollection';
import NewArrivals from './components/NewArrivals';
import Pagination from './components/Pagination';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import SearchedProducts from './pages/searchProduct'


function Shop() {
  return (
    <div >

     <Header/>
     <ShopBanner/>
     <SearchedProducts/>
     <Filters/>
     <FeturedCollection/>
     <NewArrivals/>
     <Pagination/>
     <NewsLetter/>
     <Footer/>
   
    </div>
  );
}

export default Shop;
