import {
  ShoppingCartOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";
import "../styles/NavbarStyle/Navbar.css";
import { IconButton, Badge } from "@mui/material";
import variables from "../variables/Variables.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Announcement from "./Announcement";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const quantityCart = cart.quantity;

  return (
    <>
      <Announcement />
      <div className="navbar">
        <div className="navbar_right">
          <a href="/">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <div className="navbar_right_search">
            <input placeholder="Search..." />
            <IconButton>
              <Search sx={{ "&:hover": { color: variables.lightred } }} />
            </IconButton>
          </div>
        </div>

        <div className="navbar_left">
          <IconButton>
            <PersonOutlined
              sx={{
                fontSize: "35px",
                "&:hover": { color: variables.lightred },
              }}
            />
          </IconButton>

          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={quantityCart} color="primary">
                <ShoppingCartOutlined
                  sx={{
                    fontSize: "35px",
                    "&:hover": { color: variables.lightred },
                  }}
                />
              </Badge>
            </IconButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
