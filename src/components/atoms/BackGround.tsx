import React from 'react';
import { Link } from 'react-router-dom';

const BackGround: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: '1%', left: '1%' }}>
      <Link to="/">
        <img src="./Logo.svg" alt="Logo" />
      </Link>
    </div>
  );
};

export default BackGround;
