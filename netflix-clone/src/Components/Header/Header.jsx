import React, { useState } from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* ===== TOP BAR (ALWAYS VISIBLE) ===== */}
        <div className="header_top">
          <div className="header_logo">
            <img src={NetflixLogo} alt="Netflix Logo" width="100" />
          </div>

          <button
            className="accordion_toggle"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setAccountOpen(false);
            }}
          >
            Browse <ArrowDropDownIcon />
          </button>

          <button
            className="accordion_toggle"
            onClick={() => {
              setAccountOpen(!accountOpen);
              setMenuOpen(false);
            }}
          >
            Account <ArrowDropDownIcon />
          </button>
        </div>

        {/* ===== ACCORDION CONTENT ===== */}
        <div className={`header_left accordion ${menuOpen ? "open" : ""}`}>
          <ul className="accordion_content">
            <li>Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className={`header_right accordion ${accountOpen ? "open" : ""}`}>
          <ul className="accordion_content">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
