import { Link } from "react-router-dom";
import BottomBar from "./BottomBar";

export default function Session(props) {
  console.log(props);
  return (
    <>
      <div className="session-title">Selecione o horário</div>
      <ul className="session-list">
        <li>
          <div className="session-day">Quinta-feira - 24/06/2021</div>
          <Link to="">
            <button className="session-hour">15:00</button>
          </Link>
          <Link to="">
            <button className="session-hour">15:00</button>
          </Link>
          <Link to="">
            <button className="session-hour">15:00</button>
          </Link>
        </li>
        <li>
          <div className="session-day">Quinta-feira - 24/06/2021</div>
          <Link to="">
            <button className="session-hour">15:00</button>
          </Link>
          <Link to="">
            <button className="session-hour">15:00</button>
          </Link>
          <Link to="">
            <button className="session-hour">15:00</button>
          </Link>
        </li>
      </ul>
      <BottomBar image={props.image} />
    </>
  );
}
