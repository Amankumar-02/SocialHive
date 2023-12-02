import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import FooterBar from "./FooterBar";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

function Add() {

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
          {/* <div className="min-h-min max-w-7xl mx-auto flex justify-between text-left px-3 rounded-md">
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
          </div> */}
          <div className="container">
            <div id="card">
              <div id="topBar">
                <div id="topImg">
                  <Link to="/profile" className="cursor-auto">
                  <img
                    src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png"
                    alt="Insta Icon"
                    className="cursor-pointer"
                    />
                    </Link>
                </div>
                <div id="topIcons">
                  <NavLink to="/add" className="cursor-auto">
                  <i className="ri-add-box-line cursor-pointer"></i>
                  </NavLink>
                  <NavLink to="/notifications" className="cursor-auto">
                  <i className="ri-heart-line cursor-pointer"></i>
                  </NavLink>
                  <Link to="/messages" className="cursor-auto">
                  <i className="ri-messenger-line cursor-pointer"></i>
                  </Link>
                </div>
              </div>
              <div id="addContainer">Coming Soon</div>

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

                <NavLink
                  to="/add"
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

export default Add