import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// ProjectID from the chatengine.io //
const projectID = '60d8dd3f-ed8c-43a5-8321-bc890e70b4bf';

// in order to use this apps user need to have account/login/signup //
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

// This code is generated using chat engine external API //
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      offset={8}
    />
  );
};

export default App;
