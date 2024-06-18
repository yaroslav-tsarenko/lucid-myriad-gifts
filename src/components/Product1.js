import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product1.css";

const Product1 = ({ className = "", propTop, propLeft }) => {
  const product23Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`product24 ${className}`} style={product23Style}>
      <div className="card-design16">
        <div className="card-designtravel">
          <img
            className="card-designtravel-child"
            loading="lazy"
            alt=""
            src="/rectangle-50@2x.png"
          />
          <h2 className="travel-giftcards">
            <p className="travel">Travel</p>
            <p className="giftcards6">GiftCards</p>
          </h2>
          <div className="usd-100-100011">USD $100 -$1000</div>
        </div>
      </div>
      <div className="text-container">
        <div className="text14">
          <div className="travel-giftcard">Travel Giftcard</div>
        </div>
        <div className="usd-2003">5 USD - 200 USD</div>
      </div>
    </div>
  );
};

Product1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Product1;
