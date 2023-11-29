import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import FooterBar from "./FooterBar";

function User() {
  // declare images
  const postImg = [
    {
      dp: "https://media.tenor.com/qwgN2uKHzv0AAAAC/choaruiburey-vaguibu.gif",
    },
    {
      dp: "https://media.tenor.com/KvhW03j1LSkAAAAd/oa1sf9.gif",
    },
    {
      dp: "https://media.tenor.com/e12FDZySXoQAAAAC/leave-theres-the-door.gif",
    },
    {
      dp: "https://images.unsplash.com/photo-1597019558926-3eef445fdf60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1582135739731-e748a423f4fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1489731300081-a03b0ce82303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1489805549589-3c5ae55fe740?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1590803290452-59f035e34e1e?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1519428163141-d3f71425125a?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  //declare variables
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

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
      backgroundImage: `url(${postImg[index].dp})`,
    });

    //declare the timeout call
    setTimeout(() => {
      setFullScreen({ transform: "scale(0)", backgroundImage: "none" });
    }, 2500);
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
                id="fullScreen"
                style={fullScreen}
                // onClick={() =>
                //   setFullScreen({ transform: "scale(0)", backgroundImage: "none" })
                // }
              >
              </div>
              <div id="topBar">
                <div id="topImg" className="flex items-center justify-center">
                  <i className="ri-lock-line"></i>
                  <p className="text-xl ps-2 flex items-center justify-center">
                    {userDetails.name}
                    {/* <i class="ri-circle-fill text-green-600 text-xs"></i> */}
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
                  <Link to="/add">
                  <i className="ri-add-box-line"></i>
                  </Link>
                  <i className="ri-menu-line"></i>
                </div>
              </div>
              
              {/* <div id="userDets"> */}
                <div id="first" className="flex items-start justify-evenly p-4">
                  <div>
                    <div style={{ height: "60px", width: "60px" }}>
                      <img
                        src="https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <p className="text-sm leading-4 font-bold pt-2">
                      {userDetails.name}
                    </p>
                    <p className="text-sm leading-4">Bio</p>
                    <p className="text-sm leading-4">Delhi</p>
                  </div>
                  <div className="flex items-center justify-between ps-10 pt-3">
                    <div className="pe-6 text-center">
                      <p className="font-bold">9</p>
                      <p className="text-sm">Posts</p>
                    </div>
                    <div className="pe-6 text-center">
                      <p className="font-bold">{Math.floor(Math.random() * 100)}k</p>
                      <p className="text-sm">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">{Math.floor(Math.random() * 1000)}</p>
                      <p className="text-sm">Following</p>
                    </div>
                  </div>
                </div>
                <div id="second" className="flex justify-center px-1">
                  <button className="bg-gray-300 text-sm px-6 rounded-lg mb-4">
                    Edit Profile
                  </button>
                  <button className="bg-gray-300 text-sm px-6 rounded-lg mb-4 ms-2">
                    Share Profile
                  </button>
                  <button className="bg-gray-300 px-5 rounded-lg mb-4 ms-2">
                  <i class="ri-user-add-line"></i>
                  </button>
                </div>
                <div
                  id="third"
                  className="flex justify-evenly items-center bg-gray-200"
                >
                  <div>
                    <i className="ri-grid-line text-xl"></i>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#fff"
                        d="M34,42H14c-3.314,0-6-2.686-6-6V16c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20	C40,39.314,37.314,42,34,42z"
                      ></path>
                      <path d="M34,43H14c-3.86,0-7-3.141-7-7V16c0-3.859,3.14-7,7-7h20c3.86,0,7,3.141,7,7v20C41,39.859,37.86,43,34,43z M14,11	c-2.757,0-5,2.243-5,5v20c0,2.757,2.243,5,5,5h20c2.757,0,5-2.243,5-5V16c0-2.757-2.243-5-5-5H14z"></path>
                      <path d="M24,11c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L24,8.586l5.293-5.293	c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-6,6C24.512,10.902,24.256,11,24,11z"></path>
                      <path d="M24,29c-0.217,0-0.431-0.07-0.607-0.205C23.146,28.605,23,28.312,23,28v-2.69l-9.737,2.655	c-0.533,0.147-1.083-0.169-1.228-0.702c-0.145-0.532,0.169-1.082,0.702-1.228l11-3c0.302-0.081,0.623-0.02,0.87,0.17	C24.854,23.395,25,23.688,25,24v2.69l9.737-2.655c0.533-0.149,1.082,0.168,1.228,0.702c0.145,0.532-0.169,1.082-0.702,1.228l-11,3	C24.176,28.988,24.088,29,24,29z"></path>
                    </svg>
                  </div>
                </div>
                {/* <div id="four"> */}
                  <div id="userContainer">
                    {/* <div id="userContainer2"> */}
                    {postImg.map((src, index) => (
                      <div className="userTab" key={index}>
                        <img
                          src={src.dp}
                          alt={index}
                          onClick={() => clickEvent(index)}
                          />
                      </div>
                    ))}
                    {/* </div> */}
                  </div>
                {/* </div> */}
              {/* </div> */}
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
                  }>
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

export default User