import Header from '../components/Header';
import WomenProductBanner from '../components/WomenProductBanner'
import WomenProduct from './womenproducts/Women'
import Pagination from '../components/Pagination';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

function WomenProducts() 
{
    return (
        <div >
            <Header />
            <WomenProductBanner />
            <WomenProduct />
            <Pagination />
            <NewsLetter />
            <Footer />
        </div>
    );
}

export default WomenProducts;
