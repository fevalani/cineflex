export default function BottomBar(props) {
  return (
    <>
      <div className="bottom-bar">
        <div className="frame-image-bottom">
          <img src={"bacurau"} />
        </div>
        <div>
          <div className="filme-title-bottom">{props.name}</div>
          <div className="filme-title-bottom">{props.subname}</div>
        </div>
      </div>
    </>
  );
}
