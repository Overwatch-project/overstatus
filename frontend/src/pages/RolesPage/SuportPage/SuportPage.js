import NavBar from "../../../components/NavBar/NavBar";
import styled from "styled-components";
import {
  HeroCard,
  HeroImage,
  HeroName,
  HeroesMap,
  TopBox,
  HeroCardWrapper,
} from "../style";
import { getHeroes } from "../../../services/oversastApi/heroesService";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function SuportPage() {
  const [heroes, setHeroes] = useState(undefined);
  async function apiResponse() {
    try {
      const string = "support"
      const response = await getHeroes(string);
      setHeroes(response);
    } catch (error) {
      setHeroes(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);
  function HeroesSupMap() {
    return (
      <>
        {heroes ? (
          <>
            {heroes.map((a, index) => {
              return (
                <HeroCardWrapper key={index}>
                  <HeroCard>
                    <HeroImage>
                      <img src={a.portrait} />
                    </HeroImage>
                    <HeroName>
                      <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg" />
                      <p>{a.name}</p>
                    </HeroName>
                  </HeroCard>
                </HeroCardWrapper>
              );
            })}
          </>
        ) : (
          <>
          <CentralizeDots>
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
            </CentralizeDots>
          </>
        )}
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Content>
        <TopBox>
          <h1>Suportes</h1>
        </TopBox>
        <HeroesMap>
          <HeroesSupMap />
        </HeroesMap>
      </Content>
    </>
  );
}

const Content = styled.div`
  margin-top: 110px;
  width: 95vw;
  height: auto;
  background-color: #337fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CentralizeDots = styled.div`

`