import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./CheckoutPage.css";
import Header from "../components/custom-header/Header";
import HeroContent from "../components/HeroContent";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import SummerSaleBanner from "../components/SummerSaleBanner";
import FeaturedCategories1 from "../components/FeaturedCategories1";
import FeaturedCategories from "../components/FeaturedCategories";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";

const CheckoutPage = () => {
  return (

      <>
          <Header/>
          <div className="checkoutpage">
              <FrameComponent1 checkout="Checkout"/>
              <section className="checkoutpage-inner">
                  <FrameComponent/>
              </section>
              <Footer/>
          </div>
          <Footer/>
      </>

  );
};

export default CheckoutPage;
