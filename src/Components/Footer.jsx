import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="subscription-section">
        <h2>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
        <Form layout="inline" className="subscription-form">
          <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}>
            <Input placeholder="Your email" className="email-input" />
          </Form.Item>
          <Form.Item>
            <Button type="danger" className="subscribe-button">
              Subscribe
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="footer-content">
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={6}>
            <h3>Jadoo.</h3>
            <p>Book your trip in minutes, get full control for much longer.</p>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <h4>Contact</h4>
            <ul>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <h4>More</h4>
            <ul>
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>All rights reserved@jadoo.co</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;