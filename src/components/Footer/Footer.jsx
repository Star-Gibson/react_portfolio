import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p className="mb-0"> 
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
                <a href="tel: 919-815-2461">
                <i className="fas fa-phone-alt"></i>
                    Phone
                </a>
                </div>
            </div>
    )
}

export default Footer; 