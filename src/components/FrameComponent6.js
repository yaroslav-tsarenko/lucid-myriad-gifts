import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`frame-parent1 ${className}`}>
      <div className="frame-inner" />
      <div className="card-design-playstation">
        <div className="div2">$50</div>
        <img
          className="card-design-playstation-child"
          alt=""
          src="/vector-1-1.svg"
        />
        <img className="mask-group-icon3" alt="" src="/mask-group-3@2x.png" />
      </div>
      <div className="frame-wrapper2">
        <div className="off-container">
          <b className="off5">35% off</b>
          <div className="hurry-before-its4">Hurry before its too late</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
