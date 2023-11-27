import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
// import Stories from "./Stories";
// import Post from "./Post";

function Reels() {
  // declare images
  const img = [
    {
      dp: "https://images.unsplash.com/photo-1700235120867-3517dbe5dd52?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1700235120867-3517dbe5dd52?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1564038079594-99ba184fd036?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1564038079594-99ba184fd036?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1575439462433-8e1969065df7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1575439462433-8e1969065df7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1618588075852-9f47b51754e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1618588075852-9f47b51754e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1649864733863-5fc26dd2ec7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1649864733863-5fc26dd2ec7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const postImg = [
    {
      userDp:
        "https://images.unsplash.com/photo-1542295856-082da537cda4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Oleg_Ivanov",
      dp: "https://plus.unsplash.com/premium_photo-1700398530598-0cfb9fc051b1?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: "1,68,620 likes",
      text: "festive cake with almonds and a cup of coffee on a brown ceramic plate",
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1616839261111-d7070563052c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Vlad_Dyshlivenko",
      dp: "https://images.unsplash.com/photo-1622185135825-d34b40aa03ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: "1,20,620 likes",
      text: "Royal Enfield motorbike",
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1587225175140-1a251966146f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Robin_Mathlener",
      dp: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: "4,82,620 likes",
      text: "Shelby GT350R",
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Alison_Wang",
      dp: "https://media.tenor.com/lgLtVbUlDjkAAAAC/fantic-af.gif",
      like: "20,592 likes",
      text: "Whats up doc!!!",
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1531214159280-079b95d26139?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Zakaria_Ahada",
      dp: "https://images.unsplash.com/photo-1676196919586-32234be2a211?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: "98,220 likes",
      text: "Illuminating the Night with Mother Nature Experience the magic of bioluminescence in the Maldives and be awed by the glowing waters of k.Huraa Island",
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "call_me_kakarot",
      dp: "https://media.tenor.com/xYJLQil6oQ8AAAAC/duck-season-rabbit-season.gif",
      like: "3,68,620 likes",
      text: "Duck Season Rabbit Season",
    },
  ];

  //declare variables
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

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
              <div id="topBar">
                <div id="topImg">
                  <Link to="/profile">
                  <img
                    src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png"
                    alt="Insta Icon"
                    />
                    </Link>
                </div>
                <div id="topIcons">
                  <i className="ri-add-box-line"></i>
                  <i className="ri-heart-line"></i>
                  <Link to="/messages">
                  <i className="ri-messenger-line"></i>
                  </Link>
                </div>
              </div>
              <div id="reels">
                <div id="reelContainer">
                {postImg.map((src, index)=>(
                  <div className="reelTab" key={index}>
                    <img src={src.dp} alt={index} />
                  </div>
                ))}
                </div>
              </div>
              <div id="bottomBar">
                <Link to="/profile">
                <i className="ri-home-4-fill"></i>
                </Link>
                <Link to="/search">
                <i className="ri-search-line"></i>
                </Link>
                <Link to="/profile">
                <i className="ri-add-box-line"></i>
                </Link>
                <Link to="/reels">
                <i className="ri-instagram-line"></i>
                </Link>
                <Link to="/user">
                <i className="ri-user-line"></i>
                </Link>
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
  )
}

export default Reels