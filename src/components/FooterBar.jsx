import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterBar() {
  return (
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
                  // className={({ isActive }) =>
                  //   `${isActive ? "border-black" : "border-white"}`
                  // }
                  style={({ isActive }) => ({
                    border: isActive ? '2px solid #D1D5DB' : 'none',
                    borderRadius: isActive ? '50%' : 'none',
                  })}
                >
                  {/* <i className="ri-user-line"></i> */}
                  <div id='bottomLastProfile'>
                    <img src="https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                </NavLink>
              </div>
  )
}

export default FooterBar