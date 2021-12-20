import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import Board from "./Board";
import styles from "../../styles/Game.module.css";
export default function Game({ username, code, method }) {
  const [socket, setSocket] = useState(null);
  const [roomid, setRoomId] = useState("");
  const [opponent, setOpponent] = useState("");
  const [isDraw, setIsDraw] = useState(false);
  const [winnerTurn, setWinnerTurn] = useState(-1);
  const [winner, setWinner] = useState("");

  const [turn, setTurn] = useState(-1);
  const [game_state, setGame_state] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const _socket = io("http://localhost:8000/game");
    setSocket(_socket);
  }, [setSocket]);

  useEffect(() => {
    if (socket == null) return;
    if (username == null || roomid == null) return;
    if (method === "create") socket.emit("create-room", username);
    else if (method === "join") socket.emit("join-room", username, code);

    socket.on("created-room", (room) => {
      setRoomId(room);
    });
    socket.on("joined-room", (room) => {
      setRoomId(room);
    });
    socket.on("buttonClicked", () => {
      alert("button clicked by other user");
    });
    socket.on("new-player-joined", (user) => {
      if (user !== username) setOpponent(user);
    });

    socket.on("set-turn", (turnToBeAssigned) => {
      setTurn(turnToBeAssigned);
    });
    socket.on("set-draw", (draw) => {
      setIsDraw(true);
      setGameOver(true);
    });
    socket?.on("update_game_state", (g_state) => {
      setGame_state(g_state);
      console.log(game_state);
    });
    socket?.on("set_winner", ({ isWin, comb, winner_turn }) => {
      if (isWin) {
        setWinnerTurn(winner_turn);
        if (turn === winner_turn) setWinner(username);
        else setWinner(opponent);
        setGameOver(true);
        showWinComb(comb);
      }
    });
    socket.on("set_opponent", (opponent) => setOpponent(opponent));
  }, [socket]);
  const emitTurn = (pos) => {
    socket?.emit("put_turn", roomid, pos, turn);
  };
  const showWinComb = (winComb) => {
    console.log(winComb);
    winComb.forEach((ele) => {
      const cell = document.getElementById("cell-" + ele);
      cell.classList.add(styles.winner_combination);
    });
  };

  useEffect(() => {
    if (turn !== -1) {
      console.log("Turn is ", turn);
    }
  }, [turn]);

  if (game_state.length === 9) {
    return (
      <div className={styles.game_container}>
        Turn = {turn} {username} {opponent}
        <Board game_state={game_state} putTurn={emitTurn} />
        {winnerTurn !== -1 ? (
          <div className={styles.overlay}>
            <h1 className={styles.announcement + " " + styles.winner_text}>
              Winner is Player {winner}
            </h1>
          </div>
        ) : (
          ""
        )}
        {isDraw ? (
          <h1 className={styles.announcement + " " + styles.game_draw_text}>
            It is a Draw
          </h1>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return (
      <h1 style={{ color: "white" }}>
        Waiting for player
        <br />
        Send this code to invite friends: {roomid}
      </h1>
    );
  }
}
