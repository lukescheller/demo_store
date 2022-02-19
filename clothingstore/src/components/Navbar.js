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
        style={{ padding: "15px", marginBottom: "25px" }}
      >
        <Navbar.Brand>
          <Link to="/webportfolio2022">
            <img src={Logo} alt="" width="75px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {/* photoshop composites */}
          <div
            style={{
              display: "flex",
              justifyContent: "Center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/photoshopcomposites"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/ios-glyphs/60/000000/adobe-photoshop.png"
              />{" "}
            </Link>
            <br />
            {/* InDesign */}
            <Link
              to="/indesign"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/ios-glyphs/60/000000/adobe-indesign.png"
              />
            </Link>
            <br />
            {/* clothing */}
            <Link
              to="/clothing"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-shirt-tropical-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
              />{" "}
            </Link>
            <br />

            {/* Logos */}
            <Link
              to="/logos"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/ios-glyphs/60/000000/trademark.png"
              />
            </Link>
            <br />

            {/* digitalillustrations */}
            <Link
              to="/digitalillustrations"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/material-rounded/48/000000/pencil-tip.png"
              />
            </Link>
            <br />
            {/* code */}
            <Link
              to="/code"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/ios-glyphs/50/000000/pokeball.png"
              />{" "}
            </Link>
            <br />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
