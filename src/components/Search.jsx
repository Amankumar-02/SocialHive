import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
// import Stories from "./Stories";
// import Post from "./Post";

function Search() {
  // declare images
  const postImg = [
    {dp:"https://plus.unsplash.com/premium_photo-1673329271063-74cda8398912?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1614102073832-030967418971?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1673329271082-365e038a1efd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1605007493699-af65834f8a00?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1673329273243-ca29b56e8fab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1612712191426-54db4d88cbec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1673329270544-4964ac0d7835?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1579294800821-694d95e86143?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1431032843361-ec2cd229c751?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1610123598147-f632aa18b275?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1455218873509-8097305ee378?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
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
    }, 2000);
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
              <div id="search">
                  <div id="searchBar">
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder="Search"/>
                  </div>
                <div id="searchContainer">
                {postImg.map((src, index)=>(
                  <div className="searchTab" key={index}>
                    <img src={src.dp} alt={index} onClick={()=>clickEvent(index)}/>
                  </div>
                ))}
                </div>
              </div>
              <div id="bottomBar">
                <NavLink to="/profile" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-home-4-line"></i>
                </NavLink>
                <NavLink to="/search" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-search-line"></i>
                </NavLink>
                <NavLink to="/profile" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-add-box-line"></i>
                </NavLink>
                <NavLink to="/reels" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
                <i className="ri-instagram-line"></i>
                </NavLink>
                <NavLink to="/user" className={({isActive})=>`${isActive ? "font-extrabold" : "font-normal"}`}>
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
  )
}

export default Search