import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({
  className = "",
  image1,
  adidasGiftcard,
  propBackground,
}) => {
  const cardImagesStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div className={`product19 ${className}`}>
      <div className="card-design11">
        <div className="card-design-adidas1">
          <div className="card-images" style={cardImagesStyle} />
          <div className="image-1-container">
            <img className="image-1-icon3" loading="lazy" alt="" src={image1} />
          </div>
          <div className="usd-100-10007">USD $100 -$1000</div>
        </div>
      </div>
      <div className="card-labels">
        <div className="most-popular-gift9">Most Popular gift Cards</div>
        <div className="text9">
          <div className="adidas-giftcard1">{adidasGiftcard}</div>
        </div>
      </div>
      <Button
        className="button68"
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

Product.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
  adidasGiftcard: PropTypes.string,

  /** Style props */
  propBackground: PropTypes.any,
};

export default Product;
