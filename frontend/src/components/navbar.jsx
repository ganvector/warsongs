import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const circle = {
      color: "white",
      backgroundColor: "white",
      borderRadius: "20px",
      width: "40px",
      height: "40px"
    };
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          OI
        </a>
        <span style={{ color: "white" }}>Vitor</span>
        <span style={circle} id="profile-indicator"></span>
      </nav>
    );
  }
}

export default Navbar;
