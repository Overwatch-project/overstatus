import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import {
  HeroCard,
  HeroImage,
  HeroName,
  HeroesBox,
  TopBox,
  HeroCardWrapper,
} from "./style";
import { getHeroes } from "../../services/oversastApi/heroesService";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, Navigate, useNavigate , useParams } from "react-router-dom";
import { getRoles } from "../../services/oversastApi/rolesService";

export default function SuportPage() {
  const [heroes, setHeroes] = useState(undefined);
  const [roleName, setRoleName] = useState(undefined)
  const navigate = useNavigate();
  const { idRole } = useParams()
  let name
  let icon
  async function apiResponse() {
    try {
      const response = await getHeroes(idRole);
      const roleResponse = await getRoles()
      const filterRole = roleResponse.filter(a => a.key === idRole)
      setRoleName(filterRole[0].name)
      setHeroes(response);
    } catch (error) {
      setHeroes(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);
  function selectHero(key) {
    navigate(`/heroi/${key}`);
  }
  function HeroesSupMap() {
    return (
      <>
        {heroes ? (
          <>
            {heroes.map((a, index) => {
              return (
                <HeroCardWrapper key={index} onClick={() => selectHero(a.key)}>
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
          <h1>{roleName}</h1>
        </TopBox>
        <HeroesBox>
          <HeroesSupMap />
        </HeroesBox>
      </Content>
    </>
  );
}

const Content = styled.div`
  margin-top: 110px;
  width: 95vw;
  height: 100%;
  padding-bottom: 30px;
  margin-bottom: 20px;
  background-color: #337fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CentralizeDots = styled.div`
  width: 95vw;
  height: 100vh;
  margin-bottom: 20px;
  background-color: #337fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
