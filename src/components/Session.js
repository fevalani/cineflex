import { Link } from "react-router-dom";
import BottomBar from "./BottomBar";

export default function Session() {
  return (
    <>
      <div className="session-title">Selecione o horário</div>
      <ul className="session-list">
        <li>
          <div className="session-day">Quinta-feira - 24/06/2021</div>
          <Link to="/assentos">
            <button className="session-hour">15:00</button>
          </Link>
        </li>
      </ul>
      <BottomBar name="Bacurau" />
    </>
  );
}
