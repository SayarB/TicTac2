import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import styles from "../../styles/Forms.module.css";
export default function JoinForm() {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");

  const handleJoin = () => {
    console.log("Username : ", username, "\nCode : ", code);
  };
  return (
    <div className={styles.join_form}>
      <h1 style={{ color: "black" }}>JOIN GAME</h1>
      <TextField
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        color="primary"
        type="text"
        label="User Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={code}
        onChange={(e) => {
          setCode(e.target.value.toUpperCase());
        }}
        margin="normal"
        color="primary"
        type="text"
        label="Code"
        variant="outlined"
      />
      <Button onClick={handleJoin} variant="outlined" color="primary">
        Join
      </Button>
    </div>
  );
}
