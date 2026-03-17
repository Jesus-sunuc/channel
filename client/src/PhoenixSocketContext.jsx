import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { Socket } from "phoenix";

const PhoenixSocketContext = createContext({ socket: null });

const PhoenixSocketProvider = ({ children }) => {
  const [socket] = useState(() => {
    const socket = new Socket("ws://localhost:4000/socket");
    socket.connect();
    return socket;
  });

  return (
    <PhoenixSocketContext.Provider value={{ socket }}>
      {children}
    </PhoenixSocketContext.Provider>
  );
};

PhoenixSocketProvider.propTypes = {
  children: PropTypes.node,
};

export { PhoenixSocketContext, PhoenixSocketProvider };
