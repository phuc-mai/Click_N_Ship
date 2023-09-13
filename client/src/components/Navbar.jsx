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
import { useState } from "react";

import Announcement from "./Announcement";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const quantityCart = cart.products.length;

  const [search, setSearch] = useState("");

  return (
    <>
      <Announcement />

      <div className="navbar">
        <div className="navbar_right">
          <a href="/">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <div className="navbar_right_search">
            <input
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton href={`/products?query=${search}`}>
              <Search sx={{ "&:hover": { color: variables.lightred } }} />
            </IconButton>
          </div>
        </div>

        <div className="navbar_left">
          <Link to="/login">
            <IconButton>
              <PersonOutlined
                sx={{
                  fontSize: "35px",
                  "&:hover": { color: variables.lightred },
                }}
              />
            </IconButton>
          </Link>

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
