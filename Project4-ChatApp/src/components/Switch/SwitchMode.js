import React, { useState, useEffect } from 'react';
import './Dark.css';
import './Light.css';
import './index.css';

const SwitchMode = () => {
  const [userMode, setUserMode] = useState(localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    document.getElementsByTagName('HTML')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    document.getElementsByClassName('ce-chat-list')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    document.getElementsByClassName('chat-feed')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    document.getElementsByClassName('ce-settings')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    document.getElementsByClassName('message-form-container')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    document.getElementsByClassName('chat-title')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    document.getElementsByClassName('chat-subtitle')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    document.getElementsByClassName('ce-chats-container')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
  }, []);

  const toggleThemeChange = () => {
    if (userMode === false) {
      localStorage.setItem('theme', 'dark');
      document.getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('ce-chat-list')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('chat-feed')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('ce-settings')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('message-form-container')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('chat-title')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('chat-subtitle')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('ce-chats-container')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      setUserMode(true);
    } else {
      localStorage.setItem('theme', 'light');
      document.getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('ce-chat-list')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('chat-feed')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('ce-settings')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('message-form-container')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('chat-title')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('chat-subtitle')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      document.getElementsByClassName('ce-chats-container')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      setUserMode(false);
    }
  };

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          defaultChecked={userMode}
          onChange={() => toggleThemeChange()}
        />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default SwitchMode;
