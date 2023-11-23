import React from 'react'

function Post({
    likeStyle,
    src,
    alt,
    dblClickEvent,
}) {
  return (
    <>
      <div id="postAuth">
          <div id="postLeft">
            <div className="userImg">
              <img src={src.userDp}/>
            </div>
            <div className="userName">
              <h2>{src.userText}</h2>
            </div>
          </div>
          <div id="postRight">
            <i className="ri-more-line"></i>
          </div>
      </div>
      <div className="post">
        <img src={src.dp} alt={alt} onDoubleClick={dblClickEvent} />
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