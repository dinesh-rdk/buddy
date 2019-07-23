import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="sidebar">
    <Link to="/">Home</Link>
    <Link to="/friends">Friends</Link>
  </div>
);
