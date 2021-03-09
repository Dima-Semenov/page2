import React from 'react';
import classNames from 'classnames';
import search from '../../Icon/search.svg';
import user from '../../Icon/user.svg';
import notification from '../../Icon/notification.svg';
import './Header.scss';

export const Header = ({ isSearchActive, setIsSearchActive }) => (
  <header className="header">
    <h1 className="header__title">LOGO HERE</h1>
    <div className="header__search">
      {
        isSearchActive && (
          <input
            type="text"
            placeholder="Search.."
            className="header__input"
          />
        )
      }
      <button
        type="button"
        className={classNames(
          'header__button',
          {'header__button-active': isSearchActive }
        )}
        onClick={() => setIsSearchActive(prev => !prev)}
      >
        <img
          alt="serch"
          src={search}
          className="header__icon"
        />
      </button>
      <button className="header__button">
        <img
          alt="notification"
          src={notification}
          className="header__icon"
        />
      </button>
      <button className="header__button">
        <img
          alt="user"
          src={user}
          className="header__icon"
        />
      </button>
    </div>
  </header>
);
