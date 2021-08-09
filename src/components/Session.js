import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BottomBar from "./BottomBar";

export default function Session({ setBackButton }) {
  const { idFilm } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilm}/showtimes`
    );
    promise.then((result) => {
      setData(result.data);
      setBackButton(true);
    });
    promise.catch(() => alert("Erro"));
  }, []);
  // eslint-disable-next-line
  if (data.length === 0) {
    return <div className="session-title">Carregando...</div>;
  }

  return (
    <>
      <div className="session-title">Selecione o horário</div>
      <ul className="session-list">
        {data.days.map((item) => (
          <li key={item.id}>
            <div className="session-day">
              {item.weekday} - {item.date}
            </div>
            {item.showtimes.map((t) => (
              <Link to={`/assentos/${t.id}`} key={t.id}>
                <button className="session-hour">{t.name}</button>
              </Link>
            ))}
          </li>
        ))}
      </ul>
      <BottomBar imageURL={data.posterURL} filmTitle={data.title} />
    </>
  );
}
