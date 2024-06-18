import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./HeroContent.css";

const HeroContent = ({ className = "" }) => {
  return (
    <div className={`hero-content ${className}`}>
      <div className="hero-inner-content">
        <div className="hero-call-to-action">
          <div className="cta">
            <div className="heading-parent">
              <h1 className="heading">
                Your One-Stop Shop for the Perfect Gift
              </h1>
              <b className="lorem-ipsum-dolor">
                we understand that finding the perfect gift can be challenging.
                That's why we offer a wide selection of gift cards from top
                brands, ensuring you find the ideal present for any occasion.
              </b>
            </div>
            <Button
              className="button"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#36689e",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#36689e" },
                width: 211,
                height: 60,
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
        <div className="image">
          <img
            className="image-child"
            loading="lazy"
            alt=""
            src="/group-9717.svg"
          />
          <div className="ellipse-parent">
            <div className="frame-child" />
            <div className="frame-item" />
            <img className="pngwing-5-icon" alt="" src="/pngwing-5@2x.png" />
          </div>
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="pngwing-6-icon" alt="" src="/pngwing-6@2x.png" />
        </div>
        <img
          className="hero-inner-content-child"
          loading="lazy"
          alt=""
          src="/vector-79.svg"
        />
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
