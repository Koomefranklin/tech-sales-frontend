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
import LoginPage from '@/components/Login';
import { Button } from '@mui/material';
import generateMetadata from '@/components/GenerateMetadata';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const router = useRouter();
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [ token, setToken ] = useState("");
  

  useEffect(() => {if (window && user) {
    setToken(JSON.parse(sessionStorage.getItem("user_token")).key);
  }}, [isLoggedIn]);

  useEffect(() => {
    const fetchUserDetails = async() => {
      const res = await fetch(`http://localhost:8888/api/auth/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      });
      const data = await res.json();
      setUser(data);
    }
    fetchUserDetails();
  }, [token]);

  useEffect(() => {
    if (window) {
      setUser(JSON.parse(sessionStorage.getItem("user_token")));
      router.refresh();
    }
  }, [isLoggedIn]);

  function handleLogout() {
    fetch("http://localhost:8888/api/auth/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      setUser(null);
      sessionStorage.clear();
      router.refresh();
    });
  }

  function handleIsLoggedIn(){
    setIsLoggedIn(isLoggedIn => !isLoggedIn);
    router.refresh();
  }

  return (
    <html lang="en">
      
      <body className={inter.className}>
        {token ? 
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
                title='User profile'
                href={"/account"}
                >
                  <RiUserSettingsLine size={28} color="white" title='Logged in user' /> 
                  {user.first_name} 
                </Link>
              </div>
              
              <div>{children}</div> 
              
              </div>
          </div>
        </div>
        : <LoginPage handleIsLoggedIn={handleIsLoggedIn}/>
        }
      </body>
    </html>
  )
}
