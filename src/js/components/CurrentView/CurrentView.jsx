import React from "react";

const CurrentView = ({ currentView = "All notes" }) => {
  return <p className="lead">Currently viewing: {currentView}</p>;
};

export default CurrentView;
