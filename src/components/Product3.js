import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product3.css";

const Product3 = ({
  className = "",
  image1,
  adidasGiftcard,
  propTop,
  propLeft,
  propBackground,
}) => {
  const product21Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div className={`product22 ${className}`} style={product21Style}>
      <div className="card-design14">
        <div className="card-design-adidas2">
          <div className="card-design-adidas-child" style={rectangleDivStyle} />
          <div className="image-1-frame">
            <img className="image-1-icon4" loading="lazy" alt="" src={image1} />
          </div>
          <div className="usd-100-10009">USD $100 -$1000</div>
        </div>
      </div>
      <div className="text-parent">
        <div className="text12">
          <div className="adidas-giftcard2">{adidasGiftcard}</div>
        </div>
        <div className="usd-2001">5 USD - 200 USD</div>
      </div>
    </div>
  );
};

Product3.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
  adidasGiftcard: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propBackground: PropTypes.any,
};

export default Product3;
