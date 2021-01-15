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
                <a href="./assets/img/Samuel_Star_Gibson_Updated_Resume copy.pdf" download>Resume</a>
                </div>
        </div>
    )
}

export default Navigation;
