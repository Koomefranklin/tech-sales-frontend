"use client"

import { useState, useEffect } from "react"
import { FaCartFlatbed, FaMinus, FaPlus } from "react-icons/fa6";
import { Table, TableBody, TableCell, TableHead, TableRow, Tooltip, ButtonGroup, TableFooter } from "@mui/material";
import Image from "next/image";
import { BsFillCartDashFill } from "react-icons/bs";
import { useRouter } from "next/navigation";


export default function CartPage() {
  const [ devices, setDevices ] = useState([]);
  const [ userCart, setUserCart ] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("user_token")).key;
  const router = useRouter();
  // const [ totalAmount, setTotalAmount ] = useState()

  useEffect(() => {
    const fetchUserCart = async () => {
      const res = await fetch(`http://localhost:8888/api/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      });
      const data = await res.json();
      setUserCart(data);
    };
    fetchUserCart();
  }, [token]);
  
  const amounts = userCart.map(item => item.product.price * item.quantity);
  
  let totalAmount = 0;
  amounts.forEach(amount => {
    totalAmount = totalAmount + amount
  });


  function handleDecreaseQuantity() {
    console.log("decrease");
  }

  function handleIncreaseQuantity () {
    console.log("Increase");
  }

  function handleRemoveFramCart () {
    console.log("Remove");
  }

  function handleRowClick (id) {
    router.push(`/categories/devices/${id}`)
  }
 
  return (
    <>
      <div className="flex justify-center rounded ">
          <Table aria-label="Cart Items" className="uppercase bg-black  md:w-1/2 rounded text-white!">
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
              {userCart.map(item => (
                <TableRow
                key={item.id}
                hover={true}
                // onClick={handleRowClick(item.id)}
                >
                  <TableCell className="flex flex-row">
                    <Image
                    src={item.product.image[0]}
                    alt={item.product.device_model}
                    height={100}
                    width={100}
                    /> {item.product.device_brand + " " + item.product.device_model}
                  </TableCell>
                  <TableCell>
                    {item.product.price}
                  </TableCell>
                  <TableCell>
                    {item.quantity}
                  </TableCell>
                  <TableCell>
                    {item.product.price * item.quantity}
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
                <TableCell className="font-bold">
                  Total amount: 
                </TableCell>
                <TableCell className="font-bold text-l">
                {totalAmount}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
      </div>
    </>
  )

}