import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import FooterBar from "./FooterBar";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

function Notification() {

  //declare variables
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const goBack = () => {
    window.history.back();
  };
  const [isFollowing, setIsFollowing] = useState(false);
  const [display, setDisplay] = useState({display:"inline-block"});
  const [confirm, setConfirm] = useState("Confirm");
  const [display2, setDisplay2] = useState({display:"inline-block"});
  const [confirm2, setConfirm2] = useState("Confirm");
  const [deleteReq, setDeleteReq] = useState({})
  const [deleteReq2, setDeleteReq2] = useState({})

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
  const textToggle = () => {
    setIsFollowing(!isFollowing);
  };
  const hideDelete = ()=>{
    setDisplay({display:"none"});
    setConfirm("Confirmed")
  }
  const hideDelete2 = ()=>{
    setDisplay2({display:"none"});
    setConfirm2("Confirmed")
  }
  const deleteWhenConfirm = ()=>{
    setDeleteReq({display:"none"})
  }
  const deleteWhenConfirm2 = ()=>{
    setDeleteReq2({display:"none"})
  }
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
              <div id="topNotificationBar">
                {/* <Link to="/profile"> */}
                  <i className="ri-arrow-left-line text-xl cursor-pointer" onClick={goBack}></i>
                {/* </Link> */}
                <p className="text-lg ps-4 font-semibold">Notifications</p>
              </div>



              <div id="notificationContainer">
                <div className="flex items-center">
                  <div className="notificationImg">
                    <img src="https://images.unsplash.com/photo-1701083266430-c9b2a5ab1353?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div id="redDot">9</div>
                  </div>
                  <div className="ps-3">
                  <p className="text-xs font-semibold">Follow requests</p>
                  <p className="text-xs text-gray-400">Approve or ignore requests</p>
                  </div>
                </div>
                <div className="py-4 text-sm font-semibold tracking-[1px] text-gray-800">Last 30 Days</div>
                <div>
                <div className="flex items-center">
                <div className="notificationImg">
                    <img src="https://images.unsplash.com/photo-1700775823195-c9939e2239ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div id="imgOverImg"><img src="https://images.unsplash.com/photo-1700585560129-2c03e2a3f511?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                  </div>
                  <div className="ps-3 pt-2 w-3/4">
                  <p className="text-xs font-semibold">alex, jaramy <span className="font-normal">and</span> 3 others <span className="font-normal">invite you to join their broadcast channels.</span></p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center">
                  <div className="notificationImg">
                    <img src="https://images.unsplash.com/photo-1700165723092-c4e4af768cce?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                 </div>
                <div className="ps-3 w-[195px]">
                <p className="text-xs font-semibold">casey813em<span className="font-normal">, who you might know, is on instagram.</span></p>
                </div>
                  </div>
                <div className="flex items-center justify-end">
                  <button className="bg-regal-blue px-2 py-1 rounded-lg text-white text-sm cursor-pointer" onClick={textToggle}>
                    {/* Follow */}
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>
                </div>
                <div className="py-4 text-sm font-semibold tracking-[1px] text-gray-800">Older</div>


                <div className="flex items-center justify-between pt-4" style={deleteReq}>
                  <div className="flex items-center">
                  <div className="notificationImg">
                    <img src="https://plus.unsplash.com/premium_photo-1700575181270-87f37b2ebb4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                 </div>
                <div className="ps-3 w-[138px]">
                <p className="text-xs font-semibold">exotic_food_52<span className="font-normal"> requested to follow you.</span></p>
                </div>
                  </div>
                <div>
                  <button className="bg-regal-blue px-2 py-1 ms-2 rounded-lg text-white text-sm cursor-pointer" onClick={hideDelete}>
                    {/* Confirm */}
                    {confirm}
                  </button>
                  <button id="deleteBtn" className="bg-gray-300 px-2 py-1 ms-2 rounded-lg font- text-sm cursor-pointer" style={display} onClick={deleteWhenConfirm}>
                    Delete
                  </button>
                </div>
                </div>
                <div className="flex items-center justify-between pt-4" style={deleteReq2}>
                  <div className="flex items-center">
                  <div className="notificationImg">
                    <img src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                 </div>
                <div className="ps-3 w-[138px]">
                <p className="text-xs font-semibold">elizabeth_grey<span className="font-normal"> requested to follow you.</span></p>
                </div>
                  </div>
                <div>
                  <button className="bg-regal-blue px-2 py-1 ms-2 rounded-lg text-white text-sm cursor-pointer" onClick={hideDelete2}>
                    {/* Confirm */}
                    {confirm2}
                  </button>
                  <button id="deleteBtn" className="bg-gray-300 px-2 py-1 ms-2 rounded-lg font- text-sm cursor-pointer" style={display2} onClick={deleteWhenConfirm2}>
                    Delete
                  </button>
                </div>
                </div>
                
                </div>
              </div>
              <FooterBar />
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

export default Notification