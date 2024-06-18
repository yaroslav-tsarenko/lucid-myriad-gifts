import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardDesign.css";

const CardDesign = ({
  className = "",
  pngwing1,
  propBackground,
  propWidth,
  propLineHeight,
  propHeight,
}) => {
  const giftCardBackgroundsStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const uSD1001000Style = useMemo(() => {
    return {
      width: propWidth,
      lineHeight: propLineHeight,
      height: propHeight,
    };
  }, [propWidth, propLineHeight, propHeight]);

  return (
    <div className={`card-design4 ${className}`}>
      <div className="gift-card-backgrounds" style={giftCardBackgroundsStyle} />
      <div className="pngwing-1-parent">
        <img className="pngwing-1-icon1" loading="lazy" alt="" src={pngwing1} />
        <b className="wishdeck-giftcards1">
          <p className="wishdeck1">WishDeck</p>
          <p className="giftcards1">GiftCards</p>
        </b>
      </div>
      <div className="usd-100-10003" style={uSD1001000Style}>
        USD $100 -$1000
      </div>
    </div>
  );
};

CardDesign.propTypes = {
  className: PropTypes.string,
  pngwing1: PropTypes.string,

  /** Style props */
  propBackground: PropTypes.any,
  propWidth: PropTypes.any,
  propLineHeight: PropTypes.any,
  propHeight: PropTypes.any,
};

export default CardDesign;
