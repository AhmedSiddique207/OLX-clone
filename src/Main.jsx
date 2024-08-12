import Index from "./components/header/Index";
import Adslider from "./components/slider ad/Adslider"
import Category from "./components/categories/Details"
import AdsDetails from "./components/ads/AdsDetails";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/backTop/BackToTopButton";


function Main() {

  return (

    <div >
      <Index />
      <Adslider />
      <Category />
      <AdsDetails />
      <Footer />
      <BackToTopButton />
    </div>

);

}

export default Main;
