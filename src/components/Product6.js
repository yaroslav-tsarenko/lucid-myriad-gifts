import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Product6.css";

const Product6 = ({
  className = "",
  image1,
  adidasGiftcard,
  propFlex,
  propMinWidth,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propLeft,
  propBackground,
}) => {
  const product1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [
    propFlex,
    propMinWidth,
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propLeft,
  ]);

  const cardBackgroundsStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div className={`product1 ${className}`} style={product1Style}>
      <div className="card-design">
        <div className="card-design-adidas">
          <div className="card-backgrounds" style={cardBackgroundsStyle} />
          <div className="image-1-wrapper">
            <img className="image-1-icon" loading="lazy" alt="" src={image1} />
          </div>
          <div className="usd-100-10001">USD $100 -$1000</div>
        </div>
      </div>
      <div className="most-popular-gift-cards-parent">
        <div className="most-popular-gift">Most Popular gift Cards</div>
        <div className="text">
          <div className="adidas-giftcard">{adidasGiftcard}</div>
        </div>
      </div>
      <Button
        className="button1"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#1c1c1c",
          fontSize: "16",
          background: "#ffb703",
          borderRadius: "4px",
          "&:hover": { background: "#ffb703" },
          width: 137,
          height: 54,
        }}
      >
        Shop Now
      </Button>
    </div>
  );
};

Product6.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
  adidasGiftcard: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propBackground: PropTypes.any,
};

export default Product6;
