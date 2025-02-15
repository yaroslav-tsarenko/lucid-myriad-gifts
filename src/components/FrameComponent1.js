import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", checkout }) => {
  return (
    <section className={`header-parent ${className}`}>
      <header className="header1">
        <div className="nav-3-desktop2">
          <div className="ticker2">
            <div className="free-shipping-available2">
              Free Shipping available on all orders
            </div>
          </div>
          <div className="nav3">
            <div className="logo5">
              <img
                className="logo-symbol-icon5"
                loading="lazy"
                alt=""
                src="/logo-symbol.svg"
              />
              <h2 className="lucidmyriadgifts5">LucidMyriadGifts</h2>
            </div>
            <div className="logo6">
              <img
                className="logo-symbol-icon6"
                alt=""
                src="/logo-symbol-1.svg"
              />
              <h2 className="lucidmyriadgifts6">LucidMyriadGifts</h2>
            </div>
            <div className="menu-block2">
              <FormControl
                className="menu-item-12"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "93px",
                  height: "22px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 16,
                    fontWeight: "Regular",
                    fontFamily: "Roboto",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/frame-54.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>Shooping</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="menu-item-32"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "57px",
                  height: "22px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 16,
                    fontWeight: "Regular",
                    fontFamily: "Roboto",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/frame-54-1.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>{`Blog `}</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="menu-item-42"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "91px",
                  height: "22px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 16,
                    fontWeight: "Regular",
                    fontFamily: "Roboto",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/frame-54-2.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>About Us</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="menu-block-22">
              <div className="contact3">Contact</div>
              <Button
                className="menu-block-2-item"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#000",
                  borderRadius: "999px",
                  "&:hover": { background: "#000" },
                  width: 121,
                  height: 42,
                }}
              >
                Shop Now
              </Button>
              <img className="icon4" loading="lazy" alt="" src="/icon.svg" />
              <img className="icon5" alt="" src="/icon-1.svg" />
            </div>
          </div>
        </div>
      </header>
      <div className="banner-content-wrapper">
        <div className="banner-content">
          <div className="checkout-wrapper">
            <h1 className="checkout">{checkout}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  checkout: PropTypes.string,
};

export default FrameComponent1;
