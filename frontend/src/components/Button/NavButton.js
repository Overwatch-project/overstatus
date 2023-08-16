import React from "react";
import styled from "styled-components";

export function NavButton({ text, onClick, type, disabled, height, width }) {
  return (
    <>
      <ButtonBox
        onClick={onClick}
        type={type}
        disabled={disabled}
        height={height}
        width={width}
      >
        <p>{text}</p>
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: #D9D9D9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1%;
  &&:hover {
    background-color: #337FFF;
  }
  p {
    color: #000000;
    font-family: BigNoodle;
    font-size: 15px;
    font-weight: 600;
  }


  @media (max-width: 770px) {
    width: 100px;
  }
`;
