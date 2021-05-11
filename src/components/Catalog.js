import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
    );
    promise.then((result) => setData(result.data));
    promise.catch(() => alert("Erro"));
  }, []);

  if (data.length === 0) {
    return <div className="catalog-title">Carregando...</div>;
  }

  return (
    <>
      <div className="catalog-title">Selecione o filme</div>
      <ul class="films-list">
        {data.map((item) => (
          <Link to={`/sessoes/${item.id}`} exact>
            <li className="catalog-films">
              <img src={item.posterURL} />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
