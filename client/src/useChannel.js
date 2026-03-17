import { useState, useContext, useEffect } from "react";
import { PhoenixSocketContext } from "./PhoenixSocketContext";

const useChannel = (channelName) => {
  const [channel, setChannel] = useState();
  const { socket } = useContext(PhoenixSocketContext);

  useEffect(() => {
    const phoenixChannel = socket.channel(channelName);

    phoenixChannel.join().receive("ok", () => {
      setChannel(phoenixChannel);
    });

    return () => {
      phoenixChannel.leave();
    };
  }, [channelName, socket]);

  return [channel];
};

export default useChannel;
