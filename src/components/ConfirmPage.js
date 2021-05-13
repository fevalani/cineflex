import { Link } from "react-router-dom";

export default function ConfirmPage(props) {
  console.log(props);
  console.log(props.sucessObj);
  return (
    <>
      <div className="confirm-title">
        <strong>Pedido feito com sucesso!</strong>
      </div>
      <div className="confirm-data">
        <span className="confirm-data-title">Filme e sessão</span>
        <span>Bacurau</span>
        <span>24/06/2021 15:00</span>
      </div>
      <div className="confirm-data">
        <span className="confirm-data-title">Ingressos</span>
        <span>Assento 13</span>
        <span>Assento 14</span>
      </div>
      <div className="confirm-data">
        <span className="confirm-data-title">Filme e sessão</span>
        <span>Nome: Fernando Valani</span>
        <span>CPF: 123.456.789-10</span>
      </div>
      <div className="center-button">
        <Link to="/">
          <button className="button-default">Voltar pra Home</button>
        </Link>
      </div>
    </>
  );
}
