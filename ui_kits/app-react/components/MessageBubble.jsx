// MessageBubble — one chat row. User bubbles reuse the CTA banner's blue-fill/white-text pairing;
// advisor bubbles reuse the .card border — see ui_kits/app/README.md "Messaging surface".
function MessageBubble({ message }) {
  const from = message && message.from === 'user' ? 'user' : 'advisor';
  return (
    <div className={'message-row from-' + from}>
      <div className="message-bubble">{message.text}</div>
    </div>
  );
}
window.MessageBubble = MessageBubble;
