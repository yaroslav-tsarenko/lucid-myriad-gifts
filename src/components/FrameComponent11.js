import { Button } from "@mui/material";
import Product6 from "./Product6";
import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <section className={`retail-content-wrapper ${className}`}>
      <div className="retail-content">
        <h1 className="retail-shopping">{`Retail & Shopping`}</h1>
        <div className="endless-selection-for">
          Endless selection for everything you need
        </div>
        <div className="product-cards">
          <Product6 image1="/image-1@2x.png" adidasGiftcard="Adidas Giftcard" />
          <div className="product11">
            <div className="card-design1">
              <div className="card-design-fenty">
                <div className="card-design-fenty-child" />
                <img
                  className="mask-group-icon"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
                <div className="usd-100-1000-wrapper">
                  <div className="usd-100-10002">USD $100 -$1000</div>
                </div>
              </div>
            </div>
            <div className="most-popular-gift-cards-group">
              <div className="most-popular-gift1">Most Popular gift Cards</div>
              <div className="text1">
                <div className="fenty-giftcard">Fenty Giftcard</div>
              </div>
            </div>
            <Button
              className="button2"
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
          <Product6
            image1="/image-1-1@2x.png"
            adidasGiftcard="Rolex Giftcard"
            propFlex="1"
            propMinWidth="370px"
            propWidth="unset"
            propMargin="unset"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propBackground="linear-gradient(180deg, #ceef51, #efffa7)"
          />
          <Product6
            image1="/image-1-2@2x.png"
            adidasGiftcard="Nike Giftcard"
            propFlex="1"
            propMinWidth="370px"
            propWidth="unset"
            propMargin="unset"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propBackground="linear-gradient(180deg, #cba1f9, #eab4ff)"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
