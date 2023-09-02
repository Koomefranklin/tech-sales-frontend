"use client"
import DataCard from "@/components/Templates";
import { useEffect, useState } from "react";

export default function AccessoriesPage() {
  const [ devices, setDevices ] = useState([]);
  const [ accessories, setAccessories ] = useState([]);
  

  useEffect(() => {
    const fetchDevices = async () => {
      const res = await fetch("http://localhost:8888/api/devices", {
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
    setAccessories(devices.filter(device => device.category==="accessories"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-gray-800 text-white text-xl w-full text-center" id="accessories">Accessories</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2">
          <DataCard
          devices={accessories}
          keys={keys}
          />
        </div>
      </div>
    </div>
  )
}