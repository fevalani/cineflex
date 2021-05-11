export default function BottomBar(props) {
  return (
    <>
      <div className="bottom-bar">
        <div className="frame-image-bottom">
          <img src={props.imageURL} />
        </div>
        <div>
          <div className="filme-title-bottom">{props.filmName}</div>
          <div className="filme-title-bottom">{props.sessionHour}</div>
        </div>
      </div>
    </>
  );
}
