"use client"
import DataCard from "@/src/components/Templates";
import { useEffect, useState } from "react";

export default function ProjectorsPage() {
  const [ devices, setDevices ] = useState([]);
  const [ projectors, setProjectors ] = useState([]);
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
    setProjectors(devices.filter(device => device.category==="projectors"));
  }, [devices]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-black-800 text-white text-xl w-full text-center" id="projectors">Projectors</h1>
        <div className="flex flex-wrap h-max overflow-x-hidden overflow-y-auto gap-1 my-2">
          <DataCard
          devices={projectors}
          keys={keys} height={400} weight={400}
          />
        </div>
      </div>
    </div>
  )
}