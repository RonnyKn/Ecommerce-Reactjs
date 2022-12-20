import "./Footer.css"
import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-titles">
          <ul>
            <li>
              <h3>About Nike</h3>
            </li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Purpose</li>
            <li>Sustainability</li>
          </ul>
          <ul>
            <li>
              <h3>Get Help</h3>
            </li>
            <li>Order Status</li>
            <li>Shipping & Delivery</li>
            <li>Payment Options</li>
            <li>Gift Card Balance</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>Gift Cards</li>
            <li>Promotions</li>
            <li>Find A Store</li>
            <li>Signup</li>
            <li>Nike Journal</li>
            <li>Send Us Feeback</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
