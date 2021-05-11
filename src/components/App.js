import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Catalog from "./Catalog";
import Session from "./Session";
import Seat from "./Seat";
import ConfirmPage from "./ConfirmPage";

export default function App() {
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
          <Seat />
        </Route>
        <Route path="/sucesso" exact>
          <ConfirmPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
