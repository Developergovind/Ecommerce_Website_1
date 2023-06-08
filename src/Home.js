
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeturedCollection from './components/FeaturedCollection';
import Banner from './components/Banner';
import NewArrivals from './components/NewArrivals';
import SmBanner from './components/SmallBanner'
import SmallerBanner from './components/SmallerBanner'
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import MenWomenCategory from './components/MenWomenCategory'
function App() {
  return (
    <div >
     <Header/>
     <Hero/>
     <Features/>
     <MenWomenCategory/>
     <FeturedCollection/>
     <Banner/>
     <NewArrivals/>
     <SmBanner/>
     <SmallerBanner/>
     <NewsLetter/>
     <Footer/>
     
    </div>
  );
}

export default App;
