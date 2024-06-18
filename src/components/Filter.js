import ExpandableSection from "./ExpandableSection";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ className = "" }) => {
  return (
    <div className={`filter ${className}`}>
      <ExpandableSection
        deliveryOptionsServices={`Delivery Options & Services`}
        freeShipping="Free Shipping"
      />
      <div className="filter-headers" />
      <ExpandableSection
        deliveryOptionsServices="Discounts"
        freeShipping="Sale"
        propMinWidth="24px"
      />
      <div className="filter-headers1" />
      <div className="expandable-section-3">
        <div className="price-input">
          <div className="price-label-container">
            <div className="price1">Price</div>
          </div>
          <img className="icon10" alt="" src="/icon-21.svg" />
        </div>
        <div className="checkbox-section-11">
          <input className="frame-input1" type="checkbox" />
          <div className="placeholder">$0 - $5</div>
        </div>
        <div className="checkbox-section-2">
          <input className="frame-input2" type="checkbox" />
          <div className="div3">$6 - $10</div>
        </div>
        <div className="checkbox-section-3">
          <input className="frame-input3" type="checkbox" />
          <div className="div4">$10 - $25</div>
        </div>
        <div className="checkbox-section-5">
          <input className="frame-input4" type="checkbox" />
          <div className="div5">$30 - $50</div>
        </div>
        <div className="checkbox-section-4">
          <input className="frame-input5" type="checkbox" />
          <div className="div6">$75 - $100</div>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
};

export default Filter;
