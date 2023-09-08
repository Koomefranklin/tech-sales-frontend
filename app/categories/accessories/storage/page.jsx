"use client"
import DataCard from "@/components/Templates";
import { useEffect, useState } from "react";

export default function StoragePage() {
  const [ devices, setDevices ] = useState([]);
  const [ storage, setStorage ] = useState([]);
  const api = process.env.NEXT_PUBLIC_API_SERVER;

  useEffect(() => {
    const fetchDevices = async () => {
      const res = await fetch(`${api}/devices`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setDevices(data);
    };
    fetchDevices();
  }, []);

  useEffect (() => {  
    setStorage(devices.filter(device => device.sub-category==="storage"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center" id="storage">Storage</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2">
          <DataCard
          devices={storage}
          keys={keys} height={400} weight={400}
          />
        </div>
      </div>
    </div>
  )
}