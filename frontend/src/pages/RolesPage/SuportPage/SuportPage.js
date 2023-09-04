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
  const [suportHeroes, setSuportHeroes] = useState(undefined)
  async function apiResponse(){
    try{
      const response = await getHeroes()
      setHeroes(response)
      const supHeroes = response.filter(item => item.role === "support");
      setSuportHeroes(supHeroes)
    }catch(error){
      setHeroes(error)
      return
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);
  console.log(suportHeroes, heroes)
  function HeroesSupMap() {
    return (
      <>
        {suportHeroes ? (
          <>
            {suportHeroes.map((a, index) => {
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
      <NavBar />
      <Content>
        <TopBox>
          <h1>Suportes</h1>
        </TopBox>
        <HeroesMap>
        <HeroesSupMap />
          {/* <HeroCardWrapper>
            <HeroCard>
              <HeroImage>
                <img src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png" />
              </HeroImage>
              <HeroName>
                <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg" />
                <p>Ana</p>
              </HeroName>
            </HeroCard>
          </HeroCardWrapper>
          <HeroCardWrapper>
            <HeroCard>
              <HeroImage>
                <img src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png" />
              </HeroImage>
              <HeroName>
                <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg" />
                <p>Ana</p>
              </HeroName>
            </HeroCard>
          </HeroCardWrapper>
          <HeroCardWrapper>
            <HeroCard>
              <HeroImage>
                <img src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png" />
              </HeroImage>
              <HeroName>
                <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg" />
                <p>Ana</p>
              </HeroName>
            </HeroCard>
          </HeroCardWrapper> */}
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
`;
