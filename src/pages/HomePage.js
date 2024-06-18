import Header1 from "../components/Header1";
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
import "./HomePage.css";
import Header from "../components/custom-header/Header";
import Footer from "../components/custom-footer/Footer";

const HomePage = () => {
  return (
      <>
        <Header/>
        <div className="homepage">
          <section className="hero-section">
            <div className="nav">
              <div className="nav-3-desktop">
                <div className="ticker">
                  <div className="free-shipping-available">
                    Free Shipping available on all orders
                  </div>
                </div>
                <div className="nav1">
                  <div className="logo">
                    <img
                        className="logo-symbol-icon"
                        alt=""
                        src="/logo-symbol.svg"
                    />
                    <div className="lucidmyriadgifts">LucidMyriadGifts</div>
                  </div>
                  <div className="logo1">
                    <img
                        className="logo-symbol-icon1"
                        alt=""
                        src="/logo-symbol-1.svg"
                    />
                    <div className="lucidmyriadgifts1">LucidMyriadGifts</div>
                  </div>
                  <div className="menu-block">
                    <div className="menu-item-1">
                      <div className="shooping">Shooping</div>
                      <img
                          className="menu-item-1-child"
                          alt=""
                          src="/frame-54-3.svg"
                      />
                    </div>
                    <div className="menu-item-3">
                      <div className="blog">{`Blog `}</div>
                      <img
                          className="menu-item-3-child"
                          alt=""
                          src="/frame-54-3.svg"
                      />
                    </div>
                    <div className="menu-item-4">
                      <div className="about-us">About Us</div>
                      <img
                          className="menu-item-4-child"
                          alt=""
                          src="/frame-54-3.svg"
                      />
                    </div>
                  </div>
                  <div className="menu-block-2">
                    <div className="contact">Contact</div>
                    <div className="shop-now-wrapper">
                      <div className="shop-now">Shop Now</div>
                    </div>
                    <img className="icon" alt="" src="/icon.svg"/>
                    <img className="icon1" alt="" src="/icon-1.svg"/>
                  </div>
                </div>
              </div>
            </div>
            <HeroContent/>
          </section>
          <FrameComponent11/>
          <FrameComponent10/>
          <FrameComponent9/>
          <FrameComponent8/>
          <FrameComponent7/>
          <section className="featured-product-section">
            <div className="summer-sale">
              <SummerSaleBanner/>
            </div>
            <FeaturedCategories1/>
            <FeaturedCategories/>
            <div className="featured-categories">
              <h3 className="games">Games</h3>
              <FrameComponent6/>
              <FrameComponent5/>
            </div>
          </section>
          <FrameComponent4/>
        </div>
        <Footer/>
      </>

  );
};

export default HomePage;
