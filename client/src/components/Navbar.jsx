import {
  ShoppingCartOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";
import "../styles/NavbarStyle/Navbar.css";
import { IconButton } from "@mui/material";
import variables from "../variables/Variables.module.scss";
import Announcement from "./Announcement"

const Navbar = () => {
  return (
    <>
    <Announcement />
    <div className="navbar">
      <div className="navbar_right">
        <img src="assets/logo.png" alt="logo" />
        <div className="navbar_right_search">
          <input placeholder="Search..." />
          <IconButton>
            <Search sx={{ "&:hover": {color: variables.lightred} }}/>
          </IconButton>
        </div>
      </div>

      <div className="navbar_left">
        <IconButton>
          <PersonOutlined
            sx={{ fontSize: "35px", "&:hover": {color: variables.lightred} }}
          />
        </IconButton>
        <IconButton>
          <ShoppingCartOutlined
            sx={{ fontSize: "35px", "&:hover": {color: variables.lightred} }}
          />
        </IconButton>
      </div>
    </div>
    </>
  );
};

export default Navbar;
