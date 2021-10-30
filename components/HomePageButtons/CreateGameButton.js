import { AddToQueue } from "@material-ui/icons";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
export default function CreateGameButton() {
  return (
    <Link href="/create">
      <div className={styles.home_page_button}>
        <AddToQueue fontSize="large" />

        <p>Create A Game</p>
      </div>
    </Link>
  );
}
