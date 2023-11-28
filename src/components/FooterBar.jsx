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
                  className={({ isActive }) =>
                    `${isActive ? "font-extrabold" : "font-normal"}`
                  }
                >
                  <i className="ri-user-line"></i>
                </NavLink>
              </div>
  )
}

export default FooterBar