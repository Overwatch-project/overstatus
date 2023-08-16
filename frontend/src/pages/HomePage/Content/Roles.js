import styled from "styled-components";
import { ContentBox } from "./styles";
import { useEffect, useState } from "react";
import React from "react";
import { getRoles } from "../../../services/oversastApi/rolesService";

export default function Roles() {
  const [roles, setRoles] = useState(undefined);
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
  function RoleMap() {
    return (
      <>
        {roles ? (
          <>
            {roles.map((a, index) => {
              return (
                <RoleIcon key={index}>
                  <p>{a.name}</p>
                  <img src={a.icon} alt={a.name} />
                </RoleIcon>
              );
            })}{" "}
          </>
        ) : (
          <>
            <p>Carregando...</p>
          </>
        )}
      </>
    );
  }
  return (
    <>
      <ContentBox bgcolor="#337fff">
        <RoleDescription>
          <h1>ROLES</h1>
          <div></div>
        </RoleDescription>
        <RoleMap />
      </ContentBox>
    </>
  );
}

const RoleDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #ffffff;
  div:nth-child(2) {
    width: 70%;
    height: 3px;
    background-color: #f99e1a;
  }
`;
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
