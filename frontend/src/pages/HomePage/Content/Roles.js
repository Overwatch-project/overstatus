import styled from "styled-components";
import { ContentBox } from "./styles";
import { getRoles } from "@testing-library/react";

export default function Roles() {

  async function apiResponse(){
    try{
      const response = await getRoles()
      console.log(response)
    }catch(error){
      return console.log(error)
    }
   
  }
  return (
    <>
      <ContentBox>
        <RoleDescription onClick={apiResponse}>
          <p>ROLES</p>
          <div></div>
        </RoleDescription>
        <RoleIcon>
          <p>TANQUE</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayUAq1gY_U2MWsUJESrSFYt0k8AmrbhhE_bxXwLZ1R72HBg9Zsxro-HxqhN8uiODdY8s&usqp=CAU" alt="Tanque" />
        </RoleIcon>
        <RoleIcon>
          <p>DANO</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayUAq1gY_U2MWsUJESrSFYt0k8AmrbhhE_bxXwLZ1R72HBg9Zsxro-HxqhN8uiODdY8s&usqp=CAU" alt="Dano"/>
        </RoleIcon>
        <RoleIcon>
          <p>SUPORTE</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayUAq1gY_U2MWsUJESrSFYt0k8AmrbhhE_bxXwLZ1R72HBg9Zsxro-HxqhN8uiODdY8s&usqp=CAU" alt="Suporte"/>
        </RoleIcon>
      </ContentBox>
    </>
  );
}

const RoleDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  div:nth-child(2){
    width: 70%;
    height: 3px;
    background-color: #f99e1a;
  }
`;

const RoleIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
