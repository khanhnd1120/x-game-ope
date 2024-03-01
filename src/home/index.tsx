import { Button } from "semantic-ui-react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <div>
      <div className="text-3xl text-center font-bold">X-Game</div>
    </div>
  );
}
