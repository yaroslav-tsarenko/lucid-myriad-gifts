import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product2.css";

const Product2 = ({ className = "", propTop, propLeft }) => {
  const product22Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`product23 ${className}`} style={product22Style}>
      <div className="card-design15">
        <div className="card-design-fenty3">
          <div className="card-design-fenty-inner" />
          <img
            className="mask-group-icon4"
            loading="lazy"
            alt=""
            src="/mask-group1@2x.png"
          />
          <div className="usd-100-1000-wrapper1">
            <div className="usd-100-100010">USD $100 -$1000</div>
          </div>
        </div>
      </div>
      <div className="text-group">
        <div className="text13">
          <div className="fenty-giftcard2">Fenty Giftcard</div>
        </div>
        <div className="usd-2002">5 USD - 200 USD</div>
      </div>
    </div>
  );
};

Product2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Product2;
