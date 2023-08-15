import styled from "styled-components";
import { ContentBox } from "./styles";

export default function Roles() {
  return (
    <>
      <ContentBox>
        <RoleDescription>
          <p>ROLES</p>
          <div></div>
        </RoleDescription>
        <RoleIcon>
          <p>TANQUE</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayUAq1gY_U2MWsUJESrSFYt0k8AmrbhhE_bxXwLZ1R72HBg9Zsxro-HxqhN8uiODdY8s&usqp=CAU" />
        </RoleIcon>
        <RoleIcon>
          <p>DANO</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayUAq1gY_U2MWsUJESrSFYt0k8AmrbhhE_bxXwLZ1R72HBg9Zsxro-HxqhN8uiODdY8s&usqp=CAU" />
        </RoleIcon>
        <RoleIcon>
          <p>SUPORTE</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayUAq1gY_U2MWsUJESrSFYt0k8AmrbhhE_bxXwLZ1R72HBg9Zsxro-HxqhN8uiODdY8s&usqp=CAU" />
        </RoleIcon>
      </ContentBox>
    </>
  );
}
const RoleBox = styled.div`
  width: 95vw;
  height: 300px;
  background-color: #337fff;
  display: flex;
  align-items: center;
  justify-content: space-around;

  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
`;

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
