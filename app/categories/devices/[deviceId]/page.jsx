"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import DataCard, { SuggestionCard } from "@/components/Templates";
import { FaCartPlus } from "react-icons/fa6";
import Link from "next/link";
import ShuffleArray from "@/components/Arrangements";
import { useInterval } from "@mantine/hooks";


const DevicePage = ({ params }) => {
  const { deviceId } = params;
  const [ device, setDevice ] = useState([]);
  const [ devices, setDevices ] = useState([]);

  useEffect(() => {
    const fetchDevice = async () => {
      const res = await fetch(`http://localhost:8888/api/devices/${deviceId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setDevice(data);
    };
    fetchDevice();
  }, [deviceId]);

  useEffect(() => {
    const fetchDevices = async () => {
      const res = await fetch(`http://localhost:8888/api/devices`, {
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



  ShuffleArray({queryArray: devices});
  const currentCategory = devices.filter(item => !deviceId.includes(item.id) && item.category === device.category);
  const suggestions = devices.filter(item => !deviceId.includes(item.id) && item.category !== device.category);
  function handleAddToCart() {

  }

  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex flex-row w-1/3 gap-1 overflow-hidden">
          <Image
          src={device.image_url}
          alt={device.device_model}
          width={500}
          height={500}
          className="animate-marquee"
          />
          <Image
          src={device.image_url}
          alt={device.device_model}
          width={500}
          height={500}
          className="animate-marquee"
          />
        </div>
      </div>
    <div className="bg-gray-600">
      <div className="mx-20">
          <div className="font-bold text-center text-xl">{(device.device_brand + " " + device.device_model).toUpperCase()}</div>
          <div className="text-green-500 text-xl mx-20 justify-right">{device.price}</div>
        <div>
          {device.description}
        </div>
      </div>
    </div>
    <div className="h-fit">
      <h1 className="bg-gray-500 w-full text-center"> More on {device.category}</h1>
      <div className="flex flex-row gap-1 h-48 text-xs overflow-x-auto overflow-y-hidden">
        <SuggestionCard
        devices={currentCategory}
        />
      </div>
    </div>
    <div>
      <div className="bg-gray-500 w-full text-center font-bold">Explore other devices</div>
      <div className="flex flex-row flex-wrap overflow-x-hidden gap-1">
        <DataCard
        devices={suggestions}
        keys={"keys"}
        height={300}
        width={300}
        />
      </div>
    </div>
    <div className="fixed bottom-0  min-w-fit w-screen flex flex-row bg-gray-800 justify-center text-white">
      <button
      onClick={handleAddToCart}
      className="flex flex-row">
        <FaCartPlus size={28} className="animate-bounce"/> Add to Cart
      </button>
    </div>
    </div>
  )
};
export default DevicePage