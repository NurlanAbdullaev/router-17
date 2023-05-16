import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const ipxone = [
  {
    url: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite.png?v=34",
    productName: "Ipxone 12 pro max",
    product:
      "The iPhone 12 is a mainstream offering from Apple, situated below the iPhone 12 Pro and Pro Max. ",
    price: "$1320",
    id: 1,
  },
  {
    url: "https://mstore.kg/wp-content/uploads/2021/11/iphone-13-pro-max-graphite-sku-header-141021_0-1.png",
    productName: "Ipxone 13 pro max",
    product:
      "The iPhone 13 Pro is the second model from the top in Apple’s 2021 smartphone line-up. The main difference to the top-of-the-line iPhone 13 Pro Max is the smaller ",
    price: " $2304",
    id: 2,
  },
  {
    url: "https://chukotka.shop.megafon.ru/images/goods/1645/164542_p_20.png",
    productName: "Ipxone 14 pro max",
    product:
      "Everything about the iPhone 14 Pro feels entirely effortless. The design is expertly judged and modern, the software is incredibly simple to use, and the camera takes even better photographs than its predecessor. ",
    price: "$4320",
    id: 3,
  },
];

export const About = () => {
  const res = useNavigate();
  return (
    <>
      <Container>
        {ipxone.map((el) => {
          return (
            <MiniContainer>
              <ContainerImg>
                <Img src={el.url} />
              </ContainerImg>
              <h1>{el.productName}</h1>
              {/* <p>{el.product}</p> */}
              <h3>{el.price}</h3>
              <Link to={`/products/${el.id} `}>
                <ButtonName>deteyl</ButtonName>
              </Link>
            </MiniContainer>
          );
        })}
      </Container>
      <Button onClick={() => res(-1)}>go Back</Button>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;
const MiniContainer = styled.div`
  border: 2px solid #fff;
  width: 400px;
  height: 560px;
  margin-top: 40px;
  margin-left: 40px;
  background-color: #fff;
  box-shadow: 8px 3px 14px 5px rgba(34, 60, 80, 0.26);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.img`
  width: 400px;
  height: 400px;
  margin-top: 30px;
`;
const ContainerImg = styled.div`
  width: 400px;
  height: 400px;
`;
const ButtonName = styled.button`
  background-color: #55e655;
  width: 130px;
  height: 40px;
  padding: 10px 10px;
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  margin-left: 50px;
  margin-bottom: 50px;
  &:hover {
    background-color: #27a144b3;
  }
  &:active {
    background-color: #0a5d3d;
  }
`;
