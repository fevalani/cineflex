import { useHistory } from "react-router";
import backArrow from "../images/previous.png";

export default function Header({ backButton }) {
  let history = useHistory();
  if (backButton) {
    return (
      <>
        <div className="header">
          <img
            onClick={() => history.goBack()}
            src={backArrow}
            alt="backArrow"
          ></img>
          <span>CINEFLEX</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="header">
          <span>CINEFLEX</span>
        </div>
      </>
    );
  }
}
