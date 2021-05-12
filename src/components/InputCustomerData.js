export default function InputCustomerData({ setSendData }) {
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
