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
  });
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Catalog />
        </Route>
        <Route path="/sessoes/:idFilm" exact>
          <Session />
        </Route>
        <Route path="/assentos/:idSession" exact>
          <Seat sucessObj={sucessObj} setSucessObj={setSucessObj} />
        </Route>
        <Route path="/sucesso" exact>
          <ConfirmPage sucessObj={sucessObj} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
