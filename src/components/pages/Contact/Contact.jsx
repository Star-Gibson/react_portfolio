import React from 'react'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
const Contact = () => {

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card">
          <form>
            <div className="form-group">
              <h2>Contact Information</h2>
              <p><strong>Email:</strong> sgibsoncoding@gmail.com</p>
            </div>
            <div className="form-group">
              <p><strong>Phone:</strong> 919.815.2461</p>
            </div>
            <div className="form-check">
              <p><strong>Location:</strong> Raleigh, NC (Open to Relocation)</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
