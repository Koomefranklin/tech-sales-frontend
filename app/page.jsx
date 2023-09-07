"use client"
import DataCard from "@/components/Templates";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function HomePage() {
  const [ devices, setDevices ] = useState([]);
  const [ laptops, setLaptops ] = useState([]);
  const [ desktops, setDesktops ] = useState([]);
  const [ networking, setNetworking ] = useState([]);
  const [ monitors, setMonitors ] = useState([]);
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
    setLaptops(devices.filter(device => device.category==="laptops"));
    setDesktops(devices.filter(device => device.category==="desktops"));
    setMonitors(devices.filter(device => device.category==="monitors"));
    setNetworking(devices.filter(device => device.category==="networking"));
    setAccessories(devices.filter(device => device.category==="accessories"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center" id="desktops">Desktops</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          devices={desktops}
          keys={keys}
          width={400}
          height={400}
          />
        </div>
      </div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center" id="laptops">Laptops</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          devices={laptops}
          keys={keys}
          width={400}
          height={400}
          />
        </div>
      </div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center" id="monitors">Monitors</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          devices={monitors}
          keys={keys}
          width={400}
          height={400}
          />
        </div>
      </div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center">Networking</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          devices={networking}
          keys={keys}
          width={400}
          height={400}
          />
        </div>
      </div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center">Accessories</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          devices={accessories}
          keys={keys}
          width={400}
          height={400}
          />
        </div>
      </div>
    </div>
  )
}