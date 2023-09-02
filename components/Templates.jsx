import Link from "next/link";
import Image from "next/image";
import { Table } from "@mantine/core";
import { FaCartArrowDown, FaMinus, FaPlus } from "react-icons/fa6";

export default function DataCard({
  devices,
  keys,
  height,
  width
}) {

  return (
    <>
      {devices.map((device) => (
        <Link 
          href={`/categories/devices/${device.id}`}
          className="bg-white text-black rounded container w-80"
        >
          <div
            className="flex flex-row p-3  justify-around rounded-md mb-10"
          >
            <div className="h-50 flex flex-col rounded">
              <Image
                src={device.image_url}
                alt={device.device_model}
                width={width}
                height={height}
              />
              <h1 className="text-lg font-bold text-center">{(device.device_brand + " " + device.device_model).toUpperCase()}</h1>
              <div className="bold flex flex-row">Price: <div className="text-green-500"> {device.price}</div> Ksh</div>
              <div>{device.description}</div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}


export function SuggestionCard({
  devices,
}) {
  return (
    <>
      {devices.map((device) => (
        <Link 
          href={`/categories/devices/${device.id}`}
          className="bg-white text-black rounded text-sm"
        >
          <div
            className="flex flex-row p-3 w-80 rounded-md mb-10"
          >
            <div className=" flex flex-row rounded">
              <Image
                src={device.image_url}
                alt={device.device_model}
                width={150}
                height={150}
              />
              <div className="flex flex-col flex-wrap">
                <div className="text-lg font-bold text-center">{(device.device_brand + " " + device.device_model).toUpperCase()}</div>
                <div className="font-bold text-green-400" > {device.price} Ksh</div>
                <div>{device.description}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}


export function CartItems({
  devices,
}) {
  return (
    <div className="w-full justify-center">
      {devices.map(device => (
        <table className="w-fit flex ">
          <Link
          href={`/categories/devices/${device.id}`}>
            <tr className="flex flex-row">
              <td className="flex flex-row">
                <Image
                src={device.image}
                alt={device.model}
                width={100}
                height={100}
                />{(device.brand + " " + device.model).toUpperCase()}
              </td>
              <td>{device.price}</td>
              <td>{device.quantity}</td>
              <td>{device.price * device.quantity}</td>
              <td>
                <FaPlus/>
                <FaMinus/>
                <FaCartArrowDown/>
              </td>
            </tr>
          </Link>
        </table>
      ))}
    </div>
  )
}