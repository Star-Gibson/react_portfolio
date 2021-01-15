import React from 'react'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "../Contact/Contact.css"
const Contact = () => {

  return (
    <div>
    <Header />
    <div className="container mb-3" >
        <div className="card" id="contactInfo">
            <div className="card-title">
                <h1>Contact Information</h1>
                <img className="rounded-circle" width="256px" src="./assets/img/profilePic.jpeg" alt="" />
            </div>
            <div className="card-body">
                <p><strong>Email:</strong> sgibsoncoding@gmail.com</p>
                <p><strong>Phone: </strong> 919.815.2461</p>
                <p><strong>Location:</strong> Raleigh, NC (Open to Relocation)</p>
              </div>
        </div>
    </div>
    <Footer />
</div>
)
}

export default Contact;
