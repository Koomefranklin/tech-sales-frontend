"use client"

import { useState, useEffect } from "react"
import { FaCartFlatbed, FaMinus, FaPlus } from "react-icons/fa6";
import { Table, TableBody, TableCell, TableHead, TableRow, Tooltip, ButtonGroup, TableFooter } from "@mui/material";
import Image from "next/image";
import { BsFillCartDashFill } from "react-icons/bs";


export default function CartPage() {
  const user = {
    id: 1,
    name: "Franklin"
  };
  const [ devices, setDevices ] = useState([]);
  const [ userCart, setUserCart ] = useState([]);

  useEffect(() => {
    const fetchUserCart = async () => {
      const res = await fetch(`http://localhost:8888/api/cart/?user_id=${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUserCart(data);
    };
    fetchUserCart();
  }, []);

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
  // const products = 
  const cartDevices = userCart.map(item => item.device_id);
  const userDevices = devices.filter(device => cartDevices.includes(device.id));

  const prices = userCart.map(item => 
    {const amounts = item.price * item.quantity}
    );
  const quantity = userCart.map(item => item.quantity);
  // const totalAmount = 

  function handleDecreaseQuantity() {
    console.log("decrease");
  }

  function handleIncreaseQuantity () {
    console.log("Increase");
  }

  function handleRemoveFramCart () {
    console.log("Remove");
  }

  return (
    <>
      <div className="flex justify-center rounded">
          <Table aria-label="Cart Items" className="uppercase bg-white md:w-1/2 rounded">
            <TableHead >
              <TableRow className="h-2">
                <TableCell className="font-bold">
                  Item
                </TableCell>
                <TableCell className="font-bold">
                  Price
                </TableCell>
                <TableCell className="font-bold">
                  Quantity
                </TableCell>
                <TableCell className="font-bold">
                  Amount
                </TableCell>
                <TableCell className="font-bold">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userDevices.map(device => (
                <TableRow
                key={device.id}
                >
                  <TableCell className="flex flex-row">
                    <Image
                    src={device.image_url}
                    alt={device.device_model}
                    height={100}
                    width={100}
                    /> {device.device_brand + " " + device.device_model}
                  </TableCell>
                  <TableCell>
                    {device.price}
                  </TableCell>
                  <TableCell>
                    {2}
                  </TableCell>
                  <TableCell>
                    {device.price * 2}
                  </TableCell>
                  <TableCell>
                    <ButtonGroup className="gap-1">
                      <Tooltip
                      title="Decrease Quantity"
                      placement="top"
                      className="bg-red-400 rounded"
                      onClick={handleDecreaseQuantity}
                      >
                        <FaMinus size={22} color="white"/>
                      </Tooltip>
                      <Tooltip
                      title="Increase Quantity"
                      className="bg-green-500 rounded"
                      onClick={handleIncreaseQuantity}

                      >
                        <FaPlus size={22} color="white"/>
                      </Tooltip>
                      <Tooltip
                      title="Remove from cart"
                      className="bg-red-600 rounded"
                      onClick={handleRemoveFramCart}
                      >
                        <BsFillCartDashFill size={22} color="white"/>
                      </Tooltip>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter >
              <TableRow className="flex justify-center">
                <TableCell className="flex flex-row w-full font-bold">
                  Total amount: {}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
      </div>
    </>
  )

}