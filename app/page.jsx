"use client"
import DataCard from "@/components/DataCard";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [ items, setItems ] = useState([]);
  const [ laptops, setLaptops ] = useState([]);
  const [ desktops, setDesktops ] = useState([]);
  const [ networking, setNetworking ] = useState([]);
  const [ monitors, setMonitors ] = useState([]);
  const [ accessories, setAccessories ] = useState([]);
  

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("http://127.0.0.1:3001/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  useEffect (() => {  
    setLaptops(items.filter(item => item.category==="laptops"));
    setDesktops(items.filter(item => item.category==="desktops"));
    setMonitors(items.filter(item => item.category==="monitors"));
    setNetworking(items.filter(item => item.category==="networking"));
    setAccessories(items.filter(item => item.category==="accessories"));
  }, [items]);
  
  const keys = ["id", "name", "price", "description", "category"]
	return (
    <div>
      <div>
        <h1 className="bg-blue-600 text-white text-xl w-full text-center" id="desktops">Desktops</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          items={desktops}
          keys={keys}
          />
        </div>
      </div>
      <div>
        <h1 className="bg-blue-600 text-white text-xl w-full text-center" id="laptops">Laptops</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          items={laptops}
          keys={keys}
          />
        </div>
      </div>
      <div>
        <h1 className="bg-blue-600 text-white text-xl w-full text-center">Monitors</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          items={monitors}
          keys={keys}
          />
        </div>
      </div>
      <div>
        <h1 className="bg-blue-600 text-white text-xl w-full text-center">Networking</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          items={networking}
          keys={keys}
          />
        </div>
      </div>
      <div>
        <h1 className="bg-blue-600 text-white text-xl w-full text-center">Accessories</h1>
        <div className="flex flex-row h-max overflow-x-auto gap-1 my-2">
          <DataCard
          items={accessories}
          keys={keys}
          />
        </div>
      </div>
    </div>
  )
}