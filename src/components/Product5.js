import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Product5.css";

const Product5 = ({
  className = "",
  pngwing1,
  wishdeckGiftcardFootwear,
  propBackground,
  propWidth,
  propHeight,
  propAlignSelf,
  propWidth1,
  propAlignSelf1,
  propFlex,
  propDisplay,
}) => {
  const wishdeckCardImageOneStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const uSD10010001Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const wishdeckCardTwoStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  const textStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const wishdeckGiftcardFootwearStyle = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
    };
  }, [propFlex, propDisplay]);

  return (
    <div className={`product12 ${className}`}>
      <div className="card-design3">
        <div className="card-design21">
          <div
            className="wishdeck-card-image-one"
            style={wishdeckCardImageOneStyle}
          />
          <div className="wishdeck-card-content-one">
            <img className="pngwing-1-icon2" alt="" src={pngwing1} />
            <h2 className="wishdeck-giftcards2">
              <p className="wishdeck2">WishDeck</p>
              <p className="giftcards2">GiftCards</p>
            </h2>
          </div>
          <div className="usd-100-10004" style={uSD10010001Style}>
            USD $100 -$1000
          </div>
        </div>
      </div>
      <div className="wishdeck-card-two" style={wishdeckCardTwoStyle}>
        <div className="most-popular-gift2">Most Popular gift Cards</div>
        <div className="text2" style={textStyle}>
          <div
            className="wishdeck-giftcard-footwear"
            style={wishdeckGiftcardFootwearStyle}
          >
            {wishdeckGiftcardFootwear}
          </div>
        </div>
      </div>
      <Button
        className="button4"
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

Product5.propTypes = {
  className: PropTypes.string,
  pngwing1: PropTypes.string,
  wishdeckGiftcardFootwear: PropTypes.string,

  /** Style props */
  propBackground: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Product5;
