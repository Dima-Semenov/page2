import React from 'react';
import './Switch.scss';

export const Switch = ({isLayoutBlack, setIsLayoutBlack}) => (
  <div className="switcher">
    <span className="text">
      switch(basic)
      {' '}
    </span>
    <label className="switch">
      <input
        type="checkbox"
        checked={isLayoutBlack}
        onChange={() => setIsLayoutBlack(prev => !prev)}
      />
      <span className="slider round" />
    </label>
  </div>
);
