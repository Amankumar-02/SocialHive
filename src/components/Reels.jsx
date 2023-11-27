import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

function Reels() {
  // declare images
  const postImg = [
    {
      dp: "https://images.unsplash.com/photo-1671811988458-95441face9d9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1671811636280-ffd59649e424?q=80&w=1581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://media.tenor.com/lgLtVbUlDjkAAAAC/fantic-af.gif",
    },
    {
      dp: "https://images.unsplash.com/photo-1676196919586-32234be2a211?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://media.tenor.com/xYJLQil6oQ8AAAAC/duck-season-rabbit-season.gif",
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
                  {postImg.map((src, index) => (
                    <div className="reelTab" key={index}>
                      <img src={src.dp} alt={index} />
                    </div>
                  ))}
                </div>
              </div>
              <div id="bottomBar">
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
                <NavLink to="/profile">
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

export default Reels