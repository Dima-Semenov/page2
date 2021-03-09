import React from 'react';
import './Content.scss';
import question from '../../Icon/question.svg';

export const Content = () => {

  return (
    <div className="content">
      <div className="content__block">
        <div className="content__title">
          <h3>Latest notifications:</h3>
          <img
            src={question}
            alt='question'
            className="content__icon"
          />
        </div>
        
        <div className="content__notifications">
          <div className="content__status" />
          <div className="content__info">
            <h4>Report</h4>
            <p>Kaup24.ee asks latest fixed problems report.</p>
          </div>
          <div className="content__app">
            <button className="content__button">
              Action
            </button>
            <p className="content__date">
              03.January 2021
            </p>
          </div>
        </div>

        <div className="content__notifications">
          <div className="content__status" />
          <div className="content__info">
            <h4>Offer request</h4>
            <p>Zone Eesti AS requesting offer: SQL Injection problem.</p>
          </div>
          <div className="content__app">
            <button className="content__button">
              Action
            </button>
            <p className="content__date">
              02.January 2021
            </p>
          </div>
        </div>

        <div className="content__notifications">
          <div className="content__info">
            <h4>Process update | Elisa Eesti AS</h4>
            <p>Last edit made by info@lucreds.com</p>
          </div>
          <div className="content__app">
            <button className="content__button">
              Action
            </button>
            <p className="content__date">
              01.January 2021
            </p>
          </div>
        </div>

        <div className="content__notifications">
          <div className="content__info">
            <h4>Subscription | Will end soon</h4>
            <p>Dear Lucreds, this is friendly to remind you of your VIP Plan subscription, this plan will end in February.</p>
          </div>
          <div className="content__app">
            <p className="content__date">
              30.December 2020
            </p>
          </div>
        </div>

      </div>

      <div className="content__block2">

        <div className="content__block-small content__block-first">
          <p className="content__title">Status</p>
          <p className="content__text">Your score</p>
          <p className="content__counter">450</p>
          <p className="content__text">Profile views this week:</p>
          <p className="content__counter">53</p>
        </div>

        <div className="content__block-small">
          <p className="content__title">Earning</p>
          <p className="content__text">Total</p>
          <p className="content__money">4 291.65 €</p>
          <p className="content__text">Your earnings on January</p>
          <p className="content__money">8 497.20 €</p>
        </div>

      </div>
    </div>
  );
}