import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('radio-1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    // <div className="container">
      <div className="navbar">
        <input
          type="radio"
          id="radio-1"
          name="tabs"
          checked={activeTab === 'radio-1'}
          onChange={() => handleTabChange('radio-1')}
        />
        <label className="tab" htmlFor="radio-1">
          Home
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tabs"
          checked={activeTab === 'radio-2'}
          onChange={() => handleTabChange('radio-2')}
        />
        <label className="tab" htmlFor="radio-2">
          Profile
        </label>
        <input
          type="radio"
          id="radio-3"
          name="tabs"
          checked={activeTab === 'radio-3'}
          onChange={() => handleTabChange('radio-3')}
        />
        <label className="tab" htmlFor="radio-3">
          Contact
        </label>
        <div className={`glider ${activeTab}`} />
      </div>
    // </div>
  );
};

export default Header;
