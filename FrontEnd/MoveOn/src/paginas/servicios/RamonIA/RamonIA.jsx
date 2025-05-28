import React, { useState,useEffect } from 'react';
import BotonDeRetroceso from '../../../menus/BotonDeRetroceso';

// Asegúrate de que apunte a tu Webhook manual
const WEBHOOK_URL = 'https://grmmyyrm.app.n8n.cloud/webhook/5d6e4b1f-22f0-4635-8ef0-9a40eec65e4e/chat';

export default function RamonIA() {
  const [sessionId, setSessionID] = useState(() => crypto.randomUUID());
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hola, soy Ramón tu asistente personal, ¿En que puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  useEffect(() => {
    // Genera un nuevo sessionId al cargar el componente    
    setSessionID(crypto.randomUUID());
  }, []);

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
    <div className='flex items-center justify-center w-full sm:h-[700px] hsm:h-[530px] max-h-[1000px] '>
    <div className="flex flex-col sm:w-2/3 hsm:w-[95%] pb-2 h-full rounded-2xl overflow-hidden font-sans">
    <div className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              `max-w-5/5 p-2 rounded-xl animate-fadeInUp whitespace-pre-wrap ` +
              (m.from === 'user'
                ? 'self-end bg-purple text-white text'
                : 'self-start text-black dark:text-white')
            }
          >
            <span className='text-[24px]'>{m.text}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="text-[24px] sm:rounded-tl-2xl hsm:rounded-2xl sm:rounded-bl-2xl flex-1 p-3 text-base bg-white dark:text-white dark:bg-black2 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu mensaje..."
          disabled={sending}
        />
        <button
          className="hsm:hidden sm:inline-block text-[24px] sm:rounded-tr-2xl sm:rounded-br-2xl px-4 bg-purple hover:scale-102 transition-transform disabled:opacity-50 disabled:cursor-not-allowed dark:bg-purple text-white"
          onClick={sendMessage}
          disabled={sending}
        >
          {sending ? 'Pensando…' : 'Enviar'}
        </button>
      </div>
      <div className="flex justify-center mt-8 text-[24px]">
          <BotonDeRetroceso textoBoton="Volver a los servicios"/>
      </div>
    </div>
    </div>
  );
}