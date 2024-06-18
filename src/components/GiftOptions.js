import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import "./GiftOptions.css";

const GiftOptions = ({ className = "" }) => {
  return (
    <form className={`gift-options ${className}`}>
      <div className="choose-parent">
        <h1 className="choose">Choose</h1>
        <div className="who-are-you-gifting-parent">
          <div className="who-are-you">Who are you Gifting</div>
          <div className="buttons">
            <Button
              className="button16"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1c1c1c",
                fontSize: "16",
                background: "#ffb703",
                borderRadius: "4px",
                "&:hover": { background: "#ffb703" },
                height: 54,
              }}
            >
              Myself
            </Button>
            <div className="button17">
              <img className="tag-icon" alt="" src="/tag-icon.svg" />
              <div className="button18">Friend</div>
              <img className="tag-icon1" alt="" src="/tag-icon.svg" />
            </div>
          </div>
        </div>
        <div className="delivery-method">
          <div className="select-delivery-method">Select Delivery Method</div>
          <div className="options">
            <div className="select">Select:</div>
            <img className="selectphp-icon" alt="" src="/selectphp.svg" />
          </div>
        </div>
        <div className="quantity-buttons">
          <div className="button19">
            <img className="tag-icon2" alt="" src="/tag-icon1.svg" />
            <div className="button20">$5</div>
            <img className="tag-icon3" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button21">
            <img className="tag-icon4" alt="" src="/tag-icon1.svg" />
            <div className="button22">$5</div>
            <img className="tag-icon5" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button23">
            <img className="tag-icon6" alt="" src="/tag-icon1.svg" />
            <div className="button24">$5</div>
            <img className="tag-icon7" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button25">
            <img className="tag-icon8" alt="" src="/tag-icon1.svg" />
            <div className="button26">$5</div>
            <img className="tag-icon9" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button27">
            <img className="tag-icon10" alt="" src="/tag-icon.svg" />
            <div className="button28">$25</div>
            <img className="tag-icon11" alt="" src="/tag-icon.svg" />
          </div>
          <div className="button29">
            <img className="tag-icon12" alt="" src="/tag-icon.svg" />
            <div className="button30">$25</div>
            <img className="tag-icon13" alt="" src="/tag-icon.svg" />
          </div>
          <div className="button31">
            <img className="tag-icon14" alt="" src="/tag-icon.svg" />
            <div className="button32">$25</div>
            <img className="tag-icon15" alt="" src="/tag-icon.svg" />
          </div>
          <div className="button33">
            <img className="tag-icon16" alt="" src="/tag-icon.svg" />
            <div className="button34">$25</div>
            <img className="tag-icon17" alt="" src="/tag-icon.svg" />
          </div>
          <div className="button35">
            <img className="tag-icon18" alt="" src="/tag-icon.svg" />
            <div className="button36">$25</div>
            <img className="tag-icon19" alt="" src="/tag-icon.svg" />
          </div>
          <div className="button37">
            <img className="tag-icon20" alt="" src="/tag-icon.svg" />
            <div className="button38">$50</div>
            <img className="tag-icon21" alt="" src="/tag-icon.svg" />
          </div>
          <div className="button39">
            <img className="tag-icon22" alt="" src="/tag-icon.svg" />
            <div className="button40">$50</div>
            <img className="tag-icon23" alt="" src="/tag-icon.svg" />
          </div>
          <Button
            className="button41"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1c1c1c",
              fontSize: "16",
              background: "#ffb703",
              borderRadius: "4px",
              "&:hover": { background: "#ffb703" },
              width: 130,
              height: 54,
            }}
          >
            $100
          </Button>
          <div className="button42">
            <img className="tag-icon24" alt="" src="/tag-icon.svg" />
            <div className="button43">$50</div>
            <img className="tag-icon25" alt="" src="/tag-icon.svg" />
          </div>
          <div className="button44">
            <img className="tag-icon26" alt="" src="/tag-icon.svg" />
            <div className="button45">$50</div>
            <img className="tag-icon27" alt="" src="/tag-icon.svg" />
          </div>
          <div className="button46">
            <img className="tag-icon28" alt="" src="/tag-icon1.svg" />
            <div className="button47">$250</div>
            <img className="tag-icon29" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button48">
            <img className="tag-icon30" alt="" src="/tag-icon1.svg" />
            <div className="button49">$250</div>
            <img className="tag-icon31" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button50">
            <img className="tag-icon32" alt="" src="/tag-icon1.svg" />
            <div className="button51">$250</div>
            <img className="tag-icon33" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button52">
            <img className="tag-icon34" alt="" src="/tag-icon1.svg" />
            <div className="button53">$250</div>
            <img className="tag-icon35" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button54">
            <img className="tag-icon36" alt="" src="/tag-icon1.svg" />
            <div className="button55">$500</div>
            <img className="tag-icon37" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button56">
            <img className="tag-icon38" alt="" src="/tag-icon1.svg" />
            <div className="button57">$250</div>
            <img className="tag-icon39" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button58">
            <img className="tag-icon40" alt="" src="/tag-icon1.svg" />
            <div className="button59">$250</div>
            <img className="tag-icon41" alt="" src="/tag-icon1.svg" />
          </div>
          <div className="button60">
            <img className="tag-icon42" alt="" src="/tag-icon1.svg" />
            <div className="button61">$250</div>
            <img className="tag-icon43" alt="" src="/tag-icon1.svg" />
          </div>
        </div>
        <Button
          className="button62"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1c1c1c",
            fontSize: "16",
            background: "#ffb703",
            borderRadius: "4px",
            "&:hover": { background: "#ffb703" },
            height: 54,
          }}
        >{`Save & Continue`}</Button>
      </div>
      <TextField
        className="button63"
        placeholder="Wrap"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#000" },
          "& .MuiInputBase-root": { height: "80px", fontSize: "24px" },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
      <TextField
        className="button64"
        placeholder="Preview"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#000" },
          "& .MuiInputBase-root": { height: "80px", fontSize: "24px" },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
      <TextField
        className="button65"
        placeholder="Preview"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#000" },
          "& .MuiInputBase-root": { height: "80px", fontSize: "24px" },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
      <TextField
        className="button66"
        placeholder="Pay"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#000" },
          "& .MuiInputBase-root": { height: "80px", fontSize: "24px" },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
      <div className="button67">
        <img className="tag-icon44" alt="" src="/tag-icon1.svg" />
        <div className="read-the-full-details-parent">
          <div className="read-the-full">Read the full details</div>
          <img className="arrow-down-icon" alt="" src="/arrowdown.svg" />
        </div>
        <img className="tag-icon45" alt="" src="/tag-icon1.svg" />
      </div>
    </form>
  );
};

GiftOptions.propTypes = {
  className: PropTypes.string,
};

export default GiftOptions;
