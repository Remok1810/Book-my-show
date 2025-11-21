import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <h5>About Us</h5>
            <p>
              BookMyShow Clone - Your ultimate destination for booking movies, shows, and events online. Enjoy seamless experience on all devices.
            </p>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#top">Top Movies</a></li>
              <li><a href="#all">All Movies</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2025 BookMyShow Clone. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
