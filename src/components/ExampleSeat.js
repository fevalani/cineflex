export default function ExampleSeat() {
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
