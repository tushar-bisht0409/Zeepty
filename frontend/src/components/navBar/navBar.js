import "./navBar.css";
import React from "react";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-menu">
        <img className="logo" alt="logo" src="" />

        <div className="search_bar">
          <i
            className="fa fa-search"
            style={{
              alignSelf: "center",
              margin: "0px 8px",
              fontSize: "15px",
              color: "grey",
            }}
          ></i>
          <input className="search" type="text" placeholder="Search store" />
        </div>

        <button className="nav-become-a-seller">Become a seller</button>
        <div className="wish-cart-profile">
          <div className="nav-wishlist icons">
            <i
              style={{
                alignSelf: "center",
                margin: "4px",
                fontSize: "20px",
                color: "white",
              }}
              className="fa fa-heart"
            ></i>
            <p class="icons-p">Wishlist</p>
          </div>
          <div className="nav-cart icons">
            <i
              style={{
                alignSelf: "center",
                margin: "4px",
                fontSize: "20px",
                color: "white",
              }}
              className="fa fa-shopping-cart"
            ></i>
            <p class="icons-p">Cart</p>
          </div>
          <div className="nav-user-profile icons">
            <i
              style={{
                alignSelf: "center",
                margin: "4px",
                fontSize: "20px",
                color: "white",
              }}
              className="fas fa-user-alt"
            ></i>
            <p class="icons-p">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
