import { Link } from "react-router-dom";
import bacurau from "../images/bacurau.jpeg";

export default function Catalog() {
  return (
    <>
      <div className="catalog-title">Selecione o filme</div>
      <ul class="films-list">
        <Link to="/sessoes">
          <li className="catalog-films">
            <img src={bacurau} />
          </li>
        </Link>
      </ul>
    </>
  );
}
