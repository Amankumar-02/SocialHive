import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import Stories from './components/Stories';

function App() {
  // declare images
  const img = [
    {dp:"https://images.unsplash.com/photo-1700235120867-3517dbe5dd52?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1700235120867-3517dbe5dd52?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {dp:"https://images.unsplash.com/photo-1564038079594-99ba184fd036?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1564038079594-99ba184fd036?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {dp:"https://images.unsplash.com/photo-1575439462433-8e1969065df7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1575439462433-8e1969065df7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {dp:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {dp:"https://images.unsplash.com/photo-1618588075852-9f47b51754e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1618588075852-9f47b51754e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {dp:"https://images.unsplash.com/photo-1649864733863-5fc26dd2ec7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1649864733863-5fc26dd2ec7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  ];

  // declare the styles
  const [fullScreen, setFullScreen] = useState({ transform: 'scale(0)', backgroundImage: 'none' });

  //declare the eventHandler
  const clickEvent = (index) => {
    setFullScreen({ transform: 'scale(1)', backgroundImage: `url(${img[index].story})` });

  //declare the timeout call
    setTimeout(() => {
      setFullScreen({ transform: 'scale(0)', backgroundImage: 'none' });
    }, 2000);
  };

  //like eventHandler
  const dblClick = ()=>{
    document.querySelector("#post i").style.transform= `translate(-50%, -50%) scale(1)`;
    setTimeout(()=>{
      document.querySelector("#post i").style.transform= `translate(-50%, -50%) scale(0)`;
    }, 1000)
  }

  return (
    <>
      <div id="card">
        <div
          id="fullScreen"
          style={fullScreen}
          // onClick={() =>
          //   setFullScreen({ transform: "scale(0)",           backgroundImage: "none" })
          // }
        ></div>
        <div id="main-story">
          {img.map((src, index) => (
            <Stories
              key={index}
              src={src}
              alt={`story${index + 1}`}
              id={index}
              clickEvent={() => clickEvent(index)}
            />
          ))}
        </div>
        <div id="main-posts">
          <div id="post" onDoubleClick={dblClick}>
            <img src="https://plus.unsplash.com/premium_photo-1700398530598-0cfb9fc051b1?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <i className="ri-heart-3-fill"></i>
          </div>
          <div id="icons">
          {/* <i className="ri-heart-line" id='heart'></i> */}
          <i className="ri-heart-fill" id='heart'></i>
          <i className="ri-chat-3-line"></i>
          <i className="ri-share-line"></i>
          </div>
          <div id="feeds">
            <h5>1,68,620 likes</h5>
            <p>festive cake with almonds and a cup of coffee on a brown ceramic plate</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;