import { useState } from "react";

export default function SeatsMap(props) {
  const { seats, sendData, setSendData } = props;
  const [select, setSelect] = useState(false);

  if (seats.length === 0) {
    return <div className="session-title">Carregando...</div>;
  }

  function selectItem(id) {
    if (sendData.ids.find((item) => item === id.id) !== undefined) {
      sendData.ids = sendData.ids.filter((item) =>
        item === id.id ? false : true
      );
      setSelect(false);
    } else {
      if (sendData.ids.length === 0) {
        setSelect(true);
        sendData.ids.push(id.id);
      } else {
        setSelect(true);
        sendData.ids.push(id.id);
      }
    }
  }
  return (
    <ul className="seats-map">
      {seats.map((item) => (
        <li
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
