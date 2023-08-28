"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaComputer, FaUserGear, FaChevronRight, FaComputerMouse, FaCartPlus } from "react-icons/fa6";
import { RiDashboard3Line, RiUserSettingsLine, RiComputerFill } from "react-icons/ri";
import { MdMenuOpen, MdAccountCircle, MdOutlineShoppingCartCheckout, MdStorage, MdComputer, MdOutlineDesktopWindows } from "react-icons/md";
import { HiSwitchVertical } from "react-icons/hi"
import { FcVideoProjector } from "react-icons/fc"
import { PiComputerTowerFill } from "react-icons/pi"
import { BsKeyboardFill, BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { BiCategory, BiSolidServer } from "react-icons/bi"
import { TbLicense } from "react-icons/tb";
import { NavLink } from "@mantine/core";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const router = useRouter();



  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        <h1 className="text-center font-bold text-lg text-white fixed overflow-hidden w-full">
          <Link href="/">Mburus Tech</Link>
        </h1>
        <hr />
        <div className="flex flex-row">
          <div className="navbar bg-gray-900 w-1/6 h-screen overflow-y-auto">
            <div className="links-container flex flex-col justify-start py-4">
              <NavLink
                label="Home Page"
                icon={<AiFillHome size={28} color="white" />}
                className="text-white text-lg hover:bg-gray-950"
                variant="subtle"
                component={Link}
                href="/"
              />
              <NavLink
                label="Account"
                icon={<MdAccountCircle size={28} color="white" />}
                className="text-white text-lg hover:bg-gray-950"
                variant="subtle"
                component={Link}
                href="/user"
              />
              <NavLink
                label="Categories"
                icon={<BiCategory size={28} color="white" />}
                className="text-white text-lg hover:bg-gray-950"
                variant="subtle"
                rightSection={<FaChevronRight size="0.8rem" stroke={1.5} />}
                childrenOffset={40}
              >
                <NavLink
                  label="Desktops"
                  icon={<PiComputerTowerFill size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  component={Link}
                  href="/categories/desktops"
                />
                <NavLink
                  label="Monitors"
                  icon={<MdOutlineDesktopWindows size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  component={Link}
                  href="/categories/monitors"
                />
                <NavLink
                  label="Laptops"
                  icon={<MdComputer size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  component={Link}
                  href="/categories/laptops"
                />
                <NavLink
                  label="Accessories"
                  icon={<BiCategory size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  variant="subtle"
                  rightSection={<FaChevronRight size="0.8rem" stroke={1.5} />}
                  childrenOffset={40}
                >
                  <NavLink
                  label="Mouse"
                  icon={<FaComputerMouse size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  component={Link}
                  href="/categories/accessories/mouse"
                />
                <NavLink
                  label="Keyboards"
                  icon={<BsKeyboardFill size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  component={Link}
                  href="/categories/accessories/keyboards"
                />
                <NavLink
                  label="Storage"
                  icon={<MdStorage size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  component={Link}
                  href="/categories/accessories/storage"
                />
                </NavLink>
                <NavLink
                  label="Projectors"
                  icon={<FcVideoProjector size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  component={Link}
                  href="/categories/projectors"
                />
                <NavLink
                  label="Networking"
                  icon={<BiSolidServer size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  variant="subtle"
                  rightSection={<FaChevronRight size="0.8rem" stroke={1.5} />}
                  childrenOffset={40}
                >
                  <NavLink
                  label="Servers"
                  icon={<BiSolidServer size={28} color="white" />}
                  className="text-white text-lg hover:bg-gray-950"
                  component={Link}
                  href="/categories/networking/servers"
                  />
                  <NavLink
                    label="Switches"
                    icon={<HiSwitchVertical size={28} color="white" />}
                    className="text-white text-lg hover:bg-gray-950"
                    component={Link}
                    href="/categories/networking/switches"
                  />
                </NavLink>
              </NavLink>
              <NavLink
                label="Cart"
                icon={<RiDashboard3Line size={28} color="white" />}
                className="text-white text-lg hover:bg-gray-950"
                variant="subtle"
                component={Link}
                href="/cart"
              />
              <NavLink
                label="Checkout"
                icon={<RiDashboard3Line size={28} color="white" />}
                className="text-white text-lg hover:bg-gray-950"
                variant="subtle"
                component={Link}
                href="/checkout"
              />
            </div>
          </div>
          {/* <div className="main-section flex flex-col w-5/6">
            <div className="top-section">
              <div className="flex flex-row justify-between px-10 my-2.5">
                <MdMenuOpen size={48} />
                {user ? (
                  <h1 className="font-bold text-xl self-end mx-2">
                    Welcome, {user.user["firstname"]}
                  </h1>
                ) : null}
                <div className="user-menu flex flex-row">
                  <FaUserGear size={48} className="mx-2" />
                  {user ? (
                    <h1
                      className="font-bold text-xl self-end mx-2 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </h1>
                  ) : (
                    null
                  )}
                </div>
              </div>
              <hr className="border-zinc-900" />
            </div>
            {user ? <div className="main-body px-11 py-5">{children}</div> : <LoginPage handleIsLoggedIn={handleIsLoggedIn}/>}
          </div> */}
          </div>
        </div>
      </body>
    </html>
  )
}
