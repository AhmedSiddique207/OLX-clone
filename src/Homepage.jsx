import Index from "./components/header/Index";
import Adslider from "./components/slider ad/Adslider";
import Category from "./components/categories/Details";
import AdsDetails from "./components/ads/AdsDetails";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/backTop/BackToTopButton";
// import Reduxexample from "./reduxexample";


function Homepage() {


  return (
    <div>
      <Index />
      <Adslider />
      <Category /> 
      <AdsDetails />
      <Footer />
      {/* <Reduxexample/> */}
      <BackToTopButton />
    </div>
  );
}

export default Homepage;
