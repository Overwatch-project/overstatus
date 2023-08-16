import styled from "styled-components";
import { NavInput } from "../../../components/Input/NavInput";
import { ContentBox } from "./styles";

export default function Players() {
  return (
    <>
      <ContentBox>
        <RoleDescription>
          <h1>JOGADORES</h1>
          <div></div>
        </RoleDescription>
        <NavInput placeholder={"Nome do jogaddor"} />
      </ContentBox>
    </>
  );
}

const RoleDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  div:nth-child(2) {
    width: 70%;
    height: 3px;
    background-color: #f99e1a;
  }
`;
