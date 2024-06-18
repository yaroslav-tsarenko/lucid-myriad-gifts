import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ExpandableSection.css";

const ExpandableSection = ({
  className = "",
  deliveryOptionsServices,
  freeShipping,
  propMinWidth,
}) => {
  const freeShippingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`expandable-section-1 ${className}`}>
      <div className="options-icons">
        <div className="option-labels">
          <div className="delivery-options">{deliveryOptionsServices}</div>
        </div>
        <img className="icon9" alt="" src="/icon-21.svg" />
      </div>
      <div className="checkbox-section-1">
        <input className="frame-input" type="checkbox" />
        <div className="free-shipping" style={freeShippingStyle}>
          {freeShipping}
        </div>
      </div>
    </div>
  );
};

ExpandableSection.propTypes = {
  className: PropTypes.string,
  deliveryOptionsServices: PropTypes.string,
  freeShipping: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default ExpandableSection;
