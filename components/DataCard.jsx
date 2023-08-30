import Link from "next/link";
import Image from "next/image";

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
                src={device.image}
                alt={device.model}
                width={width}
                height={height}
              />
              <h1 className="text-lg font-bold text-center">{device.brand + " " + device.model}</h1>
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
                src={device.image}
                alt={device.model}
                width={150}
                height={150}
              />
              <div className="flex flex-col flex-wrap">
                <div className="text-lg font-bold text-center">{device.brand + " " + device.model}</div>
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