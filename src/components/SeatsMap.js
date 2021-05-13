import { useState } from "react";

export default function SeatsMap(props) {
  const { seats, sendData, setSendData } = props;

  if (seats.length === 0) {
    return <div className="session-title">Carregando...</div>;
  }

  function selectItem(id) {
    let arr;
    if (sendData.ids.find((item) => item === id.id) !== undefined) {
      arr = sendData.ids.filter((item) => (item === id.id ? false : true));
    } else {
      arr = [...sendData.ids, id.id];
    }
    setSendData({ ...sendData, ids: arr });
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
          onClick={item.isAvailable ? () => selectItem(item) : undefined}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
