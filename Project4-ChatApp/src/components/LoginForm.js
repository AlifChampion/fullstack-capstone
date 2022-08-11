import { useState } from 'react';
import axios from 'axios';
import GoogleAuth from './GoogleAuth';

// ProjectID from the chatengine.io //
const projectID = '60d8dd3f-ed8c-43a5-8321-bc890e70b4bf';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop the default action (auto)
    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }; // pass the global variable data

    try {
      // wait/fetch the data from external API (backend) //
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);  // store the username at browser
      localStorage.setItem('password', password); // store the password at browser

      window.location.reload(); // reload the page 
      setError('');
    } catch (err) {
      setError('Wrong username or password'); //set error if the login pswd or username wrong
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat With Us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <GoogleAuth />
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h3 style={{ color: '#fa9cf1', textAlign: 'center' }}>{error}</h3>
      </div>
    </div>

  );
};

export default Modal;
