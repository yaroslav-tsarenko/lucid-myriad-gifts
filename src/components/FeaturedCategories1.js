import PropTypes from "prop-types";
import "./FeaturedCategories1.css";

const FeaturedCategories1 = ({ className = "" }) => {
  return (
    <div className={`featured-categories1 ${className}`}>
      <h3 className="games-sports">{`Games & Sports`}</h3>
      <div className="featured-product-preview">
        <div className="card-design-nike">
          <div className="featured-placeholder" />
          <img className="image-1-icon1" alt="" src="/image-1-6@2x.png" />
        </div>
        <div className="featured-details">
          <div className="featured-offer-container">
            <b className="off1">35% off</b>
            <div className="hurry-before-its">Hurry before its too late</div>
          </div>
        </div>
      </div>
      <div className="featured-product-second">
        <div className="featured-product-bottom">
          <div className="featured-product-offer">
            <b className="off2">35% off</b>
            <div className="hurry-before-its1">Hurry before its too late</div>
          </div>
        </div>
        <div className="card-design-puma1">
          <div className="featured-second-placeholder" />
          <div className="featured-second-visual">
            <img
              className="x30-x-modul-lib-x5f-desktop-icon1"
              alt=""
              src="/-x30-xmodullib-x5f-desktop-1.svg"
            />
          </div>
          <div className="featured-second-content">$100</div>
        </div>
      </div>
    </div>
  );
};

FeaturedCategories1.propTypes = {
  className: PropTypes.string,
};

export default FeaturedCategories1;
