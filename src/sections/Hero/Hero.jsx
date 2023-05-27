import { useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import heroImage from "../../assets/hero__image.webp";
import Wavy_Check from "../../assets/Wavy_Check.png";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addBoxShadow = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", addBoxShadow);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__left_header">
            The Best Place To Hire Talents And Find Your Dream Job
          </h1>
          <p>
            Find the best jobs, Research fast growing companies and hire awesome
            talents.
          </p>
          <div className="hero__left__postjob">
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleOpen}
            >
              Post Job
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography sx={{ p: 2 }}>Coming soon...</Typography>
            </Popover>
            <p>Apply for jobs</p>
          </div>
          <div className="hero__left__bottom">
            <div>
              <img src={Wavy_Check} alt="" />
              <p>Early Onboarding</p>
            </div>
            <div>
              <img src={Wavy_Check} alt="" />
              <p>1000 new jobs</p>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
