
import './App.css';
import Header from './components/Header'
import AboutUsBanner from './components/AboutUsBanner';
import Aboutus from './components/AboutUs';
import AboutWeb from './components/AboutWeb';
import Features from './components/Features';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function AboutUs() {
  return (
    <div >

     <Header/>
     <AboutUsBanner/>
     <Aboutus/>
     <AboutWeb/>
     <Features/>
     <NewsLetter/>
     <Footer/>
   
    </div>
  );
}

export default AboutUs;
