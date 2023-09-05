import styled from "styled-components";
import { Link, Navigate, useNavigate , useParams } from "react-router-dom";

export function Logo() {
  const navigate = useNavigate();
  function homePageNavigate(){
    navigate('/')
  }
  return (
    <>
      <LogoBox onClick={homePageNavigate}>
        <Typography>overstatus</Typography>
      </LogoBox>
    </>
  );
}

const LogoBox = styled.div`
  width: auto;
  height: 60%;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;
const Typography = styled.p`
  font-size: 30px;
  color: #218ffe;
  font-family: "Terminator";
`;