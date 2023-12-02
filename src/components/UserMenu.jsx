import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import FooterBar from "./FooterBar";

function UserMenu() {
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
            <div id="topUserMenuBar">
                  {/* <Link to="/profile"> */}
                  <i className="ri-arrow-left-line text-xl cursor-pointer" onClick={goBack}></i>
                  {/* </Link> */}
                  <p className="text-lg ps-4 font-semibold">Setting and privacy</p>
            </div>
            <div id="userMenuContainer">
            <div id="searchBar" className="bg-gray-300">
                <i className="ri-search-line"></i>
                <input
                  type="text"
                  className="bg-transparent"
                  placeholder="Search"
                />
              </div>
            <div id="menuOptions">
            <div className="flex justify-between items-center px-3 my-2">
                <div className="text-sm font-semibold text-gray-500">Your account</div>
                <div className="flex items-center">
                <i class="ri-meta-fill text-blue-500 font-semibold"></i>
                <p className="text-sm ps-1 font-semibold">Meta</p>
                </div>
            </div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-account-circle-line text-2xl pe-2"></i>
                Account Center
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="h-1 bg-gray-300"></div>
            <div className="text-sm text-gray-500 font-semibold px-3 my-3">
                How you use instagram
                </div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-notification-4-line text-2xl pe-2"></i>
                Notifications
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-time-line text-2xl pe-2"></i>
                Time spent
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="h-1 bg-gray-300"></div>
            <div className="text-sm text-gray-500 font-semibold px-3 my-3">
                What You See
            </div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-star-line text-2xl pe-2"></i>
                Favorites
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-notification-off-line text-2xl pe-2"></i>
                Muted accounts
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-funds-box-line text-2xl pe-2"></i>
                Activities
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="h-1 bg-gray-300"></div>
            <div className="text-sm text-gray-500 font-semibold px-3 my-3">
                Who can see your contacts
                </div>
                <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-lock-line text-2xl pe-2"></i>
                Account privacy
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-bard-line text-2xl pe-2"></i>
                Close Friends
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg py-1">
                <i class="ri-user-unfollow-line text-2xl pe-2"></i>
                Blocked
                </p>
                <i class="ri-arrow-right-s-line text-gray-500 font-semibold"></i>
            </div>
            <div className="h-1 bg-gray-300"></div>
            <div className="flex items-center justify-center m-3">
                <button className="bg-red-400 text-white py-1 px-3 rounded-md" onClick={logoutUser}>Logout</button>
            </div>
            </div>
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

export default UserMenu