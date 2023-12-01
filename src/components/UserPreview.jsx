import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import "remixicon/fonts/remixicon.css";
import toast from "react-hot-toast";

function UserPreview() {
  const [postImg, setPostImg] = useState([
    {
      dp: "https://media.tenor.com/qwgN2uKHzv0AAAAC/choaruiburey-vaguibu.gif",
      caption:"Money! Money! Money!",
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
      dp: "https://media.tenor.com/KvhW03j1LSkAAAAd/oa1sf9.gif",
      caption:"Living my best life.",
      song:"bryanlowwww",
      id:"2",
      isFollowing: false,
      isLike: false,
      value:{
        one: `2k`,
        two: `7,520`,
        three: `231`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://media.tenor.com/e12FDZySXoQAAAAC/leave-theres-the-door.gif",
      caption:`"Creating my own happiness."`,
      song:"bryanlowwww",
      id:"3",
      isFollowing: false,
      isLike: false,
      value:{
        one: `4k`,
        two: `2,520`,
        three: `31`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1597019558926-3eef445fdf60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Rise above the storm, find the sunshine.",
      song:"bryanlowwww",
      id:"4",
      isFollowing: false,
      isLike: false,
      value:{
        one: `1.2k`,
        two: `620`,
        three: `41`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1582135739731-e748a423f4fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Kindness is free, sprinkle that stuff everywhere.",
      song:"bryanlowwww",
      id:"5",
      isFollowing: false,
      isLike: false,
      value:{
        one: `7.8k`,
        two: `250`,
        three: `131`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1489731300081-a03b0ce82303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Wanna Race Buddy!",
      song:"bryanlowwww",
      id:"6",
      isFollowing: false,
      isLike: false,
      value:{
        one: `2k`,
        two: `820`,
        three: `233`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1489805549589-3c5ae55fe740?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Living life, one adventure at a time.",
      song:"bryanlowwww",
      id:"7",
      isFollowing: false,
      isLike: false,
      value:{
        one: `523`,
        two: `210`,
        three: `61`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1590803290452-59f035e34e1e?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Find joy in the ordinary.",
      song:"bryanlowwww",
      id:"8",
      isFollowing: false,
      isLike: false,
      value:{
        one: `5.2k`,
        two: `8,920`,
        three: `991`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1519428163141-d3f71425125a?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"She believed she could, so she did.",
      song:"bryanlowwww",
      id:"9",
      isFollowing: false,
      isLike: false,
      value:{
        one: `7.2k`,
        two: `620`,
        three: `431`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      dp: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:"Mr. Vengence",
      song:"bryanlowwww",
      id:"10",
      isFollowing: false,
      isLike: false,
      value:{
        one: `4.2k`,
        two: `920`,
        three: `93`,
      },
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
  ]);

  const userDets = {
    userProfileDp:"https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const {userId} = useParams();
  const goBack = () => {
    window.history.back();
  };

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
  const textToggle = (e, id) => {
    setPostImg((prevButtons) =>
    prevButtons.map((button) =>
    button.id === id
    ? { ...button, isFollowing: !button.isFollowing }
    : button
    )
    );
  };

  const dblClick = (idIndex) => {
    setPostImg((prevButtons) =>
    prevButtons.map((button) =>
    button.id === idIndex
    ? { ...button, isLike: true, StyleFormat:{transform: `translate(-50%, -50%) scale(1)`} }
    : button
    ));
    // setLike({ transform: `translate(-50%, -50%) scale(1)` });
    setTimeout(() => {
      setPostImg((prevButtons) =>
      prevButtons.map((button) =>
      button.id === idIndex
      ? { ...button, StyleFormat:{transform: `translate(-50%, -50%) scale(0)`} }
      : button
      ));
      // setLike({ transform: `translate(-50%, -50%) scale(0)` });
    }, 1000);
  };

  const likeToggle = (e, id) => {
    setPostImg((prevButtons) =>
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
              <div
                id="userPreviewfullScreen"
                style={{ backgroundImage: `url(${postImg[userId].dp})` }}
              >
                <div className='flex flex-col h-[100%] justify-between relative' onDoubleClick={()=>{dblClick(postImg[userId].id)}}>
                <div id="topUserViewBar">
                  {/* <Link to="/search"> */}
                    <i
                      className="ri-arrow-left-line text-xl cursor-pointer"
                      onClick={goBack}
                    ></i>
                  {/* </Link> */}
                  <p className="text-lg ps-4 font-semibold">Posts</p>
                </div>
                <div className='bg-transparent h-[100%]'>
                <i className="ri-heart-3-fill absolute" id="userDblTap" style={postImg[userId].StyleFormat}></i>
                </div>
                <div id="userImgView">
                  <div id="searchLeftText">
                    <div className="flex items-center">
                      <div id="userLeftImg">
                        <img src={userDets.userProfileDp} alt="" />
                      </div>
                      <p className="text-sm ps-2">{userDetails.name}</p>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="14"
                      height="14"
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
                      <button
                        id="userBtn"
                        key={postImg[userId].id}
                        onClick={(e) => textToggle(e, postImg[userId].id)}
                      >
                        {postImg[userId].isFollowing ? "Following" : "Follow"}
                      </button>
                      {/* <button id="searchViewBtn">Follow</button> */}
                    </div>
                    <div className="pt-3 pb-1">
                      <p className="text-xs">{postImg[userId].caption}</p>
                    </div>
                  </div>
                  <div
                    id="userRightIcon"
                    className="flex flex-col items-center justify-center"
                  >
                    {/* <i className="ri-heart-line"></i> */}
                    {/* <i className="ri-heart-fill text-red-600 cursor-pointer"></i> */}
                    <div
                      key={postImg[userId].id}
                      className="inline-block"
                      onClick={(e) => likeToggle(e, postImg[userId].id)}
                    >
                      {postImg[userId].isLike ? (
                        <i className="ri-heart-fill cursor-pointer text-[#ff0000]"></i>
                      ) : (
                        <i className="ri-heart-line cursor-pointer"></i>
                      )}
                    </div>
                    <p>
                      {postImg[userId]?.value?.one}
                      {/* {Math.floor(Math.random()*10000)} */}
                    </p>
                    <i className="ri-chat-3-line cursor-pointer"></i>
                    <p>
                      {postImg[userId]?.value?.two}
                      {/* {Math.floor(Math.random()*1000)} */}
                    </p>
                    <i className="ri-send-plane-line cursor-pointer"></i>
                    <p>
                      {postImg[userId]?.value?.three}
                      {/* {Math.floor(Math.random()*1000)} */}
                    </p>
                    <i className="ri-list-check cursor-pointer"></i>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <p className="mt-4">
            Please Login To see Profile{" "}
            <Link to="/">
              <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
                Login
              </span>
            </Link>
          </p> */}
        </>
      )}
    </>
  )
}

export default UserPreview