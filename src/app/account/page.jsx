"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
import { BsCartFill, BsFillCartCheckFill } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa6";
import { RiOrderPlayFill } from "react-icons/ri";


export default function UserProfile() {
  const [ token, setToken ] = useState(null);
  const [ userDetails, setUserDetails ] = useState({});
  useEffect(() => {
      if(typeof window !== 'undefined' && window.sessionStorage) {
        setToken(JSON.parse(sessionStorage.getItem("user_token")).key);
        setUserDetails(JSON.parse(sessionStorage.getItem('user_details')));
        
      }
      
    }, [])

  const [ formData, setFormData ] = useState({
        email: userDetails.email,
        username: userDetails.username,
        first_name: userDetails.first_name,
        surname: userDetails.surname,
        last_name: userDetails.last_name,
        password: "",
        phone_number: userDetails.phone_number,
  });
  const api = process.env.NEXT_PUBLIC_API_SERVER;

 

  function handleUserFormChange(e){
    const name = e.target.name
    const value = e.target.value
    setFormData({ ...formData, [name]: value });
  }
  
  const orders = 3

  function ChangeUserdetails(e){
    e.preventDefault;
    fetch (`${api}/users/${userDetails.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${api}`,
      }
    })
  }

  return (
    <>
    <div className="">
      <div className="h-80 border-b-2 border-b-gray-900">

      </div>
      <div className="flex flex-row gap-4 font-bold upercase text-xl">
        <div className="bg-red-600 flex flex-row rounded h-20 w-96 p-4 justify-evenly">
          <RiOrderPlayFill size={30} />
          Orders: {orders}
        </div>
        <div className="bg-blue-600 flex flex-row rounded h-20 w-96 p-4 justify-evenly">
          <FaTruckMoving size={30}/>
          In Transit: {orders}
        </div>
        <div className="bg-green-600 flex flex-row rounded h-20 w-96 p-4 justify-evenly">
          <BsFillCartCheckFill size={30}/>
          Delivered: {orders}
        </div>
        <Link
        className="bg-red-600 flex flex-row rounded h-20 w-96 p-4 justify-evenly"
        title="User Cart"
        href={'/cart'}
        >
          <BsCartFill size={30} />
          Cart: {orders}
        </Link>
      </div>
      <div className="">
        <form className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input 
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleUserFormChange}
              className="border border-white bg-black sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
              <input 
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleUserFormChange}
              className="border border-white bg-black sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="first-name" className="block mb-2 text-sm font-medium">First Name</label>
              <input 
              id="first-name"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleUserFormChange}
              className="border border-white bg-black sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block mb-2 text-sm font-medium">Last Name</label>
              <input 
              id="last-name"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleUserFormChange}
              className="border border-white bg-black sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="sirname" className="block mb-2 text-sm font-medium">Sirname</label>
              <input 
              id="sirname"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleUserFormChange}
              className="border border-white bg-black sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
              <input 
              id="password"
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleUserFormChange}
              className="border border-white bg-black sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            
          </div>
        </form>
      </div>
    </div>
    </>
  )
}