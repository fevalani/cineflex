import bacurau from "../images/bacurau.jpeg";

export default function BottomBar() {
  return (
    <>
      <div className="bottom-bar">
        <div className="frame-image-bottom">
          <img src={bacurau} />
        </div>
        <div>
          <div className="filme-title-bottom">Nome do filme</div>
        </div>
      </div>
    </>
  );
}
