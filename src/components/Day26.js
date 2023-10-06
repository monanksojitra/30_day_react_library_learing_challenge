import React, { useEffect, useState } from "react";

function Day26() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Replace 'ws://localhost:8080' with your WebSocket server URL
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;

    const newMessage = {
      text: messageInput,
      timestamp: new Date().toLocaleTimeString(),
    };

    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(newMessage));
    } else {
      console.error("WebSocket is not in the OPEN state. Message not sent.");
    }

    setMessageInput("");
  };

  return (
    <div className="container">
      <div className="input-box d-flex w-50">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Day26;
