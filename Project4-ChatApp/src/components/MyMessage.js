import { useState, useEffect } from 'react'
import './MyMessage.css'

const MyMessage = ({ message }) => {
  const [messageState, setMessageState] = useState(message.text)

  useEffect(() => {
    console.log('text', message.text)
  }, [messageState])

  // delete the message based on the generated chatId
  const onDeleteMessage = (id) => {
    setMessageState('message has been deleted')
    if (document.getElementById) {
      document.getElementById(id).className = 'deleted'
      document.getElementById(id).style.backgroundColor = 'grey';
    }
    // if (document.getElementById(id).className = 'deleted') {

    // }
  }

  // if message is the image //
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right', height: '150px' }}
      />
    );
  }

  // if message is the text and delete the message //
  return (
    <div id={message.id} className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      <div class="dropdown">
        <span>{messageState}</span>
        <div class="dropdown-content">
        <button style={{ border: 'none', background:'none' }} onClick={() => onDeleteMessage(message.id)}><img src='https://flyclipart.com/thumb2/bin-delete-garbage-recycle-remove-trash-icon-695067.png' alt='delete icon' style={{height:'20px', width:'25px', borderRadius: '20px'}} /></button>
        </div>
      </div>
    </div>
  );
};

export default MyMessage;
