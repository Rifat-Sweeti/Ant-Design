import React from 'react';
import { Button, Menu } from 'antd';
import './Navbar.css';

const Header = () => {
  const menuItems = ['Destinations', 'Hotels', 'Flights', 'Bookings', 'Login'];

  return (
    <header className="header">
      <div className="logo">Jadoo</div>
      <Menu mode="horizontal" className="menu">
        {menuItems.map((item, index) => (
          <Menu.Item key={index}>{item}</Menu.Item>
        ))}
      </Menu>
      <Button className="signup-btn" type="danger">Sign Up</Button>
    </header>
  );
};

export default Header;
