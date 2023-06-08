
import './App.css';
import Header from './components/Header'
import ContactBanner from './components/ContactUsBanner';
import Contactdetails from './components/ContactDetails';
import ContactForm from './components/ContactFormDetails'
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function ContactUs() {
  return (
    <div >

     <Header/>
     <ContactBanner/>
     <Contactdetails/>
     <ContactForm/>
     <NewsLetter/>
     <Footer/>
   
    </div>
  );
}

export default ContactUs;
