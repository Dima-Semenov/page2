import React from 'react';
import './Footer.scss'

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer">
      <p>
        &#9400;
        {date.getFullYear()}
        {' '}
        | All Rights Reserved.
      </p>
    </footer>
  );
}
