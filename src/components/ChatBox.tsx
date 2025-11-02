import { useEffect, useRef, useState } from 'react';

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    // Initial greeting has no visible time
    { id: 1, text: "Hi! How can I help you today?", sender: "support", time: "" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
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

      // Randomized bot response (text + delay)
      const BOT_REPLIES = [
        "Thanks for reaching out! A tutor will respond shortly.",
        "Got it! We’re connecting you with the right person now.",
        "Thanks for your message! Our team will get back to you shortly.",
        "Appreciate the details — hang tight while we take a look.",
        "Thanks! We’ll follow up with options as soon as possible."
      ];
      const replyText = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
      // Delay between 700ms and 2200ms
      const delay = Math.floor(700 + Math.random() * 1500);

      // Show typing indicator during delay
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: replyText,
          sender: "support",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, delay);
    }
  };

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (el) {
      // Scroll on next frame to ensure DOM is painted
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [messages, isTyping, isOpen]);

  return (
    <>
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          zIndex: 1000,
          width: '350px',
          height: '500px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{
            backgroundColor: '#0e59c9ff',
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

          <div ref={scrollRef} style={{
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
                    backgroundColor: msg.sender === 'user' ? '#0e59c9ff' : 'white',
                    color: msg.sender === 'user' ? 'white' : 'black',
                    wordWrap: 'break-word',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}>
                    {msg.text}
                  </div>
                  {msg.time && (
                    <small style={{ fontSize: '0.7rem', color: '#6c757d', marginTop: '2px', display: 'block' }}>
                      {msg.time}
                    </small>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div
                style={{
                  marginBottom: '15px',
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
                aria-live="polite"
              >
                <div style={{ maxWidth: '75%' }}>
                  <div style={{
                    padding: '10px 15px',
                    borderRadius: '15px',
                    backgroundColor: 'white',
                    color: 'black',
                    wordWrap: 'break-word',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div className="spinner-border spinner-border-sm text-primary" role="status" aria-hidden="true"></div>
                    <span>Typing…</span>
                  </div>
                </div>
              </div>
            )}
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
                backgroundColor: '#0e59c9ff',
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
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1001,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#0e59c9ff',
          color: 'white',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        💬
      </button>
    </>
  );
};

export default ChatBox;