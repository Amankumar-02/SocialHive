import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import FooterBar from "./FooterBar";

function Reels() {
  // declare images
  const [postImg, setpostImg] = useState([
    {
      dp: "https://images.unsplash.com/photo-1536995769641-12e9f98fd223?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileDp:"https://images.unsplash.com/photo-1594712407746-da507d32f4ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nameText:"your.creatorStudio",
      caption:"Whispers of the soul.",
      song:"bryanlowwww",
      id:"1",
      isFollowing: false,
      isLike: false,
      value:{
        one: `42k`,
        two: `1,520`,
        three: `631`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1671811636280-ffd59649e424?q=80&w=1581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileDp:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nameText:"olivia_bennett",
      caption:`"Jingle Bell & Marry Christmas"`,
      song:"midnight_echo",
      id:"2",
      isFollowing: false,
      isLike: false,
      value:{
        one: `22k`,
        two: `4,520`,
        three: `331`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1511167966586-4942d18c6f40?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileDp:"https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nameText:"Xavier_Rodriguez",
      caption:"Embracing serendipity's charm",
      song:"crystal.dreams",
      id:"3",
      isFollowing: false,
      isLike: false,
      value:{
        one: `12k`,
        two: `520`,
        three: `31`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1524704088085-cfbde9454330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileDp:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nameText:"Joshua_Thompson",
      caption:`"Journey to the unknown"`,
      song:"solar_serenade",
      id:"4",
      isFollowing: false,
      isLike: false,
      value:{
        one: `8.6k`,
        two: `2,320`,
        three: `621`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1624602434823-584645165f47?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileDp:"https://images.unsplash.com/photo-1494354145959-25cb82edf23d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nameText:"isabella_rivera",
      caption:`"Lost in city lights"`,
      song:"cosmic_cascade",
      id:"5",
      isFollowing: false,
      isLike: false,
      value:{
        one: `17k`,
        two: `720`,
        three: `131`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1528491836309-55b4a140b78a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileDp:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nameText:"Ava_Martinez",
      caption:"Waves of tranquil thoughts",
      song:"crimson.reverie",
      id:"5",
      isFollowing: false,
      isLike: false,
      value:{
        one: `2.5k`,
        two: `820`,
        three: `431`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
  ]);

  //declare variables
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const goBack = () => {
    window.history.back();
  };

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
  const textToggle = (e, id) => {
    setpostImg((prevButtons) =>
    prevButtons.map((button) =>
    button.id === id
    ? { ...button, isFollowing: !button.isFollowing }
    : button
    )
    );
  };
  const dblClick = (idIndex) => {
    setpostImg((prevButtons) =>
    prevButtons.map((button) =>
    button.id === idIndex
    ? { ...button, isLike: true, StyleFormat:{transform: `translate(-50%, -50%) scale(1)`} }
    : button
    ));
    // setLike({ transform: `translate(-50%, -50%) scale(1)` });
    setTimeout(() => {
      setpostImg((prevButtons) =>
      prevButtons.map((button) =>
      button.id === idIndex
      ? { ...button, StyleFormat:{transform: `translate(-50%, -50%) scale(0)`} }
      : button
      ));
      // setLike({ transform: `translate(-50%, -50%) scale(0)` });
    }, 1000);
  };
  const likeToggle = (e, id) => {
    setpostImg((prevButtons) =>
    prevButtons.map((button) =>
    button.id === id
    ? { ...button, isLike: !button.isLike }
    : button
    )
    );
  };
  return (
    <>
      {userDetails ? (
        <>
          {/* <div className="min-h-min max-w-7xl mx-auto flex justify-between text-left px-3 rounded-md">
            <div>
              <Link to="/profile">
                <img
                  src="./src/asset/logo2.png"
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
          </div> */}
          <div className="container">
            <div id="card">
              <div id="topReelBar">
                  {/* <Link to="/profile"> */}
                  <i className="ri-arrow-left-line text-xl cursor-pointer" onClick={goBack}></i>
                  {/* </Link> */}
                  <p className="text-lg ps-4 font-semibold">Reels</p>
              </div>
              {/* <div id="reels"> */}
                <div id="reelContainer">
                  {postImg.map((src, index) => (
                    // <div className="reelTab">
                      <div key={index} className="reelsImg">
                      <i className="ri-heart-3-fill absolute" id="reelsDblTap" style={src.StyleFormat}></i>
                      <img src={src.dp} alt={index}/>
                      <div id="reelOver" className="absolute" onDoubleClick={()=>{dblClick(src.id)}}>
                        <div id="reelLeftText">
                          <div className="flex items-center">
                          <div id="reelLeftImg">
                            <img src={src.profileDp} alt="" />
                          </div>
                          <p className="text-sm ps-2">{src.nameText}</p>
                          {/* <button id="reelBtn">
                            Follow 
                            </button> */}
                            {/* {buttons.map((button) => ( */}
                              <button id="reelBtn" key={src.id} onClick={(e) => textToggle(e, src.id)}>
                                {src.isFollowing ? 'Following' : 'Follow'}
                              </button>
                            {/* ))} */}
                          </div>
                          <div className="pt-3 pb-1">
                            <p className="text-xs">{src.caption}</p>
                          </div>
                          <div className="flex items-center">
                          <i className="ri-music-2-fill text-[10px] px-1 text-white cursor-pointer"></i>
                          <p className="text-[10px]">{src.song} • Original audio</p>
                          </div>

                        </div>
                        <div id="reelRightIcon" className="flex flex-col items-center justify-center">
                        {/* <i className="ri-heart-line"></i> */}
                        {/* <i className="ri-heart-fill text-red-600 cursor-pointer"></i> */}
                        <div key={src.id} className='inline-block' onClick={(e) => likeToggle(e, src.id)}>
                        {src.isLike ? <i className="ri-heart-fill cursor-pointer text-[#ff0000]"></i> : <i className="ri-heart-line cursor-pointer"></i>}
                        </div>
                        <p>
                        {src.value.one}
                        {/* {Math.floor(Math.random()*10000)} */}
                          </p>
                        <i className="ri-chat-3-line cursor-pointer"></i>
                        <p>
                          {src.value.two}
                          {/* {Math.floor(Math.random()*1000)} */}
                          </p>
                        <i className="ri-send-plane-line cursor-pointer"></i>
                        <p>
                          {src.value.three}
                          {/* {Math.floor(Math.random()*1000)} */}
                        </p>
                        <i className="ri-list-check cursor-pointer"></i>
                        <div id="reelRightImg">
                          <img src={src.dp} alt="" />
                        </div>
                        </div>
                      </div>
                      </div>
                    // </div>
                  ))}
                </div>
              <FooterBar/>
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

export default Reels