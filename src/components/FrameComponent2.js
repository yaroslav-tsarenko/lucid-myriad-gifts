import { Button } from "@mui/material";
import ItemInfo from "./ItemInfo";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`items-container-wrapper ${className}`}>
      <div className="items-container">
        <div className="item-container">
          <div className="header6">
            <div className="header-child" />
            <div className="header-labels">
              <b className="product3">Product</b>
            </div>
            <div className="price-quantity-column">
              <b className="price">Price</b>
              <b className="quantity">Quantity</b>
            </div>
            <b className="total">Total</b>
          </div>
          <ItemInfo
            fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
            discount20OFF="Discount: 20% OFF"
          />
          <ItemInfo
            fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
            discount20OFF="Worth USD $400"
            propLineHeight="120%"
          />
          <ItemInfo
            fentyBeauty50OFFGiftCard="Travel GiftCard"
            discount20OFF="Worth USD $400"
            propLineHeight="22px"
          />
          <div className="action-buttons">
            <Button
              className="button14"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "18",
                borderColor: "#000",
                borderRadius: "4px",
                "&:hover": { borderColor: "#000" },
                width: 134,
                height: 54,
              }}
            >
              Go Back
            </Button>
            <Button
              className="button15"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#344ead",
                fontSize: "18",
                background: "#ea7700",
                borderRadius: "4px",
                "&:hover": { background: "#ea7700" },
                width: 143,
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
        <div className="checkout-details4">
          <div className="header-wrapper">
            <div className="header7">
              <b className="checkout-details5">Checkout Details</b>
            </div>
          </div>
          <div className="subtotal-total">
            <div className="total-labels">
              <b className="cart-subtotal1">Cart Subtotal</b>
              <b className="total-separator">$360.00</b>
            </div>
          </div>
          <div className="total-details">
            <div className="charges-list">
              <div className="charge-labels">
                <b className="shipping-handling1">{`Shipping & Handling`}</b>
                <b className="other-taxes1">Other Taxes</b>
              </div>
              <div className="charge-labels1">
                <b className="b6">$0.00</b>
                <b className="b7">$0.00</b>
              </div>
            </div>
          </div>
          <div className="checkout-header">
            <div className="summary-divider1" />
          </div>
          <div className="additional-charges">
            <div className="grand-total-parent">
              <b className="grand-total1">Grand Total</b>
              <b className="b8">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
