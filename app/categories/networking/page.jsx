"use client"
import DataCard from "@/components/DataCard";
import { useEffect, useState } from "react";

export default function NetworkingPage() {
  const [ devices, setDevices ] = useState([]);
  const [ networking, setNetworking ] = useState([]);
  

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
    setNetworking(devices.filter(device => device.category==="networking"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-gray-800 text-white text-xl w-full text-center" id="networking">Networking</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2">
          <DataCard
          devices={networking}
          keys={keys}
          />
        </div>
      </div>
    </div>
  )
}