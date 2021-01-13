import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p> 
                Created by: Star Gibson
            </p>
                <div className="githubFooter">
                <a href="https://github.com/Star-Gibson">
                <i className="fab fa-github">
                    </i>
                    Github
                </a>
                </div>
                <div className ="mailFooter">
                <a href="mailto:sgibsoncoding@gmail.com">
                <i className="fas fa-envelope"></i>
                    Email
                </a>
                </div>
                <div className="phoneFooter">
                <a href="https://github.com/Star-Gibson">
                <i className="fas fa-phone-alt"></i>
                    Phone
                </a>
                </div>
            </div>
    )
}

export default Footer; 