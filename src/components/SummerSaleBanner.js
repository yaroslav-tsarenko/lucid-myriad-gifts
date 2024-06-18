import PropTypes from "prop-types";
import "./SummerSaleBanner.css";

const SummerSaleBanner = ({ className = "" }) => {
  return (
    <div className={`summer-sale-banner ${className}`}>
      <h1 className="up-to-60-container">
        <p className="up-to">{`Up to `}</p>
        <p className="off">60% off</p>
      </h1>
      <div className="summer-sale-ends">Summer Sale ends in</div>
      <div className="summer-sale-counter">
        <div className="summer-sale-numbers">
          <b className="summer-sale-digits">14</b>
        </div>
        <div className="summer-sale-numbers1">
          <h3 className="h3">:</h3>
        </div>
        <div className="summer-sale-numbers2">
          <b className="b1">22</b>
        </div>
        <div className="summer-sale-numbers3">
          <h3 className="h31">:</h3>
        </div>
        <div className="summer-sale-numbers4">
          <b className="b2">45</b>
        </div>
      </div>
    </div>
  );
};

SummerSaleBanner.propTypes = {
  className: PropTypes.string,
};

export default SummerSaleBanner;
