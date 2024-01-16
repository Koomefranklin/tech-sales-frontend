"use client"
import DataCard from "@/src/components/Templates";
import { useEffect, useState } from "react";

export default function HeadsetsPage() {
  const [ devices, setDevices ] = useState([]);
  const [ headsets, setHeadsets ] = useState([]);
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
    setHeadsets(devices.filter(device => device.sub-category==="headsets"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center" id="laptops">Headsets</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2">
          <DataCard
          devices={headsets}
          keys={keys} height={400} weight={400}
          />
        </div>
      </div>
    </div>
  )
}