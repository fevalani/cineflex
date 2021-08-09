export default function SeatsMap(props) {
  const { seats, sendData, setSendData, sucessObj, setSucessObj } = props;

  if (seats.length === 0) {
    return <div className="session-title">Carregando...</div>;
  }

  function selectItem(id) {
    let arr;
    let arrName;
    if (id.isAvailable) {
      if (sendData.ids.find((item) => item === id.id) !== undefined) {
        arr = sendData.ids.filter((item) => item !== id.id);
        arrName = sucessObj.seats.filter((item) =>
          item === id.name ? false : true
        );
      } else {
        arr = [...sendData.ids, id.id];
        arrName = [...sucessObj.seats, id.name];
      }
      setSucessObj({ ...sucessObj, seats: arrName });
      setSendData({ ...sendData, ids: arr });
    } else {
      alert("Assento indisponível");
    }
  }

  return (
    <ul className="seats-map">
      {seats.map((item) => (
        <li
          key={item.id}
          className={
            item.isAvailable
              ? `seat ${
                  sendData.ids.find((x) => x === item.id) === undefined
                    ? ""
                    : "select"
                }`
              : "seat unavailable"
          }
          onClick={() => selectItem(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
