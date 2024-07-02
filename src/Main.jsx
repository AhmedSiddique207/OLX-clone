import Index from "./components/header/Index";
import Category from "./components/categories/Category";
// import AdsDetails from "./components/ads/AdsDetails";
import Data from "./components/ads/data"


function Main() {

  return (
    <div >
      <Index />
      <Category />
      {/* <AdsDetails /> */}
      <Data />

    </div>

  );

}

export default Main;

