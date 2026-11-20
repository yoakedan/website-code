import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  // サーバーにメッセージを送信
  const sendMessage = () => {
    fetch('http://manager.yoakedan.com/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Minecraft Manager</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力"
        style={{ width: '80%', padding: '10px', marginRight: '10px' }}
      />
      <button onClick={sendMessage}>送信</button>
    </div>
  );
};

export default App;
