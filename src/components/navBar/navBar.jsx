import * as React from "react";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./navBar.css";
import Logo from "../../assets/Fresh_hire.png";
import Hamburger from "../../assets/hamburger_menu.png";
import LogoText from "../../assets/Fresh_hire_light.png";

import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = () => {
    setClick(!click);
  };
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
    <div className={scroll ? "header onScroll" : "header"}>
      <div
        className="logo"
        onClick={() => navigate("FreshHire/")}
        style={{ cursor: "pointer" }}
      >
        <img src={Logo} alt="FreshHire Logo" /> Freshire
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleClick}
      >
        <li className="nav-link">
          <Link to="FreshHire/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="FreshHire/about">About Us</Link>
        </li>
        <li className="nav-link">
          <Link to="FreshHire/post_job">Post a job</Link>
        </li>
        <li className="nav-link">
          <Link to="FreshHire/job_listing">Job Listings</Link>
        </li>
        <li className="nav-link">
          <Link to="FreshHire/blog">Blog</Link>
        </li>
        <li className="signup_area_resp">
          <div className="signup_area">
            <button>Sign up</button>
          </div>
        </li>
      </ul>
      <div className="signup_area hide">
        <Button aria-describedby={id} variant="contained" onClick={handleOpen}>
          Sign up
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
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? <p>X</p> : <img src={Hamburger} alt="" />}
      </div>
    </div>
  );
}
