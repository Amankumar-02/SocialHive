import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import FooterBar from "./FooterBar";

function Reels() {
  // declare images
  const postImg = [
    {
      dp: "https://images.unsplash.com/photo-1536995769641-12e9f98fd223?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1671811636280-ffd59649e424?q=80&w=1581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1511167966586-4942d18c6f40?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1524704088085-cfbde9454330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1624602434823-584645165f47?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1528491836309-55b4a140b78a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              {/* <div id="topBar">
                <div id="topImg">
                  <Link to="/profile">
                    <img
                      src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png"
                      alt="Insta Icon"
                    />
                  </Link>
                </div>
                <div id="topIcons">
                  <NavLink to="/add">
                  <i className="ri-add-box-line"></i>
                  </NavLink>
                  <NavLink to="/notifications">
                  <i className="ri-heart-line"></i>
                  </NavLink>
                  <Link to="/messages">
                    <i className="ri-messenger-line"></i>
                  </Link>
                </div>
              </div> */}
              <div id="topReelBar">
                  <Link to="/profile">
                  <i className="ri-arrow-left-line text-xl" ></i>
                  </Link>
                  <p className="text-lg ps-4 font-semibold">Reels</p>
              </div>
              <div id="reels">
                <div id="reelContainer">
                  {postImg.map((src, index) => (
                    <div className="reelTab" key={index}>
                      <div id="reelsImg">
                      <img src={src.dp} alt={index} />
                      <div id="reelOver" className="absolute">
                        <div>
                          left
                        </div>
                        <div id="reelLeftIcon" className="flex flex-col items-center justify-center">
                        {/* <i class="ri-heart-line"></i> */}
                        <i class="ri-heart-fill text-red-600"></i>
                        <p>
                        {Math.floor(Math.random()*10000)}
                          </p>
                        <i class="ri-chat-3-line"></i>
                        <p>{Math.floor(Math.random()*1000)}</p>
                        <i class="ri-send-plane-line"></i>
                        <p>{Math.floor(Math.random()*1000)}</p>
                        <i class="ri-list-check"></i>
                        <div id="reelLeftImg">
                          <img src={src.dp} alt="" />
                        </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <FooterBar/>
              {/* <div id="bottomBar">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `${isActive ? "font-extrabold" : "font-normal"}`
                  }
                >
                  <i className="ri-home-4-line"></i>
                </NavLink>

                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    `${isActive ? "font-extrabold" : "font-normal"}`
                  }
                >
                  <i className="ri-search-line"></i>
                </NavLink>

                <NavLink to="/add"
                  className={({ isActive }) =>
                    `${isActive ? "font-extrabold" : "font-normal"}`
                  }
                >
                  <i className="ri-add-box-line"></i>
                </NavLink>

                <NavLink
                  to="/reels"
                  className={({ isActive }) =>
                    `${isActive ? "font-extrabold" : "font-normal"}`
                  }
                >
                  <i className="ri-instagram-line"></i>
                </NavLink>

                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `${isActive ? "font-extrabold" : "font-normal"}`
                  }
                >
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

export default Reels