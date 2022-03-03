// MAKE SURE TO INSTALL THIS IN THE RIGHT FUCKING DIRECTORY.....
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosItems } from "../src/features/storeSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Store from "./components/Store";
import Shoppingcart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosItems());
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/*react changes - Switch is now Routes - component is now element - element={<element/>} */}
          <Route exact path="/" element={<Credentials />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/catalog" element={<Store />} />
          <Route exact path="/shoppingcart" element={<Shoppingcart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
