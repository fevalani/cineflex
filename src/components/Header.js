import { useHistory } from "react-router";
import backArrow from "../images/previous.png";

export default function Header({ backButton }) {
  let history = useHistory();
  console.log(history);
  if (backButton) {
    return (
      <>
        <div className="header">
          <img onClick={() => history.goBack()} src={backArrow}></img>
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
