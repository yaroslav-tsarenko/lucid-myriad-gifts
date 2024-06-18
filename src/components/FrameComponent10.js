import { Button } from "@mui/material";
import CardDesign from "./CardDesign";
import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={`gift-card-content-wrapper ${className}`}>
      <div className="gift-card-content">
        <div className="gift-card-inner-content">
          <div className="gift-card-grid">
            <div className="gift-cards">
              <CardDesign pngwing1="/pngwing-1@2x.png" />
              <CardDesign
                pngwing1="/pngwing-1-1@2x.png"
                propBackground="linear-gradient(180deg, #fee5b1, #fff06e)"
                propWidth="131px"
                propLineHeight="10.29px"
                propHeight="18px"
              />
              <CardDesign
                pngwing1="/pngwing-1-2@2x.png"
                propBackground="linear-gradient(180deg, #ff8796, #feba95)"
                propWidth="101px"
                propLineHeight="13.9px"
                propHeight="unset"
              />
            </div>
          </div>
          <div className="find-the-perfect-gift-for-ever-parent">
            <h1 className="find-the-perfect">
              Find the Perfect Gift for Everyone
            </h1>
            <div className="looking-for-the">
              Looking for the perfect gift? Look no further! Our selection of
              gift cards caters to e veryone's interests, whether they're into
              the latest shoe trends, beauty essentials, or fun toys. Give the
              gift of choice and make every occasion special.
            </div>
            <Button
              className="button3"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
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
        <div className="i-tunes-cards-parent">
          <div className="i-tunes-cards">
            <div className="i-tunes-card-content">
              <img
                className="pngwing-9-icon"
                loading="lazy"
                alt=""
                src="/pngwing-9@2x.png"
              />
            </div>
            <div className="itunes-gift-cards-parent">
              <h1 className="itunes-gift-cards">iTunes Gift Cards</h1>
              <h1 className="unlock-endless-entertainment">
                Unlock Endless Entertainment
              </h1>
              <h3 className="unlock-endless-entertainment1">
                Unlock Endless Entertainment
              </h3>
            </div>
          </div>
          <div className="i-tunes-cards1">
            <div className="pngwing-8-wrapper">
              <img
                className="pngwing-8-icon"
                loading="lazy"
                alt=""
                src="/pngwing-8@2x.png"
              />
            </div>
            <div className="generic-gift-cards-parent">
              <h1 className="generic-gift-cards">Generic Gift Cards</h1>
              <h1 className="the-perfect-gift">
                The Perfect Gift for Any Occasion
              </h1>
              <h3 className="shop-gift-cards">Shop Gift Cards Now</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
