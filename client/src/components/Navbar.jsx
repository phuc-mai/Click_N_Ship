import {
  ShoppingCartOutlined,
  PersonOutlined,
  Search,
  FavoriteBorder,
} from "@mui/icons-material";
import "../styles/NavbarStyle/Navbar.css";
import { IconButton, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import variables from "../variables/Variables.module.scss";
import Announcement from "./Announcement";
import { logout } from "../redux/userRedux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state?.cart);
  const currentUser = useSelector((state) => state?.user?.currentUser?.user);

  const quantityCart = cart?.products?.length;
  const quantityWishlist = currentUser?.wishlist?.length;
  const [search, setSearch] = useState("");

  const fullName = currentUser ? `${currentUser?.firstName} ${currentUser?.lastName}` : 'Please login';
  
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
          <select
            value={fullName}
            onChange={(e) => {
              if (e.target.value !== "logout") return;
              dispatch(logout());
              navigate("/login");
            }}
          >
            <option value={fullName}>{fullName}</option>
           {fullName !== 'Please login' &&  <option value="logout">Logout</option>}
          </select>
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

          <Link to="/wishlist">
            <IconButton>
              <Badge badgeContent={quantityWishlist} color="primary">
                <FavoriteBorder
                  sx={{
                    fontSize: "35px",
                    "&:hover": { color: variables.lightred },
                  }}
                />
              </Badge>
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
