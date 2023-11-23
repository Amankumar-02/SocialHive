import React from 'react'

function User({
    src,
    alt,
}) {
  return (
    <div id="postAuth">
          <div id="postLeft">
            <div className="userImg">
              <img src={src.dp} alt={alt} />
            </div>
            <div className="userName">
              <h2>{src.nameText}</h2>
            </div>
          </div>
          <div id="postRight">
            <i className="ri-more-line"></i>
          </div>
    </div>
  )
}

export default User