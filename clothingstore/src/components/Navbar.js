import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import { useSelector } from "react-redux";

const CustomNavBar = () => {
  const isAuthorized = useSelector((state) => state.redux_state.isAuthorized);
  const items_length = useSelector((state) => state.customer_cart.cart.length);

  return (
    <div>
      <Navbar
        bg="light"
        expand="md"
        variant="light"
        style={{ padding: "15px", marginBottom: "" }}
      >
        <Navbar.Brand>
          <Link to="/">
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
            {isAuthorized ? (
              <Link
                to="/profile"
                style={{
                  color: "black",
                  margin: "15px",
                  textDecoration: "none",
                }}
              >
                <img
                  alt=""
                  src="https://img.icons8.com/color/64/000000/user-location.png"
                />{" "}
              </Link>
            ) : (
              ""
            )}
            <br />
            {/* catalog */}
            {isAuthorized ? (
              <Link
                to="/catalog"
                style={{
                  color: "black",
                  margin: "15px",
                  textDecoration: "none",
                }}
              >
                <img
                  alt=""
                  src="https://img.icons8.com/color/64/000000/books.png"
                />{" "}
              </Link>
            ) : (
              ""
            )}
            <br />

            {/* shoppingcart */}
            {isAuthorized ? (
              <Link
                to="/shoppingcart"
                style={{
                  color: "black",
                  margin: "15px",
                  textDecoration: "none",
                }}
              >
                <img
                  alt=""
                  src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/58/000000/external-cart-ecommerce-icongeek26-linear-colour-icongeek26.png"
                />{" "}
                {items_length}
              </Link>
            ) : (
              ""
            )}

            <br />
            {/* Logout */}
            {isAuthorized ? (
              <Link
                to="/logout"
                style={{
                  color: "black",
                  margin: "15px",
                  textDecoration: "none",
                }}
              >
                <img
                  alt=""
                  src="https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/48/000000/external-logout-social-media-sbts2018-lineal-color-sbts2018.png"
                />{" "}
              </Link>
            ) : (
              ""
            )}

            <br />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
