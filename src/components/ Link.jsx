import React from "react";

export const Link = ({ children, onClick }) => {
  const clickHandler = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <>
      <a onClick={clickHandler}>{children}</a>
    </>
  );
};
