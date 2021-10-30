import JoinForm from "../components/JoinGame/JoinForm";
import styles from "../styles/Forms.module.css";
export default function JoinGame() {
  return (
    <div className={styles.join_page}>
      <JoinForm />
    </div>
  );
}
