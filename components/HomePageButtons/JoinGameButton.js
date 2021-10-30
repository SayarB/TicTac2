import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
export default function JoinGameButton() {
  return (
    <Link href="/join">
      <div className={styles.home_page_button}>
        <PeopleOutlineIcon fontSize="large" />

        <p>Join A Game</p>
      </div>
    </Link>
  );
}
