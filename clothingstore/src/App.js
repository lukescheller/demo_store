// MAKE SURE TO INSTALL THIS IN THE RIGHT FUCKING DIRECTORY.....
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      console.log("token");
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/*react changes - Switch is now Routes - component is now element - element={<element/>} */}
          <Route exact path="/" element={<Credentials />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
