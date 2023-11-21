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
        </div>
      </>
    );
  }

export default Stories;
