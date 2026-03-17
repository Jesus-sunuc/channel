import React, { useEffect, useState } from "react";
import useChannel from "./useChannel";

const NEW_MSG = "new_msg";

const App = () => {
  const [channel] = useChannel("room:lobby");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // listen for messages from the channel
  useEffect(() => {
    if (!channel) return;

    channel.on(NEW_MSG, (payload) => {
      setMessages((msgs) => [...msgs, payload]);
    });

    return () => {
      channel.off(NEW_MSG);
    };
  }, [channel]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (!channel) return;
      channel.push(NEW_MSG, { body: input });
      setInput("");
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <div id="messages">
        {messages.map((msg, i) => (
          <p key={i}>{msg.body}</p>
        ))}
      </div>
      <input
        id="chat-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message and press Enter"
      />
    </div>
  );
};

export default App;
