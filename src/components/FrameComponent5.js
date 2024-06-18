import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`frame-parent2 ${className}`}>
      <div className="frame-child1" />
      <div className="frame-wrapper3">
        <div className="off-parent1">
          <b className="off6">35% off</b>
          <div className="hurry-before-its5">Hurry before its too late</div>
        </div>
      </div>
      <div className="card-design-xbox1">
        <div className="card-design-xbox-item" />
        <img
          className="xbox-symbolpng-icon1"
          alt=""
          src="/xbox-symbolpng-1@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
