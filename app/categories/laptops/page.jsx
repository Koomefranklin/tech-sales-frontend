"use client"
import DataCard from "@/components/DataCard";
import { useEffect, useState } from "react";

export default function LaptopsPage() {
  const [ devices, setDevices ] = useState([]);
  const [ laptops, setLaptops ] = useState([]);
  

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
    setLaptops(devices.filter(device => device.category==="laptops"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div className="overflow-x-hidden">
        <h1 className="bg-gray-800 text-white text-xl w-full text-center" id="laptops">Laptops</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2 w-full">
            <DataCard
            devices={laptops}
            keys={keys}
            height={400}
            width={400}
            />
        </div>
      </div>
    </div>
  )
}