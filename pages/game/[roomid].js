import { useRouter } from "next/router";
import Game from "../../components/Game/Game";
export default function GamePage() {
  const router = useRouter();
  const { roomid, username } = router.query;
  return (
    <div >
      <Game username={username} roomid={roomid} />
    </div>
  );
}
