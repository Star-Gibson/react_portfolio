import React from 'react'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Contact = () => {

  return (
    <div>
    <Header />
    <div className="container mb-3">
        <div className="card">
            <div className="card-title">
                <h1>Contact Information</h1>
                <img className="rounded-circle" width="128px" src="./assets/img/profilePic.jpeg" alt="" />
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
