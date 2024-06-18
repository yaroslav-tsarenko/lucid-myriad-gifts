import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-parent3 ${className}`}>
      <form className="billing-header-parent">
        <div className="billing-header">
          <h2 className="checkout1">Checkout</h2>
          <div className="header2">
            <b className="billing-details">Billing Details</b>
          </div>
          <div className="form-field-block">
            <div className="row-1">
              <div className="block-1">
                <b className="first-name">First Name</b>
              </div>
              <div className="block-2">
                <b className="last-name">Last Name</b>
              </div>
            </div>
            <div className="row-2">
              <div className="block-11">
                <b className="company-name">Company Name</b>
              </div>
              <div className="block-21">
                <b className="country">Country</b>
                <img className="icon6" alt="" src="/icon-2.svg" />
              </div>
            </div>
            <div className="row-3">
              <div className="block-12">
                <b className="street-address">Street Address</b>
              </div>
            </div>
            <TextField
              className="block-22"
              placeholder="Apartment / Suite / Unit / etc. (Optional)"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#b6b6b6" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="row-4">
              <div className="block-13">
                <b className="town-city">Town / City</b>
              </div>
            </div>
            <TextField
              className="block-23"
              placeholder="Email Address"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#b6b6b6" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="row-5">
              <TextField
                className="block-14"
                placeholder="ZIP"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#b6b6b6" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="block-24"
                placeholder="Phone"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#b6b6b6" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </div>
          </div>
          <div className="billing-header-child" />
          <div className="billing-title">
            <Button
              className="button11"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#5a5a5a",
                fontSize: "16",
                borderColor: "#b6b6b6",
                borderRadius: "4px",
                "&:hover": { borderColor: "#b6b6b6" },
                width: 100,
                height: 54,
              }}
            >
              Back
            </Button>
            <Button
              className="button12"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#ea7700",
                borderRadius: "4px",
                "&:hover": { background: "#ea7700" },
                width: 139,
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
        <div className="order-details">
          <div className="checkout-details">
            <div className="header3">
              <b className="checkout-details1">Checkout Details</b>
            </div>
            <div className="order-summary">
              <b className="cart-subtotal">Cart Subtotal</b>
              <b className="total-amounts">$360.00</b>
            </div>
            <div className="order-summary1">
              <b className="shipping-handling">{`Shipping & Handling`}</b>
              <b className="b3">$0.00</b>
            </div>
            <div className="order-summary2">
              <b className="other-taxes">Other Taxes</b>
              <b className="b4">$0.00</b>
            </div>
            <div className="summary-divider" />
            <div className="order-summary3">
              <b className="grand-total">Grand Total</b>
              <b className="b5">$360.00</b>
            </div>
          </div>
          <div className="transfer-options">
            <div className="header4">
              <b className="transfer-options1">Transfer Options</b>
            </div>
            <div className="checkout-details2">
              <div className="logos-block">
                <div className="block-15">
                  <div className="logo-block">
                    <img
                      className="image-1-icon2"
                      loading="lazy"
                      alt=""
                      src="/image-11@2x.png"
                    />
                  </div>
                  <b className="bank-transfer">
                    <p className="bank">Bank</p>
                    <p className="transfer">Transfer</p>
                  </b>
                </div>
                <div className="block-25">
                  <div className="logo-block1">
                    <img
                      className="image-2-icon"
                      loading="lazy"
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </div>
                  <b className="google-pay">
                    <p className="google">Google</p>
                    <p className="pay">Pay</p>
                  </b>
                </div>
              </div>
              <div className="method-container">
                <div className="block-3">
                  <div className="logo-block2">
                    <img
                      className="image-3-icon"
                      loading="lazy"
                      alt=""
                      src="/image-3@2x.png"
                    />
                  </div>
                  <b className="apple-pay">
                    <p className="apple">Apple</p>
                    <p className="pay1">Pay</p>
                  </b>
                </div>
                <div className="block-4">
                  <div className="logo-block3">
                    <img
                      className="image-4-icon"
                      loading="lazy"
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                  <b className="paypal">PayPal</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="checkout2">
        <div className="header5">
          <b className="checkout3">Checkout</b>
        </div>
        <div className="checkout-details3">
          <div className="your-personal-data">
            Your Personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our product
          </div>
          <Button
            className="button13"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#ea7700",
              borderRadius: "4px",
              "&:hover": { background: "#ea7700" },
              height: 54,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
