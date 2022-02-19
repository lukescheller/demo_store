import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";

const CustomNavBar = () => {
  return (
    <div>
      <Navbar
        bg="light"
        expand="md"
        variant="light"
        style={{ padding: "15px", marginBottom: "" }}
      >
        <Navbar.Brand>
          <Link to="/webportfolio2022">
            <img src={Logo} alt="" width="75px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <div
            style={{
              display: "flex",
              justifyContent: "Center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* user */}
            <Link
              to="/indesign"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-user-interface-kiranshastry-solid-kiranshastry-1.png" />
            </Link>
            <br />
            {/* shoppingcart */}
            <Link
              to="/shoppingcart"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-solid-kiranshastry-1.png" />
            </Link>
            <br />
            {/* Logout */}
            <Link
              to="/logout"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/000000/external-logout-social-media-sbts2018-solid-sbts2018.png" />
            </Link>
            <br />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
