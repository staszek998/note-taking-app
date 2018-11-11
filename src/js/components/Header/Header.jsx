import React from "react";

const Header = ({ currentView = "All notes" }) => {
  return (
    <header>
      <h1 className="display-1">Notes</h1>
      <p className="lead">Currently viewing: {currentView}</p>
    </header>
  );
};

export default Header;
