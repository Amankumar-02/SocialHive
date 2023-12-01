function Stories({
  src,
  alt,
  id,
  clickEvent
  }) {
    return (
      <>
        <div className="story">
          <img id={id} src={src.dp} alt={alt} onClick={clickEvent} />
          <p className="text-[11px] text-center pt-1">{src.text}</p>
        </div>
      </>
    );
  }

export default Stories;
