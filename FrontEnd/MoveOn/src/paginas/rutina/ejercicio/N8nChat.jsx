import React, { useState } from 'react';

// Asegúrate de que apunte a tu Webhook manual
const WEBHOOK_URL = 'http://localhost:5678/webhook/7403bf55-fd1f-4941-9d2a-581ed26f5936/chat';

export default function N8NChat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const text = input.trim();

    // Añade el mensaje del usuario
    setMessages(msgs => [...msgs, { from: 'user', text }]);
    setInput('');
    setSending(true);

    try {
      console.log('👉 Enviando a n8n:', text);
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      console.log('👈 Status:', res.status);

      const data = await res.json();
      console.log('🧐 JSON completo recibido:', data);

      // Ahora extraemos directamente data.output
      const replyText = data.output || '<sin output>';
      console.log('✅ Texto extraído (output):', replyText);

      setMessages(msgs => [...msgs, { from: 'bot', text: replyText }]);
    } catch (err) {
      console.error('❌ Error en sendMessage():', err);
      setMessages(msgs => [
        ...msgs,
        { from: 'bot', text: 'Error al conectar con el agente.' },
      ]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !sending) {
      sendMessage();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: m.from === 'user' ? '#07BEB8' : '#FFBA49',
            }}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div style={styles.inputRow}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu mensaje..."
          disabled={sending}
        />
        <button
          style={styles.button}
          onClick={sendMessage}
          disabled={sending}
        >
          {sending ? '…' : 'Enviar'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    height: '500px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    fontFamily: 'sans-serif',
  },
  messages: {
    flex: 1,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    overflowY: 'auto',
    backgroundColor: '#F5F5F5',
  },
  message: {
    padding: '0.5rem 0.75rem',
    borderRadius: '12px',
    maxWidth: '80%',
  },
  inputRow: {
    display: 'flex',
    borderTop: '1px solid #ddd',
  },
  input: {
    flex: 1,
    border: 'none',
    padding: '0.75rem',
    fontSize: '1rem',
  },
  button: {
    border: 'none',
    backgroundColor: '#6320EE',
    color: '#fff',
    padding: '0 1rem',
    cursor: 'pointer',
  },
};
