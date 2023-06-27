import "./navBar.css";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <>
   
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

    {/* <div className="nav-bar-mobile">
          <div className="nav-bar-top-menu">
            <div className="container-left">
                <div className="hamburger">
                  <h1>Hamburger</h1>
                </div>
                <div className="logocontainer">
                  <img className="logo" alt="logo" src="" />
                </div>
            </div>
                <div className="container-right">
                  <div className="nar-cart-login">
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


              </div>

          </div>
          <div className="nav-bar-bottom-menu">

          </div>
        </div> */}
<div className="top">

    <div className="top-up">
          <div className="topLeft">
          <i class="fa fa-bars"></i>
            <Link to="/settings">
                <img className="topImg" src='' alt="" />
              </Link>
          </div>
          <div className="topCenter">
            
          
          </div>
          <div className="topRight">
            
              
            
              <ul className="topList">
                <li className="topListItem">
                  <Link>
                  <i class="fa-solid fa-cart-shopping"></i>
                  </Link>
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
          
              </ul>
        
          </div>
        </div>
        <div className="top-bottom">
          <div className="searchbar">
                <i
                  className="fa fa-search"
                  style={{
                    position:"absolute",
                    top:"10px",
                    left:"5px",
                    alignSelf: "center",
                    margin: "0px 0px",
                    fontSize: "15px",
                    color: "grey",
                    backgroundColor:"white"
                  }}
                ></i>
                <input className="search" type="text" placeholder="Search store" />
              </div>
        </div>
</div>



    </>
  );
};

export default NavBar;
