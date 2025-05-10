import React, { useState } from 'react';

// Asegúrate de que apunte a tu Webhook manual
const WEBHOOK_URL = 'http://localhost:5678/webhook/9cae8464-9088-483f-b1d8-cf2a17435931/chat';

export default function N8NChat() {
  const [sessionId] = useState(() => crypto.randomUUID());
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const chatInput = input.trim();

    setMessages(msgs => [...msgs, { from: 'user', text: chatInput }]);
    setInput('');
    setSending(true);

    const payload = {
      sessionId,
      action: 'sendMessage',
      chatInput
    };
    

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      const replyText = data.output || '<sin output>';
      setMessages(msgs => [...msgs, { from: 'bot', text: replyText }]);
    } catch {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Error al conectar con el agente.' }]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !sending) sendMessage();
  };

  return (
    <div className="flex flex-col w-full h-full border border-white3 dark:border-black2 rounded-2xl overflow-hidden font-sans bg-white dark:bg-black1">
      <div className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              `max-w-4/5 p-2 rounded-xl animate-fadeInUp whitespace-pre-wrap ` +
              (m.from === 'user'
                ? 'self-end bg-turq text-white'
                : 'self-start bg-gold text-black1')
            }
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-white3 dark:border-black2">
        <input
          className="flex-1 p-3 text-base bg-white2 dark:text-white dark:bg-black2 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu mensaje..."
          disabled={sending}
        />
        <button
          className="px-4 bg-purple hover:scale-102 transition-transform disabled:opacity-50 disabled:cursor-not-allowed dark:bg-purple text-white"
          onClick={sendMessage}
          disabled={sending}
        >
          {sending ? '…' : 'Enviar'}
        </button>
      </div>
    </div>
  );
}
