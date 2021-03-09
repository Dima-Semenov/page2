import React, { useState } from 'react';
import './App.scss';
import { Switch } from './Components/Switch/Switch';
import classNames from 'classnames';
import { Content } from './Components/Content/Content';
import { Menu } from './Components/Menu/Menu';
import { Header } from './Components/Header/Header';
import arrow from './Icon/arrow.svg';
import { Footer } from './Components/Footer/Footer';

export const App = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLayoutBlack, setIsLayoutBlack] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(false);


  return (
    <div
      className={classNames(
        "app",
        {"app-black": isLayoutBlack}
      )}
    >
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="app__wrapper">
        <Header isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive} />
        <section className={classNames(
            "app__status",
            {"app__status-active": isHeaderVisible}
          )}
        >
          <span
            className={classNames(
              "app__arrow",
              {"app__arrow-active": isHeaderVisible}
            )}
            onClick={() => setIsHeaderVisible(prev => !prev)}
          >
            <img
              className="app__icon"
              src={arrow}
              alt='arrow'
            />
          </span>

          <div
            className={classNames(
              "app__content",
              {"app__content-hidden": isHeaderVisible}
              )}
          >
            <div className={classNames(
                "app__info",
                {"app__info-active": isHeaderVisible}
              )}
            >
              <div className="app__container">
                <p className='app__text'>New Request</p>
                <p className="app__text-info">5</p>
              </div>
              <div className="app__container">
                <p className='app__text'>Processing</p>
                <p className="app__text-info">
                  4
                  <span className="app__text-silver">
                    /8
                  </span>
                </p>
              </div>
              <div className="app__container">
                <p className='app__text'>Rating</p>
                <p className="app__text-info">4.9</p>
              </div>
              <div className="app__container">
                <p className='app__text'>Plan</p>
                <p className="app__text-info">Premium</p>
              </div>
            </div>

            <Switch isLayoutBlack={isLayoutBlack} setIsLayoutBlack={setIsLayoutBlack} />


            <div
              className="app__online"
              onClick={() => setIsOnline(prev => !prev)}
            >
              Status:
              {
                isOnline ? (
                  <span className="online"> ONLINE</span>
                  ) : (
                  <span className="offline"> OFFLINE</span>
                  )
              }
            </div>

            <div className="app__scan">
              Last scan 25. Oct 2020
            </div>
          </div>
        </section>
        <Content />
        <Footer />
      </div>
    
    </div>
  );
}

export default App;
