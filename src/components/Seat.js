import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import BottomBar from "./BottomBar";
import SeatsMap from "./SeatsMap";
import InputCustomerData from "./InputCustomerData";

export default function Seat() {
  const params = useParams();
  const [data, setData] = useState([]);
  let [sendData, setSendData] = useState({
    ids: [],
    name: "",
    cpf: "",
  });

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSession}/seats`
    );
    promise.then((result) => setData(result.data));
    promise.catch(() => alert("Erro"));
  }, []);

  if (data.length === 0) {
    return <div className="session-title">Carregando...</div>;
  }

  function linkAuthorized() {
    if (
      sendData.ids.length > 0 &&
      sendData.name !== "" &&
      sendData.cpf.length > 10
    ) {
      return (
        <Link to="/sucesso">
          <button className="button-default">Reservar assento(s)</button>
        </Link>
      );
    } else {
      return <button className="button-default">Reservar assento(s)</button>;
    }
  }

  return (
    <>
      <div className="seats-title">Selecione o(s) assento(s)</div>
      <div className="seats-container">
        <SeatsMap
          seats={data.seats}
          sendData={sendData}
          setSendData={setSendData}
        />
        <ExampleSeat />
        <InputCustomerData setSendData={setSendData} sendData={sendData} />
        {linkAuthorized()}
      </div>
      <BottomBar
        imageURL={data.movie.posterURL}
        filmTitle={data.movie.title}
        sessionHour={`${data.day.weekday} - ${data.day.date}`}
      />
    </>
  );
}

function ExampleSeat() {
  return (
    <ul className="seats-example">
      <li>
        <div className="seat select"></div>
        <div>Selecionado</div>
      </li>
      <li>
        <div className="seat"></div>
        <div>Disponível</div>
      </li>
      <li>
        <div className="seat unavailable"></div>
        <div>Indisponível</div>
      </li>
    </ul>
  );
}
