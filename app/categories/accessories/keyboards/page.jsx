"use client"
import DataCard from "@/components/DataCard";
import { useEffect, useState } from "react";

export default function KeyboardsPage() {
  const [ devices, setDevices ] = useState([]);
  const [ keyboards, setKeyboards ] = useState([]);
  

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
    setKeyboards(devices.filter(device => device.sub-category==="keyboards"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-gray-800 text-white text-xl w-full text-center" id="keyboards">Keyboards</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2">
          <DataCard
          devices={keyboards}
          keys={keys}
          />
        </div>
      </div>
    </div>
  )
}