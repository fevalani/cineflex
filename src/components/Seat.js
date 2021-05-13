import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import ExampleSeat from "./ExampleSeat";
import BottomBar from "./BottomBar";
import SeatsMap from "./SeatsMap";
import InputCustomerData from "./InputCustomerData";

export default function Seat({ sucessObj, setSucessObj }) {
  const params = useParams();
  const [data, setData] = useState([]);
  const [sendData, setSendData] = useState({
    ids: [],
    name: "",
    cpf: "",
  });
  let history = useHistory();

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
      sendData.cpf.length === 11
    ) {
      setSucessObj({
        ...sendData,
        title: data.movie.title,
        hour: data.name,
        date: data.day.date,
      });
      const promise = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",
        sendData
      );
      promise.then(() => history.push("/sucesso"));
      promise.catch(() => alert("Erro no envio!"));
    } else {
      alert("Algum dado incompleto");
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
        <button className="button-default" onClick={linkAuthorized}>
          Reservar assento(s)
        </button>
      </div>
      <BottomBar
        imageURL={data.movie.posterURL}
        filmTitle={data.movie.title}
        sessionHour={`${data.day.weekday} - ${data.day.date}`}
      />
    </>
  );
}
