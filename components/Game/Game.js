import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
export default function Game({ username, roomid }) {
  const [socket, setSocket] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const _socket = io("http://localhost:8000/game");
    setSocket(_socket);
  }, [setSocket]);

  useEffect(() => {
    if (socket == null) return;
    if (username == null || roomid == null) return;
    socket.emit("create-room", username, roomid);
  }, [socket]);
  return (
    <div style={{ color: "white" }}>
      {username} : {roomid}
    </div>
  );
}
