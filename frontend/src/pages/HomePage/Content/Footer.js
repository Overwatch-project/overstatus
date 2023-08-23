import { ContentBox, Description } from "./styles";
import styled from "styled-components";

export default function Footer() {
    return (
      <>
        <ContentBox bgcolor="#9B9999">
          <Description>
            <h1>Sobre</h1>
            <div></div>
          </Description>
          <InformationBox>
            <h2>Criado por:</h2>
            <p>Gabriela Vuolo e Isabella lopes</p>
          </InformationBox>
        </ContentBox>
      </>
    );
  }

  const InformationBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
  `