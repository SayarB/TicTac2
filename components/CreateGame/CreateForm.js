import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import styles from "../../styles/Forms.module.css";
export default function CreateForm() {
  const [username, setUsername] = useState("");

  const handleCreate = () => {};
  return (
    <div className={styles.join_form}>
      <h1 style={{ color: "black" }}>CREATE A GAME</h1>
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

      <Button onClick={handleCreate} variant="outlined" color="primary">
        Create Room
      </Button>
    </div>
  );
}
