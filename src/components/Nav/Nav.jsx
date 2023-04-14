import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import NavStyle from './nav.module.css';

import React from 'react';

export const Nav = ({ onSearch }) => {
  return (
    <nav className={`${NavStyle.header}`}>
      <div className={`wrapper flex space-between`}>
        <div className='flex'>
          <button className={`${NavStyle.navbutton}`}>
            <Link className={`fc-light`} to={'/about'}>
              About
            </Link>
          </button>
          <button className='nav-button'>
            <Link className={`fc-light`} to={'/home'}>
              Home
            </Link>
          </button>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};
