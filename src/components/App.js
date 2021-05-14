import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Catalog from "./Catalog";
import Session from "./Session";
import Seat from "./Seat";
import ConfirmPage from "./ConfirmPage";
import { useState } from "react";

export default function App() {
  const [sucessObj, setSucessObj] = useState({
    title: "",
    hour: "",
    date: "",
    seats: [],
  });
  const [backButton, setBackButton] = useState(true);
  return (
    <BrowserRouter>
      <Header backButton={backButton} />
      <Switch>
        <Route path="/" exact>
          <Catalog setBackButton={setBackButton} />
        </Route>
        <Route path="/sessoes/:idFilm" exact>
          <Session setBackButton={setBackButton} />
        </Route>
        <Route path="/assentos/:idSession" exact>
          <Seat
            setBackButton={setBackButton}
            sucessObj={sucessObj}
            setSucessObj={setSucessObj}
          />
        </Route>
        <Route path="/sucesso" exact>
          <ConfirmPage
            setBackButton={setBackButton}
            sucessObj={sucessObj}
            setSucessObj={setSucessObj}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
