import { useHistory } from "react-router-dom";

export default function ConfirmPage(props) {
  props.setBackButton(false);
  const { cpf, date, hour, seats, name, title } = props.sucessObj;
  const seatArray = seats
    .map((i) => parseInt(i))
    .sort((a, b) => {
      return a - b;
    });
  let history = useHistory();

  function clearAll() {
    props.setSucessObj({
      title: "",
      hour: "",
      date: "",
      seats: [],
    });
    history.push("/");
  }
  return (
    <>
      <div className="confirm-title">
        <strong>Pedido feito com sucesso!</strong>
      </div>
      <div className="confirm-data">
        <span className="confirm-data-title">Filme e sessão</span>
        <span>{title}</span>
        <span>
          {date} {hour}
        </span>
      </div>
      <div className="confirm-data">
        <span className="confirm-data-title">Ingressos</span>
        {seatArray.map((i) => (
          <span key={i}>Assento {i}</span>
        ))}
      </div>
      <div className="confirm-data">
        <span className="confirm-data-title">Filme e sessão</span>
        <span>Nome: {name}</span>
        <span>CPF: {cpf}</span>
      </div>
      <div className="center-button">
        <button onClick={clearAll} className="button-default">
          Voltar pra Home
        </button>
      </div>
    </>
  );
}
