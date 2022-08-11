import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import SwitchMode from './Switch/SwitchMode';
import Logout from './Logout';

const ChatFeed = (props) => {
  // pass all the props
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  // render the message appear //
  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left', // left = receiver(Their), right = sender(My)
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`, // display the avatar of a reader and sender
      }}
    />
  ));

  // Render all the message inside the chatfeed (mid-part) //
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key]; // index of each message
      const lastMessageKey = index === 0 ? null : keys[index - 1]; // index of the last message
      const isMyMessage = userName === message.sender.username; // message of the user (this one might be the bug)

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {/* Differentiate between sender and receiver 
            MyMessage is the the one we sent
            ThierMessage is the one that we recieve
            */}
            {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  // loading screen //
  if (!chat) return (
  <h3 style={{textAlign:'right', marginTop: '5px'}}>Create new chat and start chatting...
    <img src='https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif' alt='loading screen' style={{ backgroundSize: 'cover' }} />
  </h3>
)

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}<SwitchMode /><Logout /></div>
        {/* list of people inside the chat room */}
        <div className="chat-subtitle">
          {chat.people.map((person) => `| ${person.person.username} |`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      {/* sending the message */}
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
