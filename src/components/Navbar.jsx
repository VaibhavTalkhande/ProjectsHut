import React, { useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import "../CSS/index.css"
import SideMenu from "./SideMenu"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { ThemeContext } from "../context/Theme"
import Switch from "@mui/material/Switch"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { navbar } = theme

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const switchTrackColor = theme.mode === "dark" ? "#9CA3AF" : undefined

  return (
    <nav aria-label="Site Nav" className="mx-auto p-5 lg:w-1/2">
      <div className="flex flex-row justify-between">
        {/* Logo for project Hut */}
        <div className="item-navbar block md:hidden" id="dropdown-menu">
          <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon
              style={{
                color: navbar.color,
              }}
            />
          </IconButton>
        </div>
        <div className="item-navbar" id="logo-ph">
          <Link to="/" className="inline-flex h-10 items-center rounded-lg font-extrabold text-[2rem]">
            Ph <span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Main element of navbar */}
        <div className="item-navbar hidden md:block" id="elements-of-navbar">
          <ul className="flex items-center gap-5 text-[1rem]">
            <li>
              <NavLink
                to="/"
                className={`inline-block py-2 px-3 text-center font-bold rounded-md focus:outline-none focus:ring ${
                  theme.name === "light" ? "hover:text-white hover:bg-black" : "hover:text-black hover:bg-white"
                }`}
                activeStyle={{
                  fontWeight: "bold",
                  color: navbar.color,
                  backgroundColor: "white",
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projectspage"
                className={`inline-block py-2 px-3 text-center font-bold rounded-md focus:outline-none focus:ring ${
                  theme.name === "light" ? "hover:text-white hover:bg-black" : "hover:text-black hover:bg-white"
                }`}
                activeStyle={{
                  fontWeight: "bold",
                  color: navbar.color,
                  backgroundColor: "white",
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/docs"
                className={`inline-block py-2 px-3 text-center font-bold rounded-md focus:outline-none focus:ring ${
                  theme.name === "light" ? "hover:text-white hover:bg-black" : "hover:text-black hover:bg-white"
                }`}
                activeStyle={{
                  fontWeight: "bold",
                  color: navbar.color,
                  backgroundColor: "white",
                }}
              >
                Docs
              </NavLink>
            </li>
          </ul>
        </div>

        {/* GitHub icon and Dark/Light Mode Toggle */}
        <div className="item-navbar flex items-center">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/priyankarpal/ProjectsHut"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center rounded-lg font-extrabold text-[1.3rem]"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <Switch
              checked={theme.mode === "dark"}
              onChange={toggleTheme}
              color="default"
              sx={{
                "& .MuiSwitch-track": {
                  backgroundColor: switchTrackColor,
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
