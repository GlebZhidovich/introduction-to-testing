import { useState } from 'react';

export const AlertButton = ({}) => {
  const [message, setMessage] = useState('Alert!');

  return (
    <div>
      <label>
        Message
        <input
          data-testid="message-input"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button data-testid="message-btn" onClick={() => alert(message)}>
        Trigger Alert
      </button>
    </div>
  );
};
