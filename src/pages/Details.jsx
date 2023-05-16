import React from "react";
import Button from "../components/UI/Button";
import { useNavigate, useParams } from "react-router-dom";

const ipxone = [
  {
    url: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite.png?v=34",
    productName: "Ipxone 12 pro max",
    price: "$1320",
    id: 1,
  },
  {
    url: "https://mstore.kg/wp-content/uploads/2021/11/iphone-13-pro-max-graphite-sku-header-141021_0-1.png",
    productName: "Ipxone 13 pro max",
    price: " $2304",
    id: 2,
  },
  {
    url: "https://chukotka.shop.megafon.ru/images/goods/1645/164542_p_20.png",
    productName: "Ipxone 14 pro max",
    price: "$4320",
    id: 3,
  },
];

export const Details = () => {
  const res = useNavigate();
  const params = useParams();
  const id = params.productId;
  const findIphone = ipxone.find((el) => el.id === +id);
  console.log(findIphone);
  return (
    <>
      <Button onClick={() => res(-1)}>go Back</Button>

      <>
        <img src={findIphone.url} alt="phone" />
      </>
      <h1>{findIphone.productName}</h1>
      <h3>{findIphone.price}</h3>
    </>
  );
};
