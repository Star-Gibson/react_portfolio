import React from 'react'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "../About/About.css"

const About = () => {
    
    return (
        <div>
            <Header />
            <div className="container">
                <div className="card" id="aboutMe">
                    <div className="card-title">
                        <h1>Welcome!</h1>
                        <p>My name is Star Gibson and I am a fullStack Web Developer, focusing primarily on front end technologies. I decided to pivot in to web development due to my need for a challenge and my desire to build applications that can impact the real world.
                    Throughout my successful career in sales and business development I have shown that I am a reliable and responsible individual who is able to provide leadership when collaborating with others, but also posseses the mental fortitude to work well independently and I can't wait for an opportunity change the world!</p>
                        <img className="rounded-circle" width="300px" src="./assets/img/profilePic.jpeg" alt="" />
                    </div>
                        <h3><em>Skills</em></h3>
                    <div className="card-body">
                        <p><strong>Front End:</strong> HTML5, CSS3, Bootstrap, Bulma, handlebarsJS, momentJS, JavaScript, React, jQuery, Ajax, RESTful API creation & consumption.</p>
                        <p><strong>Back-End:</strong> nodeJS, MySQL, MongoDB, MySQL Server, expressJS, passportJS, Mongoose ORM, Sequelize ORM.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
