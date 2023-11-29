import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import attach from '../asset/attach.png';
import call from '../asset/call.png';
import gallary from '../asset/gallary.png';
import mike from '../asset/mike.png';
import vc from '../asset/vc.png';

function Messages() {
  // declare images
  const postImg = [
    {
      dp: "https://media.tenor.com/KvhW03j1LSkAAAAd/oa1sf9.gif",
      text:"Sussan Chase"
    },
    {
      dp: "https://images.unsplash.com/photo-1597019558926-3eef445fdf60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text:"Mike Jason"
    },
    {
      dp: "https://images.unsplash.com/photo-1582135739731-e748a423f4fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text:"Tod Jackson"
    },
    {
      dp: "https://images.unsplash.com/photo-1489731300081-a03b0ce82303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text:"Cristen Markin"
    },
    {
      dp: "https://images.unsplash.com/photo-1489805549589-3c5ae55fe740?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text:"Luke Cage"
    },
    {
      dp: "https://images.unsplash.com/photo-1590803290452-59f035e34e1e?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text:"Sofia Dian"
    },
    {
      dp: "https://images.unsplash.com/photo-1519428163141-d3f71425125a?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text:"Marry Aimsworth"
    },
  ];
  const contacts = [
    {dp:"https://images.unsplash.com/photo-1596936773232-68c5364b44a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Alice Grey", msg:"Hi!!", reply:"Hello!",},
    {dp:"https://images.unsplash.com/photo-1535475021441-dbee269924a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Stella Wayne", msg:"Hey!!", reply:"Hi!",},
    {dp:"https://images.unsplash.com/photo-1485811661309-ab85183a729c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Ciesta", msg:"Bonjour 👋", reply:"Hé",},
    {dp:"https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Andrew", msg:"Whats Up Doc!!", reply:"Fine Buddy 👍",},
    {dp:"https://images.unsplash.com/photo-1536303158031-c868b371399f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Alex Gale", msg:"Hi Buddy 😄", reply:"Hey 😄",},
    {dp:"https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Jennifer Matt", msg:"Hello 💕", reply:"Hey 🤩",},
    {dp:"https://images.unsplash.com/photo-1596936773232-68c5364b44a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Alice Grey", msg:"Hi!!", reply:"Hello!",},
    {dp:"https://images.unsplash.com/photo-1535475021441-dbee269924a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Stella Wayne", msg:"Hey!!", reply:"Hi!",},
    {dp:"https://images.unsplash.com/photo-1485811661309-ab85183a729c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Ciesta", msg:"Bonjour 👋", reply:"Hé",},
    {dp:"https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Andrew", msg:"Whats Up Doc!!", reply:"Fine Buddy 👍",},
    {dp:"https://images.unsplash.com/photo-1536303158031-c868b371399f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Alex Gale", msg:"Hi Buddy 😄", reply:"Hey 😄",},
    {dp:"https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Jennifer Matt", msg:"Hello 💕", reply:"Hey 🤩",},
    {dp:"https://images.unsplash.com/photo-1596936773232-68c5364b44a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Alice Grey", msg:"Hi!!", reply:"Hello!",},
    {dp:"https://images.unsplash.com/photo-1535475021441-dbee269924a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Stella Wayne", msg:"Hey!!", reply:"Hi!",},
    {dp:"https://images.unsplash.com/photo-1485811661309-ab85183a729c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Ciesta", msg:"Bonjour 👋", reply:"Hé",},
    {dp:"https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Andrew", msg:"Whats Up Doc!!", reply:"Fine Buddy 👍",},
    {dp:"https://images.unsplash.com/photo-1536303158031-c868b371399f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Alex Gale", msg:"Hi Buddy 😄", reply:"Hey 😄",},
    {dp:"https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", contactName:"Jennifer Matt", msg:"Hello 💕", reply:"Hey 🤩",},
  ];

  //declare variables
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [contactMsg, setContactMsg] = useState([])
  const goBack = () => {
    window.history.back();
  };

  // declare the styles
  const [fullScreen, setFullScreen] = useState({
    transform: "scale(0)",
    backgroundColor: "white",
  });

  //declare auth methods
  useEffect(() => {
    try {
      const getData = authService.account.get();
      getData.then(function (res) {
        setUserDetails(res);
      });
    } catch (error) {
      console.log(`Get Data error: `, error);
    }
  }, []);

  const logoutUser = async (e) => {
    // e.preventDefault();
    try {
      await authService.logout();
      navigate("/");
      console.log(`Logout SuccessFully`);
      toast.success("Successfully Logout!");
    } catch (error) {
      console.error("Log-out failed:", error);
      toast.error(error.message);
    }
  };
  //declare the eventHandler
  const clickEvent = (index) => {
    setFullScreen({
      transform: "scale(1)",
      backgroundColor: "white",
    });
    setContactMsg(contacts[index])

    //declare the timeout call
    // setTimeout(() => {
    //   setFullScreen({ transform: "scale(0)", backgroundImage: "none" });
    // }, 2500);
  };
  return (
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto flex justify-between text-left px-3 rounded-md">
            <div>
              <Link to="/profile">
                <img
                  src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png"
                  alt="Insta Icon"
                  className="w-20"
                />
              </Link>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="container">
            <div id="card">
              {/* here we declare the msg tab */}
              <div id="fullScreen" style={fullScreen}>
                <div
                  id="msgTopBar"
                  className="flex items-center justify-between p-3"
                >
                  <div className="flex items-center justify-evenly ">
                    <i
                      className="ri-arrow-left-line text-xl cursor-pointer"
                      onClick={() => {
                        setFullScreen({
                          transform: "scale(0)",
                          backgroundColor: "transparent",
                        });
                      }}
                    ></i>
                    <div id="msgTopBarDp">
                      <img src={contactMsg.dp} alt="" />
                    </div>
                    <p>{contactMsg.contactName}</p>
                  </div>
                  <div className="flex items-center justify-end contactIcon">
                    <img src={call} className="cursor-pointer"/>
                    <img className="cursor-pointer" src={vc} />
                  </div>
                </div>
                <div id="msgMiddleBar" className="px-2 py-4">
                  <div className="flex flex-col items-center justify-center">
                    <div id="msgCenterDp">
                      <img src={contactMsg.dp} />
                    </div>
                    <h1 className="text-sm mt-2 leading-4 font-semibold">
                      {contactMsg.contactName}
                    </h1>
                    <p className="leading-4 text-xs">{`Instagram • ${contactMsg.contactName}`}</p>
                    <p className="leading-4 text-xs">
                      {Math.floor(Math.random() * 100)}k followers • {Math.floor(Math.random() * 1000)} post
                    </p>
                  </div>


                  <div className="mt-2">
                    <p className="bg-gray-300 inline-block rounded-2xl py-1 text-md px-3">
                      {contactMsg.msg}
                    </p>
                  </div>
                  <div className="flex justify-end mt-2">
                    <p className="text-white bg-regal-blue inline-block rounded-2xl py-1 text-md px-3">
                      {contactMsg.reply}
                    </p>
                  </div>

                  
                </div>
                <div id="msgBottomBar">
                  <div>
                    <div id="msgContactBar" className="bg-gray-300">
                      <div
                        id="cameraIconId"
                        className="flex items-center justify-center bg-regal-blue w-11 rounded-xl"
                      >
                        <i className="ri-camera-fill text-white text-lg cursor-pointer"></i>
                      </div>
                      <input
                        type="text"
                        placeholder="Message..."
                        className="bg-transparent"
                      />
                      <div className="contactIcon2 flex justify-end items-center">
                        <img src={mike} alt="" className="cursor-pointer"/>
                        <img src={gallary} alt="" className="cursor-pointer"/>
                        <img className="cursor-pointer" src={attach} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="topBar">
                <div className="flex items-center justify-center">
                  {/* <Link to="/profile"> */}
                    <i className="ri-arrow-left-line text-xl cursor-pointer" onClick={goBack}></i>
                  {/* </Link> */}
                  <p className="text-xl ps-2 flex items-center justify-center">
                    {userDetails.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="16"
                      height="16"
                      viewBox="0 0 48 48"
                      className="ps-1"
                    >
                      <polygon
                        fill="#42a5f5"
                        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                      ></polygon>
                      <polygon
                        fill="#fff"
                        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                      ></polygon>
                    </svg>
                  </p>
                </div>
                <div id="topIcons">
                  <i className="ri-video-add-line cursor-pointer"></i>
                  <i className="ri-file-edit-line cursor-pointer"></i>
                </div>
              </div>
              <div id="msgBar" className="bg-gray-300">
                <i className="ri-search-line"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent"
                />
              </div>
              <div id="msgStory">
                {postImg.map((src, index) => (
                  <div key={index} className="msgStories">
                    <i className="ri-circle-fill text-green-600 text-xs activeStatus"></i>
                    <img src={src.dp} alt={`msgStory ${index}`} />
                    <p className="msgText">{src.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between px-4">
                <p className="text-sm font-semibold">Messages</p>
                <p className="text-xs text-regal-blue font-medium">Requests</p>
              </div>
              <div className="py-2" id="main-message">
                {contacts.map((src, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-2 py-1"
                    onClick={() => clickEvent(index)}
                  >
                    <div className="contactMembers cursor-pointer">
                      <div className="contactImg">
                        <img src={src.dp} alt={`contact${index}`} />
                      </div>
                      <div className="ms-4">
                        <p className="text-xs font-semibold">
                          {src.contactName}
                        </p>
                        <p className="text-xs">{src.msg}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i
                        className="ri-circle-fill text-blue-600"
                        style={{ fontSize: "8px" }}
                      ></i>
                      <i className="ri-camera-line text-2xl ms-4"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="mt-4">
            Please Login To see Profile{" "}
            <Link to="/">
              <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
                Login
              </span>
            </Link>
          </p>
        </>
      )}
    </>
  );
}

export default Messages