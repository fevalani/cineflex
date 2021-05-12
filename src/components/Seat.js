import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import BottomBar from "./BottomBar";

export default function Seat() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [sendData, setSendData] = useState({ ids: [], name: "", cpf: "" });

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSession}/seats`
    );
    promise.then((result) => setData(result.data));
    promise.catch(() => alert("Erro"));
  }, []);

  return (
    <>
      <div className="seats-title">Selecione o(s) assento(s)</div>
      <div className="seats-container">
        <SeatsMap seats={data.seats} setSendData={setSendData} />
        <ExampleSeat />
        <InputCustomerData setSendData={setSendData} />
        <Link to="/sucesso">
          <button className="button-default">Reservar assento(s)</button>
        </Link>
      </div>
      <BottomBar
        imageURL={data.movie.posterURL}
        filmName={data.movie.title}
        sessionHour={`${data.day.weekday} - ${data.day.date}`}
      />
    </>
  );
}

function SeatsMap() {
  return (
    <ul className="seats-map">
      <li className="seat select" onCLick={() => console.log("aqui")}>
        01
      </li>
      <li className="seat unavailable" onCLick={() => console.log("aqui")}>
        02
      </li>
      <li className="seat select" onCLick={() => console.log("aqui")}>
        03
      </li>
      <li className="seat" onCLick={() => console.log("aqui")}>
        04
      </li>
      <li className="seat select" onCLick={() => console.log("aqui")}>
        05
      </li>
      <li className="seat unavailable" onCLick={() => console.log("aqui")}>
        06
      </li>
      <li className="seat unavailable" onCLick={() => console.log("aqui")}>
        07
      </li>
      <li className="seat" onCLick={() => console.log("aqui")}>
        08
      </li>
      <li className="seat select" onCLick={() => console.log("aqui")}>
        09
      </li>
      <li className="seat" onCLick={() => console.log("aqui")}>
        10
      </li>
    </ul>
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

function InputCustomerData() {
  return (
    <>
      <div className="data-input">
        <span>Nome do comprador:</span>
        <input type="text" placeholder="Digite seu nome..."></input>
      </div>
      <div className="data-input">
        <span>CPF do comprador:</span>
        <input type="text" placeholder="Digite seu CPF..."></input>
      </div>
    </>
  );
}
