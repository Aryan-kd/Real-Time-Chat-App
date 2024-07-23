import { useEffect, useState } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

const socket = io.connect("http://localhost:8000");
const userName = nanoid(4);
const App = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, userName });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });

  return (
    <div className="w- min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-center p-5">Chatty APP</h1>
      {chat.map((payload, index) => {
        return (
          <div key={index}>
            <p>
              {payload.message}: <span>id: {payload.userName}</span>
            </p>
          </div>
        );
      })}
      <form
        onSubmit={sendChat}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="message"
            type="text"
            name="chat"
            placeholder="send text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
