"use client"
import DataCard from "@/components/Templates";
import { useEffect, useState } from "react";

export default function AccessPointsPage() {
  const [ devices, setDevices ] = useState([]);
  const [ accesspoints, setAccessPoints ] = useState([]);
  

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
    setAccessPoints(devices.filter(device => device.sub-category==="accesspoints"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center" id="accesspoints">AccessPoints</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2">
          <DataCard
          devices={accesspoints}
          keys={keys} height={400} weight={400}
          />
        </div>
      </div>
    </div>
  )
}