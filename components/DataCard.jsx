import Link from "next/link";
import Image from "next/image";

export default function DataCard({
  items,
  keys
}) {

  return (
    <>
      {items.map((item) => (
        <Link 
          href={`/categories/${item.category}/${item.id}`}
          className="bg-white text-black "
        >
          <div
            className="flex flex-row p-3 w-80 justify-around rounded-md mb-10"
          >
            <div className=" flex flex-col rounded">
              <Image
                src={item.image}
                alt={item.model}
                width={500}
                height={500}
              />
              <h1 className="text-lg font-bold text-center">{item.brand + " " + item.model}</h1>
              <p>Price: {item.price} Ksh</p>
              <div>{item.description}</div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}