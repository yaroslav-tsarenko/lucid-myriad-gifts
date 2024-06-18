import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`f-a-q-container-wrapper ${className}`}>
      <div className="f-a-q-container">
        <div className="f-a-q-header">
          <div className="f-a-q-title">
            <h1 className="frequently-asked-questions">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="welcome-to-the">
            Welcome to the FAQ section, where we address your queries to ensure
            a seamless beauty experience.
          </div>
        </div>
        <div className="f-a-q-list">
          <TextField
            className="f-a-q-item"
            placeholder="What payment methods do you accept?"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <img width="20px" height="20px" src="/group-17.svg" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#000" },
              "& .MuiInputBase-root": {
                height: "90px",
                paddingRight: "48px",
                borderRadius: "0px 0px 0px 0px",
              },
              "& .MuiInputBase-input": { color: "#262626" },
            }}
          />
          <div className="f-a-q-item1">
            <div className="can-i-modify">
              Can I modify or cancel my order after it has been placed?
            </div>
            <img className="f-a-q-item-child" alt="" src="/group-17-1.svg" />
          </div>
          <div className="f-a-q-item2">
            <div className="how-can-i"> How can I track my order?</div>
            <img className="f-a-q-item-item" alt="" src="/group-17-1.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
