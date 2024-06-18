import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ItemInfo.css";

const ItemInfo = ({
  className = "",
  fentyBeauty50OFFGiftCard,
  discount20OFF,
  propLineHeight,
}) => {
  const fentyBeauty50Style = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={`item-info ${className}`}>
      <div className="cart-item">
        <img
          className="product-thumbnail-icon"
          loading="lazy"
          alt=""
          src="/rectangle-4554@2x.png"
        />
        <div className="item-price">
          <b className="fenty-beauty-50" style={fentyBeauty50Style}>
            {fentyBeauty50OFFGiftCard}
          </b>
          <b className="discount-20-off">{discount20OFF}</b>
        </div>
        <div className="quantity-adjust-parent">
          <div className="quantity-adjust">
            <b className="price-value">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="credit-adjustments">
            <div className="adjust-buttons">
              <div className="credit-add-buttons">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <b className="icon-separator">3</b>
              <input className="quantity-icons" type="checkbox" />
            </div>
            <FormControl
              className="item-time"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#ea7700",
                borderRadius: "8px",
                width: "100%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Bold",
                  fontFamily: "Archivo",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="warning" />
              <Select
                color="warning"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/time-input.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <b className="separator">$120.00</b>
      </div>
      <div className="item-divider" />
    </div>
  );
};

ItemInfo.propTypes = {
  className: PropTypes.string,
  fentyBeauty50OFFGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,

  /** Style props */
  propLineHeight: PropTypes.any,
};

export default ItemInfo;
