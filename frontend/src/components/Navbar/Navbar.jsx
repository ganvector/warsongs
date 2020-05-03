import React from 'react';
import styles from '../Navbar/Navbar.module.css';
import Navbar from 'react-bootstrap/Navbar';

const circle = {
  color: 'white',
  backgroundColor: 'white',
  borderRadius: '20px',
  width: '40px',
  height: '40px',
};

const navbar = () => {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#">OI</Navbar.Brand>
    </Navbar>
  );
};

export default navbar;
