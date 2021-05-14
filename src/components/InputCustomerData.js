export default function InputCustomerData({ sendData, setSendData }) {
  return (
    <>
      <div className="data-input">
        <span>Nome do comprador:</span>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={sendData.name}
          onChange={(e) => setSendData({ ...sendData, name: e.target.value })}
        ></input>
      </div>
      <div className="data-input">
        <span>CPF do comprador:</span>
        <input
          type="number"
          placeholder="Digite seu CPF..."
          onChange={(e) => setSendData({ ...sendData, cpf: e.target.value })}
        ></input>
      </div>
    </>
  );
}
