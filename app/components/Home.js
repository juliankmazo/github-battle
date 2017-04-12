import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <div className='home-container'>
      <h1>Github battle: Battle your friends and shit</h1>
      <Link className='button' to='/battle'>
        Battle
      </Link>
    </div>
  );
}
