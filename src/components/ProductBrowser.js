import { Button } from "@mui/material";
import Product4 from "./Product4";
import Product3 from "./Product3";
import Product2 from "./Product2";
import Product1 from "./Product1";
import PropTypes from "prop-types";
import "./ProductBrowser.css";

const ProductBrowser = ({ className = "" }) => {
  return (
    <div className={`product-browser ${className}`}>
      <div className="breadcrumbs-container">
        <div className="breadcrumbs">
          <div className="home-products">Home / Products</div>
          <h1 className="all-products">All Products</h1>
        </div>
        <div className="sorting">
          <div className="sort-options">
            <Button
              className="sort-labels"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#f1f1f1",
                borderColor: "#dadada",
                borderWidth: "0px 1px 0px 1px",
                borderStyle: "solid",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#f1f1f1" },
                width: 105,
                height: 38,
              }}
            >
              Best Price
            </Button>
            <div className="sort-labels1">
              <div className="orders">Orders</div>
            </div>
            <Button
              className="sort-labels2"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#fff",
                borderColor: "#dadada",
                borderWidth: "0px 1px 0px 1px",
                borderStyle: "solid",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#fff" },
                width: 69,
                height: 38,
              }}
            >
              Price
            </Button>
          </div>
          <div className="view-style">
            <div className="view">View</div>
            <div className="view-icons">
              <div className="icon-wrapper">
                <img className="icon11" alt="" src="/icon-5.svg" />
              </div>
              <div className="icon-container">
                <img className="icon12" alt="" src="/icon-6.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-cards1">
        <Product4
          pngwing1="/pngwing-12@2x.png"
          wishdeckGiftcardClothes="Wishdeck Giftcard (Clothes)"
        />
        <Product4
          pngwing1="/pngwing-1-11@2x.png"
          wishdeckGiftcardClothes="Wishdeck Giftcard (Footwear)"
          propLeft="426px"
          propBackground="linear-gradient(180deg, #fee5b1, #fff06e)"
          propWidth="157.1px"
          propHeight="21.6px"
          propAlignSelf="stretch"
          propWidth1="unset"
          propAlignSelf1="stretch"
          propFlex="1"
          propDisplay="inline-block"
        />
        <Product4
          pngwing1="/pngwing-1-21@2x.png"
          wishdeckGiftcardClothes="Wishdeck Giftcard (Toys)"
          propLeft="852px"
          propBackground="linear-gradient(180deg, #ff8796, #feba95)"
          propWidth="131px"
          propHeight="unset"
          propAlignSelf="unset"
          propWidth1="200px"
          propAlignSelf1="stretch"
          propFlex="1"
          propDisplay="unset"
        />
        <Product3 image1="/image-12@2x.png" adidasGiftcard="Adidas Giftcard" />
        <Product2 />
        <div className="product25">
          <div className="card-design17">
            <div className="card-design-holiday">
              <img
                className="image-8-icon"
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
              <div className="holiday-gift-voucher-wrapper">
                <h1 className="holiday-gift-voucher-container">
                  <p className="holiday">{`Holiday `}</p>
                  <p className="gift-voucher">Gift Voucher</p>
                </h1>
              </div>
              <div className="peru-parent">
                <h1 className="peru">PERU</h1>
                <b className="product-titles">$600</b>
              </div>
            </div>
          </div>
          <div className="text-parent1">
            <div className="text15">
              <div className="holiday-giftcard">Holiday Giftcard</div>
            </div>
            <div className="usd-2004">5 USD - 200 USD</div>
          </div>
        </div>
        <div className="product26">
          <img
            className="card-design-icon1"
            loading="lazy"
            alt=""
            src="/card-design.svg"
          />
          <div className="text-parent2">
            <div className="text16">
              <div className="puma-giftcard2">Puma Giftcard</div>
            </div>
            <div className="usd-2005">5 USD - 200 USD</div>
          </div>
        </div>
        <Product3
          image1="/image-1-11@2x.png"
          adidasGiftcard="Nike Giftcard"
          propTop="834px"
          propLeft="426px"
          propBackground="linear-gradient(180deg, #cba1f9, #eab4ff)"
        />
        <Product3
          image1="/image-1-21@2x.png"
          adidasGiftcard="Rolex Giftcard"
          propTop="834px"
          propLeft="852px"
          propBackground="linear-gradient(180deg, #ceef51, #efffa7)"
        />
        <Product1 />
        <div className="product27">
          <div className="card-design18">
            <div className="wrapper-vector-1-parent">
              <div className="wrapper-vector-11">
                <img
                  className="wrapper-vector-1-item"
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <img
                className="mask-group-icon5"
                alt=""
                src="/mask-group-11@2x.png"
              />
            </div>
            <div className="title-containers">
              <div className="usd-100-100012">USD $100 -$1000</div>
            </div>
          </div>
          <div className="text-parent3">
            <div className="text17">
              <div className="playstation-giftcard">Playstation Giftcard</div>
            </div>
            <div className="usd-2006">5 USD - 200 USD</div>
          </div>
        </div>
        <div className="product28">
          <div className="card-design19">
            <div className="card-design-spotify1">
              <b className="b9">$60</b>
              <div className="wrapper-vector-12">
                <img
                  className="wrapper-vector-1-inner"
                  alt=""
                  src="/vector-1-11.svg"
                />
              </div>
              <img
                className="pngwing-1-icon7"
                alt=""
                src="/pngwing-1-31@2x.png"
              />
            </div>
          </div>
          <div className="text-parent4">
            <div className="text18">
              <div className="spotify-giftcard1">Spotify Giftcard</div>
            </div>
            <div className="usd-2007">5 USD - 200 USD</div>
          </div>
        </div>
        <Product2 propTop="1668px" propLeft="0px" />
        <Product1 propTop="1668px" propLeft="426px" />
        <div className="product29">
          <div className="card-design20">
            <div className="card-design-ubereats1">
              <div className="image-mask-wrapper">
                <div className="image-mask">
                  <div className="image-placeholder">$100</div>
                  <img
                    className="mask-group-icon6"
                    alt=""
                    src="/mask-group-31@2x.png"
                  />
                </div>
              </div>
              <img
                className="card-design-ubereats-child"
                loading="lazy"
                alt=""
                src="/rectangle-21@2x.png"
              />
            </div>
          </div>
          <div className="text-parent5">
            <div className="text19">
              <div className="uber-eats-giftcard1">Uber eats Giftcard</div>
            </div>
            <div className="usd-2008">5 USD - 200 USD</div>
          </div>
        </div>
      </div>
      <div className="load-more-button">
        <div className="load-more">Load More</div>
      </div>
    </div>
  );
};

ProductBrowser.propTypes = {
  className: PropTypes.string,
};

export default ProductBrowser;
