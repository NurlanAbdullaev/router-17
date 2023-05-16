import React from "react";
import { Outlet, useNavigate } from "react-router";
import Button from "../components/UI/Button";
import { styled } from "styled-components";

export const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <MiniConain>
        <h1>My order page</h1>
      </MiniConain>
      <>
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </>
      <>
        <Outlet />
      </>
    </>
  );
};

const MiniConain = styled.div`
  background-color: #fff;
  box-shadow: -17px 12px 15px 20px rgba(34, 60, 80, 0.27);
  width: 100%;
  height: 100px;
`;
