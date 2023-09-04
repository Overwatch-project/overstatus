import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { HeroCard, HeroImage, HeroName, HeroesMap, TopBox } from "../style";

export default function SuportPage() {
  return (
    <>
      <NavBar />
      <Content>
        <TopBox>
          <h1>Suportes</h1>
        </TopBox>
        <HeroesMap>
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
        </HeroesMap>
      </Content>
    </>
  );
}

const Content = styled.div`
  margin-top: 110px;
  background-color: green;
  width: 95vw;
  height: auto;
`;

const HeroCardWrapper = styled.div`
  transition: transform 0.2s; 
  &:hover {
    transform: scale(
      1.2
    ); 
  }
`;
