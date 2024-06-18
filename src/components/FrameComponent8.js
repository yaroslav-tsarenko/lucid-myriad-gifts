import { Button } from "@mui/material";
import Product5 from "./Product5";
import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`wish-deck-card-content-wrapper ${className}`}>
      <div className="wish-deck-card-content">
        <div className="our-wishdeck-cards-wrapper">
          <h1 className="our-wishdeck-cards">Our Wishdeck Cards</h1>
        </div>
        <div className="treat-yourself-or">
          Treat yourself or a loved one to the latest trends.
        </div>
        <div className="wish-deck-cards">
          <Product5
            pngwing1="/pngwing-1-3@2x.png"
            wishdeckGiftcardFootwear="Wishdeck Giftcard (Footwear)"
          />
          <Product5
            pngwing1="/pngwing-1-4@2x.png"
            wishdeckGiftcardFootwear="Wishdeck Giftcard (Clothes)"
            propBackground="linear-gradient(180deg, #ceef51, #efffa7)"
            propWidth="166.6px"
            propHeight="22.9px"
            propAlignSelf="unset"
            propWidth1="unset"
            propAlignSelf1="unset"
            propFlex="unset"
            propDisplay="unset"
          />
          <Product5
            pngwing1="/pngwing-1-5@2x.png"
            wishdeckGiftcardFootwear="Wishdeck Giftcard (Toys)"
            propBackground="linear-gradient(180deg, #ff8796, #feba95)"
            propWidth="131px"
            propHeight="unset"
            propAlignSelf="unset"
            propWidth1="200px"
            propAlignSelf1="stretch"
            propFlex="1"
            propDisplay="unset"
          />
          <div className="product13">
            <div className="card-design5">
              <div className="card-design41">
                <div className="card-design4-child" />
                <div className="usd-100-1000-container">
                  <div className="usd-100-10005">USD $100 -$1000</div>
                </div>
                <div className="pngwing-1-group">
                  <img
                    className="pngwing-1-icon3"
                    alt=""
                    src="/pngwing-1-6@2x.png"
                  />
                  <h2 className="wishdeck-giftcards3">
                    <p className="wishdeck3">WishDeck</p>
                    <p className="giftcards3">GiftCards</p>
                  </h2>
                </div>
              </div>
            </div>
            <div className="most-popular-gift-cards-container">
              <div className="most-popular-gift3">Most Popular gift Cards</div>
              <div className="text3">
                <div className="wishdeck-giftcard-beauty">
                  Wishdeck Giftcard (Beauty)
                </div>
              </div>
            </div>
            <Button
              className="button5"
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
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
