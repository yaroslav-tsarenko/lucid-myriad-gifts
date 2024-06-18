import { Button } from "@mui/material";
import Product from "./Product";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`frame-parent4 ${className}`}>
      <div className="recommended-gift-cards-parent">
        <h1 className="recommended-gift-cards">Recommended Gift-Cards</h1>
        <div className="treat-yourself-or1">
          Treat yourself or a loved one to the latest trends in footwear.
        </div>
      </div>
      <div className="recommendation-cards">
        <Product image1="/image-12@2x.png" adidasGiftcard="Adidas Giftcard" />
        <Product
          image1="/image-1-11@2x.png"
          adidasGiftcard="Nike Giftcard"
          propBackground="linear-gradient(180deg, #cba1f9, #eab4ff)"
        />
        <Product
          image1="/image-1-21@2x.png"
          adidasGiftcard="Rolex Giftcard"
          propBackground="linear-gradient(180deg, #ceef51, #efffa7)"
        />
        <div className="product110">
          <img
            className="card-design-icon"
            loading="lazy"
            alt=""
            src="/card-design.svg"
          />
          <div className="most-popular-gift-cards-parent4">
            <div className="most-popular-gift10">Most Popular gift Cards</div>
            <div className="text10">
              <div className="puma-giftcard1">Puma Giftcard</div>
            </div>
          </div>
          <Button
            className="button69"
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
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
