import React from "react";
import "./Card.css";
import {  useNavigate } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
export const Card = ({ _id, src, brand, title, category, orginalPrice, discountPrice,discount, offer, }) => {
  const navigate = useNavigate()
  const handledata = () => {
    const product = { _id, src, brand, title, category, orginalPrice,discount, discountPrice, offer, quantity: 1 }
    // console.log(product)
    localStorage.setItem("ProductsDetails", JSON.stringify(product))
    navigate(`/${category}/${_id}`)
  }
  return (
    <Box onClick={handledata} key={_id}>
      <Box className="">
        <Box className="">
          {/* <Image  src={src} alt={brand} /> */}
        </Box>
        <Box className="card-content-wrap">
          <Box className="card-content">
            <Box>{brand}</Box>
            <Box>{title}</Box>
            <Box>
              ₹{discountPrice}{" "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{orginalPrice}{" "}
              </span>{" "}
            </Box>
            <Box>
              Get it at {offer} {discount}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
