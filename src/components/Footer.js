import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="logo-parent">
        <div className="logo7">
          <img className="logo-symbol-icon7" alt="" src="/logo-symbol-2.svg" />
          <h2 className="lucidmyriadgifts7">LucidMyriadGifts</h2>
        </div>
        <div className="about-parent">
          <b className="about2">About</b>
          <div className="about3">About</div>
          <div className="faq1">FAQ</div>
          <div className="contact4">Contact</div>
          <div className="press1">Press</div>
          <div className="reviews1">Reviews</div>
        </div>
        <div className="footer-columns">
          <b className="product2">Product</b>
          <div className="businesses1">Businesses</div>
          <div className="gift-card-incentives1">Gift Card Incentives</div>
        </div>
        <div className="footer-columns1">
          <b className="legal1">Legal</b>
          <div className="site-terms1">Site Terms</div>
          <div className="privacy1">Privacy</div>
        </div>
        <div className="footer-columns2">
          <b className="use-gifthaven1">Use GiftHaven</b>
          <div className="how-it-works1">How it works</div>
          <div className="why-us1">Why Us?</div>
          <div className="redeem1">Redeem</div>
        </div>
        <div className="footer-columns3">
          <b className="other-stuff1">Other stuff</b>
          <div className="blog2">Blog</div>
          <div className="gift-card-worth1">Gift Card Worth</div>
          <div className="sitemap1">Sitemap</div>
        </div>
      </div>
      <div className="categories-parent">
        <div className="categories">Categories</div>
        <div className="restaurants-bars-spas-shopping">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
