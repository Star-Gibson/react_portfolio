import React from "react";
import { Link, } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <div>
                <div className ="container" id="navigation">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                </div>
        </div>
    )
}

export default Navigation;
