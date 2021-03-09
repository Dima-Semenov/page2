import React from 'react';
import classNames from 'classnames';
import menu from '../../Icon/list.svg';
import email from '../../Icon/email.svg';
import shield from '../../Icon/shield.svg';
import home from '../../Icon/home.svg';
import star from '../../Icon/star.svg';
import clipboard from '../../Icon/clipboard.svg';
import settings from '../../Icon/settings.svg';
import rec from '../../Icon/rec.svg';
import './Menu.scss';

export const Menu = ({ isMenuOpen, setIsMenuOpen}) => (
  <div
    className={classNames(
      "menu",
      {"menu-open": isMenuOpen}
    )}
    >
    <div className="menu__position">
      <img
        src={menu}
        alt="menu"
        className="menu__icon menu__icon-menu"
        onClick={() => setIsMenuOpen(prev => !prev)}
      />
      <img
        src={home}
        alt="home"
        className="menu__icon"
      />
      <img
        src={email}
        alt="email"
        className="menu__icon"
      />
      <img
        src={shield}
        alt="shield"
        className="menu__icon"
      />
      <img
        src={star}
        alt="star"
        className="menu__icon"
      />
      <img
        src={rec}
        alt="rec"
        className="menu__icon"
      />
      <img
        src={clipboard}
        alt="clipboard"
        className="menu__icon"
      />
    </div>
    <img
      src={settings}
      alt="settings"
      className="menu__icon"
    />
  </div>

);
