import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import Roles from "./Content/Roles";
import Players from "./Content/Players";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Content>
        <Roles/>
        <Players />
      </Content>
    </>
  );
}

const Content = styled.div`
    margin-top: 110px;
    
`
