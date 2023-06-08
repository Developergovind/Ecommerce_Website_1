import Header from '../components/Header';
import MenProductBanner from '../components/MenProductsBanner';
import MenProduct from './menproducts/Men';
import Pagination from '../components/Pagination';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

function MenProducts() {
    return (
        <div >

            <Header />
            <MenProductBanner />
            <MenProduct />
            <Pagination />
            <NewsLetter />
            <Footer />

        </div>
    );
}

export default MenProducts;
