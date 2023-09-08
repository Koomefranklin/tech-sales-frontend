"use client"
import { useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa6";
import { RiOrderPlayFill } from "react-icons/ri";


export default function UserProfile() {
  const token = JSON.parse(sessionStorage.getItem("user_token")).key;
  const [ userDetails, setUserDetails ] = useState(null);
  const [ formData, setFormData ] = useState({
    username: "",
    first_name: "",
    sir_name: "",
    last_name: "",
    password: "****",
    phone_number: "",
  });
  const api = process.env.NEXT_PUBLIC_API_SERVER;
  
  useEffect (() => {
    const fetchUserDetails = async() => {
      const res = await fetch(`${api}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      });
      const data = await res.json();
      setUserDetails(data);
    }
    fetchUserDetails();
  }, []);
  const orders = 3

  return (
    <>
    <div className="">
      <div className="h-1/3">

      </div>
      <div className="flex flex-row gap-2 font-bold upercase text-xl">
        <div className="bg-red-200 flex flex-row rounded">
          <RiOrderPlayFill size={30} />
          Orders {orders}
        </div>
        <div className="bg-blue-200 flex flex-row rounded">
          <FaTruckMoving size={30}/>
          In Transit {orders}
        </div>
        <div className="bg-green-200 flex flex-row rounded">
          <BiCart size={30}/>
          Delivered {orders}
        </div>
      </div>
      <div className="">
        <form>
          <div className="col-span-2">
            
          </div>
        </form>
      </div>
    </div>
    </>
  )
}