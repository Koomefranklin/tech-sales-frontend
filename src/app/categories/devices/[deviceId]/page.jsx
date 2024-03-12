"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import DataCard, { SuggestionCard } from "@/src/components/Templates";
import { FaCartPlus } from "react-icons/fa6";
import Link from "next/link";
import ShuffleArray from "@/src/components/Arrangements";
import { useInterval } from "@mantine/hooks";
import AddToCart from "@/src/components/AddToCart";


const DevicePage = ({ params }) => {
  const { deviceId } = params;
  const [device, setDevice] = useState([]);
  const [devices, setDevices] = useState([]);
  const [properties, setProperties] = useState([]);
  const [images, setImages] = useState([]);
  const api = process.env.NEXT_PUBLIC_API_SERVER;
  const token = JSON.parse(sessionStorage.getItem('user_token')).key;

  useEffect(() => {
    const fetchDevice = async () => {
      const res = await fetch(`${api}/devices/${deviceId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      });
      const data = await res.json();
      setDevice(data);
      setProperties(data.productproperties);
      setImages(data.image);
    };
    fetchDevice();
  }, [deviceId]);

  useEffect(() => {
    const fetchDevices = async () => {
      const res = await fetch(`${api}/devices`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      });
      const data = await res.json();
      setDevices(data);
    };
    fetchDevices();
  }, []);


  ShuffleArray({ queryArray: devices });
  const currentCategory = devices.filter(item => !deviceId.includes(item.id) && item.category === device.category);
  const suggestions = devices.filter(item => !deviceId.includes(item.id) && item.category !== device.category);
  function handleAddToCart() {

  }

  function handleAddToCart() {
    AddToCart({
      user: JSON.parse(sessionStorage.getItem('user_details')).id,
      product: deviceId,
      quantity: 5,
    })
  }

  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex flex-row w-1/3 gap-1 overflow-hidden">
          <Image
            src={images[0]}
            alt={device.device_model}
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
      <div className="bg-black-600">
        <div className="mx-20 ">
          <div className="font-bold text-center text-xl uppercase">{(device.device_brand + " " + device.device_model)}</div>
          <div className="text-green-500 text-xl mx-20 justify-right">{device.price}</div>
          <div>
            {device.description}
          </div>
          <div>
            <div className="text-center">
              Properties
            </div>
            {properties ? properties.map(property => (
              <div key={property} className="">{property}</div>))
              : <div className="animate-bounce">Loading...</div>}
          </div>
        </div>
      </div>

      <div className="h-fit">
        <h1 className="bg-cyan-950 w-full text-center"> More on {device.category}</h1>
        <div className="flex flex-row gap-1 h-48 text-xs overflow-x-auto overflow-y-hidden">
          <SuggestionCard
            devices={currentCategory}
          />
        </div>
      </div>
      <div>
        <div className="bg-cyan-950 w-full text-center font-bold">Explore other devices</div>
        <div className="flex flex-row flex-wrap overflow-x-hidden ">
          <DataCard
            devices={suggestions}
            keys={"keys"}
            height={300}
            width={300}
          />
        </div>
      </div>
      <div className="fixed bottom-0  min-w-fit w-screen flex flex-row bg-cyan-950 justify-center text-white">
        <button
          onClick={handleAddToCart}
          className="flex flex-row">
          <FaCartPlus size={28} className="animate-bounce" /> Add to Cart
        </button>
      </div>
    </div>
  )
};
export default DevicePage