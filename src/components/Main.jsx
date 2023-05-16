import React from "react";
import { useNavigate } from "react-router";
import Button from "./UI/Button";

export const Main = () => {
  const res = useNavigate();
  return (
    <>
      <h1>
        Nurlan <Button onClick={() => res("/")}>Nurik</Button>
      </h1>
    </>
  );
};
