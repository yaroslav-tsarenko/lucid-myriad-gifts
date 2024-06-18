import PropTypes from "prop-types";
import "./FeaturedCategories.css";

const FeaturedCategories = ({ className = "" }) => {
  return (
    <div className={`featured-categories2 ${className}`}>
      <h3 className="makeup-beauty">Makeup $ Beauty</h3>
      <div className="card-design-fenty-parent">
        <img
          className="card-design-fenty2"
          loading="lazy"
          alt=""
          src="/card-design-fenty@2x.png"
        />
        <div className="frame-wrapper">
          <div className="off-parent">
            <b className="off3">35% off</b>
            <div className="hurry-before-its2">Hurry before its too late</div>
          </div>
        </div>
      </div>
      <div className="frame-container">
        <div className="frame-wrapper1">
          <div className="off-group">
            <b className="off4">35% off</b>
            <div className="hurry-before-its3">Hurry before its too late</div>
          </div>
        </div>
        <div className="card-design42">
          <div className="card-design4-item" />
          <img className="pngwing-1-icon5" alt="" src="/pngwing-1-8@2x.png" />
          <b className="wishdeck-giftcards4">
            <p className="wishdeck4">WishDeck</p>
            <p className="giftcards4">GiftCards</p>
          </b>
        </div>
      </div>
    </div>
  );
};

FeaturedCategories.propTypes = {
  className: PropTypes.string,
};

export default FeaturedCategories;
