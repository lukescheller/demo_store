// MAKE SURE TO INSTALL THIS IN THE RIGHT FUCKING DIRECTORY.....
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/*react changes - Switch is now Routes - component is now element - element={<element/>} */}
          <Route exact path="/" element={<Credentials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
