import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product4.css";

const Product4 = ({
  className = "",
  pngwing1,
  wishdeckGiftcardClothes,
  propLeft,
  propBackground,
  propWidth,
  propHeight,
  propAlignSelf,
  propWidth1,
  propAlignSelf1,
  propFlex,
  propDisplay,
}) => {
  const product2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const imageContainersStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const uSD10010002Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const productDescriptionsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  const text1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const wishdeckGiftcardClothesStyle = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
    };
  }, [propFlex, propDisplay]);

  return (
    <div className={`product21 ${className}`} style={product2Style}>
      <div className="card-design12">
        <div className="card-design13">
          <div className="image-containers" style={imageContainersStyle} />
          <div className="product-details">
            <img
              className="pngwing-1-icon6"
              loading="lazy"
              alt=""
              src={pngwing1}
            />
            <h2 className="wishdeck-giftcards5">
              <p className="wishdeck5">WishDeck</p>
              <p className="giftcards5">GiftCards</p>
            </h2>
          </div>
          <div className="usd-100-10008" style={uSD10010002Style}>
            USD $100 -$1000
          </div>
        </div>
      </div>
      <div className="product-descriptions" style={productDescriptionsStyle}>
        <div className="text11" style={text1Style}>
          <div
            className="wishdeck-giftcard-clothes"
            style={wishdeckGiftcardClothesStyle}
          >
            {wishdeckGiftcardClothes}
          </div>
        </div>
        <div className="usd-200">5 USD - 200 USD</div>
      </div>
    </div>
  );
};

Product4.propTypes = {
  className: PropTypes.string,
  pngwing1: PropTypes.string,
  wishdeckGiftcardClothes: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propBackground: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Product4;
