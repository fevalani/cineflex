import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Catalog({ setBackButton }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies`);
    promise.then((result) => {
      setData(result.data);
      setBackButton(false);
    });
    promise.catch(() => alert("Erro"));
  }, []); // eslint-disable-next-line

  if (data.length === 0) {
    return <div className="catalog-title">Carregando...</div>;
  }

  return (
    <>
      <div className="catalog-title">Selecione o filme</div>
      <ul className="films-list">
        {data.map((item) => (
          <Link to={`/sessoes/${item.id}`} key={item.id}>
            <li className="catalog-films">
              <img src={item.posterURL} alt={item.posterURL} />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
