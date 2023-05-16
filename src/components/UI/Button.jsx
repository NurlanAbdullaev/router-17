import styled from "styled-components";
const Button = ({ children }) => {
  const goBack = () => {
    window.history.back();
  };
  return <Buttonn onClick={goBack}>{children}</Buttonn>;
};
const Buttonn = styled.button`
  background-color: #55e655;
  width: 130px;
  height: 40px;
  padding: 10px 10px;
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  margin-left: 50px;
  margin-top: 50px;
  &:hover {
    background-color: #27a144b3;
  }
  &:active {
    background-color: #0a5d3d;
  }
`;
export default Button;
