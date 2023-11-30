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
          <p className="text-[10px] text-center font-semibold">{src.text}</p>
        </div>
      </>
    );
  }

export default Stories;
