import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Order } from "../pages/Order";
import { styled } from "styled-components";
import { Details } from "../pages/Details";
export const Header = () => {
  return (
    <>
      <Container>
        <>
          <h2 style={{ color: "#fff" }}>iStore</h2>
        </>

        <>
          <header style={{ display: "flex", gap: "40px" }}>
            <Link style={{ textDecoration: "none" }} to="/products">
              <H1>Products</H1>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/myCarts">
              {" "}
              <H1>My Cart</H1>{" "}
            </Link>
            <Link style={{ textDecoration: "none" }} to="/myOrders">
              {" "}
              <H1>My Orders</H1>{" "}
            </Link>
          </header>
        </>
      </Container>
      <main>
        <Routes>
          <Route path="/myCarts" element={<Home />}>
            <Route path="section2" element={<Order />} />
          </Route>
          <Route
            path="/products"
            element={<About children={"my cart page"} />}
          />
          <Route path="/products/:productId" element={<Details />} />
          <Route
            path="/myOrders"
            element={<Order children={"hello content"} />}
          />
        </Routes>
      </main>
    </>
  );
};
const H1 = styled.h1`
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 15px;
  background-color: #3082ec;
  height: 80px;
`;
