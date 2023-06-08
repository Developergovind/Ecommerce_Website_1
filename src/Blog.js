
import './App.css';
import Header from './components/Header'
import BlogBanner from './components/BlogBanner';
import Blogs  from './components/blogs'
import Pagination from './components/Pagination';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function Blog() {
  return (
    <div >

     <Header/>
     <BlogBanner/>
     <Blogs/>
     <Pagination/>
     <NewsLetter/>
     <Footer/>
   
    </div>
  );
}

export default Blog;
