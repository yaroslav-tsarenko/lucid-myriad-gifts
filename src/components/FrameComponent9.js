import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`starbucks-offer-content-wrapper ${className}`}>
      <div className="starbucks-offer-content">
        <div className="limited-time-offer-wrapper">
          <div className="limited-time-offer">Limited-Time Offer</div>
        </div>
        <div className="offer-content">
          <div className="offer-image">
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <img
              className="pngwing-7-icon"
              loading="lazy"
              alt=""
              src="/pngwing-7@2x.png"
            />
          </div>
          <h1 className="buy-a-50">
            Buy a $50 Starbucks Gift Card and Get a $5 Bonus!
          </h1>
          <div className="offer-disclaimer">
            <div className="hurry-this-offer">
              Hurry, this offer won't last long! Perfect for any occasion – from
              birthdays and holidays to just because.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
