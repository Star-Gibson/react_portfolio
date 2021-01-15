import React from "react";
import "./Header.css"
import Navigation from "../Navigation/Navigation";

const Header = () => {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-2">Star Gibson</h1>
                <p className="lead display-4">Web Developer</p>
                <Navigation />
            </div>
        </div>
    )
}

export default Header
