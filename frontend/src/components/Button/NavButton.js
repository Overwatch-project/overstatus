import React from "react";
import styled from "styled-components";

export function NavButton({ text, onClick, type, disabled, height, width, bgcolor }) {
  return (
    <>
      <ButtonBox
        onClick={onClick}
        type={type}
        disabled={disabled}
        height={height}
        width={width}
        bgcolor={bgcolor}
      >
        <h1>{text}</h1>
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1%;
  cursor: pointer;
  &&:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  h1 {
    color: #000000;
    font-size: 25px;
  }

  @media (max-width: 950px) {
    width: auto;
    margin: 0 1vw 0 1vw;
    text-align: center;
    h1{
        width: 15vw;
      }
  }
`;
