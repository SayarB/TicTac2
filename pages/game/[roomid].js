import { useRouter } from "next/router";
import Game from "../../components/Game/Game";
export default function GamePage() {
  const router = useRouter();
  const { roomid, username, method } = router.query;
  return (
    <div>
      <Game username={username} code={roomid} method={method} />
    </div>
  );
}
