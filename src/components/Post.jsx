import React from 'react'

function Post({
    likeStyle,
    src,
    alt,
    id,
    dblClickEvent,
}) {
  return (
    <>
      <div className="post">
        <img className={id} src={src.dp} alt={alt} onDoubleClick={dblClickEvent} />
        <i className="ri-heart-3-fill" style={likeStyle}></i>
      </div>
      <div className="icons">
        {/* <i className="ri-heart-line" id='heart'></i> */}
        <i className="ri-heart-fill" id="heart"></i>
        <i className="ri-chat-3-line"></i>
        <i className="ri-share-line"></i>
      </div>
      <div className="feeds">
        <h5>{src.like}</h5>
        <p>
          {src.text}
        </p>
      </div>
    </>
  );
}

export default Post