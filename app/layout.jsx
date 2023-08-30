"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaChevronRight, FaComputerMouse, FaCartShopping } from "react-icons/fa6";
import { RiUserSettingsLine, RiRouterFill } from "react-icons/ri";
import { MdMenuOpen, MdOutlineShoppingCartCheckout, MdStorage, MdComputer, MdOutlineDesktopWindows, MdMenu } from "react-icons/md";
import { HiSwitchVertical } from "react-icons/hi"
import { FcHeadset, FcVideoProjector } from "react-icons/fc"
import { PiComputerTowerFill } from "react-icons/pi"
import { BsKeyboardFill, BsFillRouterFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { BiCategory, BiSolidServer } from "react-icons/bi"
import { NavLink } from "@mantine/core";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const router = useRouter();
  const [navCollapsed, setNavCollapsed] = useState(false);



  return (
    <html lang="en">
      <body>
        <div > 
          <div className="flex flex-row ">
            <div className="fixed right-0 bottom-0 top-0 w-2 bg-gray-950"></div>
            {!navCollapsed ?
              <div className="navbar bg-gray-950 w-96 h-screen overflow-y-auto sticky bottom-0 top-0 left-0">               
                <div className="links-container flex flex-col justify-start py-5">
                  <NavLink
                    label="Home Page"
                    icon={<AiFillHome size={28} color="white" />}
                    className="text-white text-lg hover:bg-gray-600"
                    variant="subtle"
                    component={Link}
                    href="/"
                  />
                  <NavLink
                    label="Categories"
                    icon={<BiCategory size={28} color="white" />}
                    className="text-white text-lg hover:bg-gray-600"
                    variant="subtle"
                    rightSection={<FaChevronRight size="0.8rem" stroke={1.5} />}
                    childrenOffset={20}
                  >
                    <NavLink
                      label="Desktops"
                      icon={<PiComputerTowerFill size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/desktops"
                    />
                    <NavLink
                      label="Monitors"
                      icon={<MdOutlineDesktopWindows size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/monitors"
                    />
                    <NavLink
                      label="Laptops"
                      icon={<MdComputer size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/laptops"
                    />
                    <NavLink
                      label="Accessories"
                      icon={<BiCategory size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      variant="subtle"
                      rightSection={<FaChevronRight size="0.8rem" stroke={1.5} />}
                      childrenOffset={20}
                    >
                      <NavLink
                      label="Mouse"
                      icon={<FaComputerMouse size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/accessories/mouse"
                    />
                    <NavLink
                      label="Keyboards"
                      icon={<BsKeyboardFill size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/accessories/keyboards"
                    />
                    <NavLink
                      label="Storage"
                      icon={<MdStorage size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/accessories/storage"
                    />
                    <NavLink
                      label="Headsets"
                      icon={<FcHeadset size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/accessories/headsets"
                    />
                    </NavLink>
                    <NavLink
                      label="Projectors"
                      icon={<FcVideoProjector size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/projectors"
                    />
                    <NavLink
                      label="Networking"
                      icon={<BiSolidServer size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      variant="subtle"
                      rightSection={<FaChevronRight size="0.8rem" stroke={1.5} />}
                      childrenOffset={20}
                    >
                      <NavLink
                      label="Servers"
                      icon={<BiSolidServer size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/networking/servers"
                      />
                      <NavLink
                        label="Switches"
                        icon={<HiSwitchVertical size={28} color="white" />}
                        className="text-white text-lg hover:bg-gray-600"
                        component={Link}
                        href="/categories/networking/switches"
                      />
                      <NavLink
                      label="Routers"
                      icon={<BsFillRouterFill size={28} color="white" />}
                      className="text-white text-lg hover:bg-gray-600"
                      component={Link}
                      href="/categories/networking/servers"
                      />
                      <NavLink
                        label="Access Points"
                        icon={<RiRouterFill size={28} color="white" />}
                        className="text-white text-lg hover:bg-gray-600"
                        component={Link}
                        href="/categories/networking/switches"
                      />
                    </NavLink>
                  </NavLink>
                  <NavLink
                    label="Cart"
                    icon={<FaCartShopping size={28} color="white" />}
                    className="text-white text-lg hover:bg-gray-600"
                    variant="subtle"
                    component={Link}
                    href="/cart"
                  />
                  <NavLink
                    label="Checkout"
                    icon={<MdOutlineShoppingCartCheckout size={28} color="white" />}
                    className="text-white text-lg hover:bg-gray-600"
                    variant="subtle"
                    component={Link}
                    href="/checkout"
                  />
                </div>
              </div>
              : <div className="sticky left-0 bottom-0 top-0 w-2 bg-gray-950 h-screen"></div>
            }
            <div className="flex flex-col overflow-x-hidden w-full">
              <div className="sticky top-0 right-0 m-x-6 flex font-bold text-lg text-white min-h-fit max-h-fit justify-between bg-gray-950">
                <button
                onClick={() => setNavCollapsed(!navCollapsed)}>
                  {navCollapsed ?
                    <MdMenu size={28} color='white'/>
                    :
                    <MdMenuOpen size={28} color='white'/>
                  }
                </button>
                <h1 className='justify-center ms-10'>
                  <Link href="/">Mburus Tech</Link>
                </h1>
                <Link className="flex me-10 "
                href={"/account"}
                >
                  <RiUserSettingsLine size={28} color="white" title='Logged in user' /> Franklin 
                </Link>
              </div>
              {/* <div className="top-section">
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
              {user ? <div className="main-body px-11 py-5">{children}</div> : <LoginPage handleIsLoggedIn={handleIsLoggedIn}/>} */}
              <div>{children}</div>
              </div>
          </div>
        </div>
      </body>
    </html>
  )
}
