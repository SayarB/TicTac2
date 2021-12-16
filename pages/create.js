import CreateForm from "../components/CreateGame/CreateForm";
import styles from "../styles/Forms.module.css";
export default function CreateGame() {
  return (
    <div className={styles.form_page}>
      <CreateForm />
    </div>
  );
}
