import { useState } from 'react';

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you today?", sender: "support", time: "10:30 AM" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "Thanks for your message! Our team will get back to you shortly.",
          sender: "support",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1000);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      {isOpen && (
        <div style={{
          width: '350px',
          height: '500px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          marginBottom: '10px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{
            backgroundColor: '#0d6efd',
            color: 'white',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>TutorHub Support</strong>
              <div style={{ fontSize: '0.75rem' }}>
                <span style={{ color: '#90EE90' }}>●</span> Online
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: 0,
                lineHeight: 1
              }}
            >
              ×
            </button>
          </div>
          
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '15px',
            backgroundColor: '#f8f9fa'
          }}>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                style={{
                  marginBottom: '15px',
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{ maxWidth: '75%' }}>
                  <div style={{
                    padding: '10px 15px',
                    borderRadius: '15px',
                    backgroundColor: msg.sender === 'user' ? '#0d6efd' : 'white',
                    color: msg.sender === 'user' ? 'white' : 'black',
                    wordWrap: 'break-word',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}>
                    {msg.text}
                  </div>
                  <small style={{ fontSize: '0.7rem', color: '#6c757d', marginTop: '2px', display: 'block' }}>
                    {msg.time}
                  </small>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            padding: '15px',
            backgroundColor: 'white',
            borderTop: '1px solid #dee2e6',
            display: 'flex',
            gap: '10px'
          }}>
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '10px',
                border: '1px solid #ced4da',
                borderRadius: '20px',
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <button 
              onClick={handleSend}
              style={{
                backgroundColor: '#0d6efd',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '10px 20px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#0d6efd',
          color: 'white',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s',
          zIndex: 9999
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        💬
      </button>
    </div>
  );
};

export default ChatBox;