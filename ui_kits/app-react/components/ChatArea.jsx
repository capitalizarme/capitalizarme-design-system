// ChatArea — the main workspace pane for the selected advisor thread. Composes InputBar and
// renders each row via MessageBubble.
function ChatArea({ advisor, messages, onSend }) {
  const messagesRef = React.useRef(null);

  React.useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-area">
      <div className="chat-header">
        <p>
          <span className="advisor-name">{advisor.name}</span><br />
          <span className="advisor-role">{advisor.role}</span>
        </p>
        <a className="btn btn-outline" href="#">Agenda tu reunión</a>
      </div>
      <div className="chat-messages" ref={messagesRef}>
        {messages.map((message, i) => <MessageBubble key={i} message={message} />)}
      </div>
      <InputBar onSend={onSend} />
    </div>
  );
}
window.ChatArea = ChatArea;
