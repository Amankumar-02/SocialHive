import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Stories from "./Stories";
import Post from "./Post";
import FooterBar from "./FooterBar";
import logoImg from "../asset/logo2.png";

function Profile() {
  // declare images
  const img = [
    {
      dp: "https://images.unsplash.com/photo-1700235120867-3517dbe5dd52?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"elien_wat",
    },
    {
      dp: "https://images.unsplash.com/photo-1564038079594-99ba184fd036?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1523464862212-d6631d073194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"cora_henry",
    },
    {
      dp: "https://images.unsplash.com/photo-1575439462433-8e1969065df7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1542331180-256bcd8edad7?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Elle_Soph",
    },
    {
      dp: "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"kate_eleanor",
    },
    {
      dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Rosie_tem",
    },
    {
      dp: "https://images.unsplash.com/photo-1618588075852-9f47b51754e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Mel_Green",
    },
    {
      dp: "https://images.unsplash.com/photo-1649864733863-5fc26dd2ec7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Lottie_Ever",
    },
  ];
  const [postImg, setpostImg] = useState([
    {
      userDp:
        "https://images.unsplash.com/photo-1542295856-082da537cda4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Oleg_Ivanov",
      dp: "https://images.unsplash.com/photo-1575378724065-48e9bac9b790?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: "1,68,620 likes",
      text: "Embracing every shade of fabulous.",
      id:"1",
      isLike: false,
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1616839261111-d7070563052c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Vlad_Dyshlivenko",
      dp: "https://images.unsplash.com/photo-1504909595448-91378747b0cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: "1,20,620 likes",
      text: "Ducati Monster 796",
      id:"2",
      isLike: false,
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1587225175140-1a251966146f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Robin_Mathlener",
      dp: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: "4,82,620 likes",
      text: "Shelby GT350R",
      id:"3",
      isLike: false,
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Alison_Wang",
      dp: "https://media.tenor.com/lgLtVbUlDjkAAAAC/fantic-af.gif",
      like: "20,592 likes",
      text: "Whats up doc!!!",
      id:"4",
      isLike: false,
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1531214159280-079b95d26139?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "Zakaria_Ahada",
      dp: "https://images.unsplash.com/photo-1676196919586-32234be2a211?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: "98,220 likes",
      text: "Illuminating the Night with Mother Nature Experience the magic of bioluminescence in the Maldives and be awed by the glowing waters of k.Huraa Island",
      id:"5",
      isLike: false,
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
    {
      userDp:
        "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userText: "call_me_kakarot",
      dp: "https://media.tenor.com/xYJLQil6oQ8AAAAC/duck-season-rabbit-season.gif",
      like: "3,68,620 likes",
      text: "Duck Season Rabbit Season",
      id:"6",
      isLike: false,
      StyleFormat:{
        transform: `translate(-50%, -50%) scale(0)`,
      },
    },
  ]);

  //declare variables
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [currentStoryView, setCurrentStoryView] = useState(0);

  // declare the styles
  const [fullScreen, setFullScreen] = useState({
    transform: "scale(0)",
    backgroundImage: "none",
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
      backgroundImage: `url(${img[index].story})`,
    });
    setCurrentStoryView(index)

    //declare the timeout call
    setTimeout(() => {
      setFullScreen({ transform: "scale(0)", backgroundImage: "none" });
    }, 3000);
  };

  //like eventHandler
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
  const likeToggle = (id) => {
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
            <div
                id="fullScreen"
                style={fullScreen}
                // onClick={() =>
                //   setFullScreen({ transform: "scale(0)", backgroundImage: "none" })
                // }
              >
                <div id="storyFullView">
                  <div className="flex items-center px-3 pt-4">
                    <div id="storyViewDp">
                      <img src={img[currentStoryView].dp} alt={`CurrentStory${currentStoryView}`} />
                    </div>
                    <p className="text-white text-[12px] ps-2">{img[currentStoryView].text}</p>
                    {/* <i class="ri-more-line text-white ps-4"></i> */}
                  </div>
                  <div className="bg-black pb-2">
                  <div id="storySearchBar">
                    {/* <i className="ri-search-line"></i> */}
                    <input
                      type="text"
                      placeholder="Send message"
                    />
                    <i className="ri-heart-line text-white"></i>
                    <i className="ri-send-plane-line text-white"></i>
                  </div>
                  </div>
                </div>
              </div>
              <div id="topBar">
                <div id="topImg">
                  <Link to="/profile" className="cursor-auto">
                  <img
                    src={logoImg}
                    alt="Insta Icon"
                    className="cursor-pointer"
                    />
                    </Link>
                </div>
                <div id="topIcons">
                  <NavLink to="/add" className="cursor-auto">
                  <i className="ri-add-box-line cursor-pointer"></i>
                  </NavLink>
                  <Link to="/notifications" className="cursor-auto">
                    <i className="ri-heart-line cursor-pointer"></i>
                  </Link>
                  <Link to="/messages" className="cursor-auto">
                  <i className="ri-messenger-line cursor-pointer"></i>
                  </Link>
                    <div id="homeNotfIcon">2</div>
                    <div id="homeMsgIcon">9</div>
                </div>
              </div>
              
              <div id="main-story">
              <div className="userStory">
                <img src="https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={''} />
                <div id="bluePlusIcon">+</div>
                <p className="text-[11px] pt-1 text-center">Your Story</p>
              </div>
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
                {postImg.map((src, index) => (
                  <Post
                    key={index}
                    likeStyle={src.StyleFormat}
                    src={src}
                    alt={`post${index + 1}`}
                    dblClickEvent={() => dblClick(src.id)}
                    clickEvent2={() => likeToggle(src.id)}
                  />
                ))}
              </div>
              <FooterBar/>
              {/* <div id="bottomBar">
                <NavLink to="/profile" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-home-4-line"></i>
                </NavLink>

                <NavLink to="/search" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-search-line"></i>
                </NavLink>

                <NavLink to="/add" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-add-box-line"></i>
                </NavLink>

                <NavLink to="/reels" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-instagram-line"></i>
                </NavLink>

                <NavLink to="/user" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-user-line"></i>
                </NavLink>
              </div> */}
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

export default Profile;
