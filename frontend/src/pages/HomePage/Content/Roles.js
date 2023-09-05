import styled from "styled-components";
import { ContentBox, Description } from "./styles";
import { useEffect, useState } from "react";
import React from "react";
import { getRoles } from "../../../services/oversastApi/rolesService";
import { ThreeDots } from "react-loader-spinner";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Roles() {
  const [roles, setRoles] = useState(undefined);
  const navigate = useNavigate();
  async function apiResponse() {
    try {
      const response = await getRoles();
      setRoles(response);
    } catch (error) {
      setRoles(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);
  function selectRole(key){
    navigate(`/role/${key}`);
  }
  function RoleMap() {
    return (
      <>
        {roles ? (
          <>
            {roles.map((a, index) => {
              return (
                <RoleIcon key={index} onClick={() => selectRole(a.key)}>
                  <p>{a.name}</p>
                  <img src={a.icon} alt={a.name} />
                </RoleIcon>
              );
            })}{" "}
          </>
        ) : (
          <>
            <ThreeDots
              height="70%"
              width="30%"
              radius="9"
              color="#EEEEEE"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </>
        )}
      </>
    );
  }
  return (
    <>
      <ContentBox bgcolor="#337fff">
        <Description>
          <h1>ROLES</h1>
          <div></div>
        </Description>
        <RoleMapBox>
          <RoleMap />
        </RoleMapBox>
      </ContentBox>
    </>
  );
}

const RoleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 10%;
  cursor: pointer;
  p {
    color: #ffffff;
    position: absolute;
    top: 190px;
    bottom: 1;
  }
  img {
    width: 90px;
  }
  &&:hover {
    
    img {
      width: 100px;
    }
    p {
      position: absolute;
      top: 180px;
      bottom: 1;
    }
  }
`;
const RoleMapBox = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: auto;
  justify-content: space-around;
`