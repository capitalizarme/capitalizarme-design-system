// InputBar — the chat composer. Pill-shaped container matches this system's .btn radius language.
function InputBar({ onSend }) {
  const [value, setValue] = React.useState('');

  function send() {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
  }

  return (
    <div className="input-bar">
      <input
        type="text"
        placeholder="Escribe tu mensaje…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
      />
      <button type="button" aria-label="Enviar" onClick={send}>→</button>
    </div>
  );
}
window.InputBar = InputBar;
