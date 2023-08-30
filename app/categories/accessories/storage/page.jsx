"use client"
import DataCard from "@/components/DataCard";
import { useEffect, useState } from "react";

export default function StoragePage() {
  const [ devices, setDevices ] = useState([]);
  const [ storage, setStorage ] = useState([]);
  

  useEffect(() => {
    const fetchDevices = async () => {
      const res = await fetch("http://localhost:8888/devices", {
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
        <h1 className="bg-gray-800 text-white text-xl w-full text-center" id="storage">Storage</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2">
          <DataCard
          devices={storage}
          keys={keys}
          />
        </div>
      </div>
    </div>
  )
}