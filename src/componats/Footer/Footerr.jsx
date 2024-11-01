import React from "react";
import "../Footer/Footerr.css";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
    <div className="container">
      <div className="row">
        
      
        <div className="col-md-4 mb-4">
          <h5>Useful Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About Us</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact Us</a></li>
          </ul>
        </div>

        
        <div className="col-md-4 mb-4">
          <ul className="list-unstyled d-flex">
            <li><a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>

        
        <div className="col-md-4 mb-4">
          <h5>Contact Information</h5>
          <p>123 Example St, City, Country</p>
          <p>Phone: +123 456 789</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
      
      <div className="text-center py-3">
        <p className="mb-0">&copy; 2024 All Rights Reserved</p>
      </div>
    </div>
  </footer>  );
}

export default Footer;
