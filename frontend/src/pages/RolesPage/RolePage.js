import NavBar from "../../components/NavBar/NavBar";
import {
  HeroCard,
  HeroImage,
  HeroName,
  HeroesBox,
  TopBox,
  HeroCardWrapper,
  CentralizeDots,
  Content,
  RoleIcon,
  DescriptionBox
} from "./style";
import { getHeroes } from "../../services/overfastApi/heroesService";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, Navigate, useNavigate , useParams } from "react-router-dom";
import { getRoles } from "../../services/overfastApi/rolesService";

export default function SuportPage() {
  const [heroes, setHeroes] = useState(undefined);
  const [roleName, setRoleName] = useState(undefined)
  const [roleDescription, setRoleDescription] = useState(undefined)
  const [icon, setIcon] = useState(undefined)
  const navigate = useNavigate();
  const { idRole } = useParams();
  async function apiResponse() {
    try {
      const response = await getHeroes(idRole);
      const roleResponse = await getRoles()
      const filterRole = roleResponse.filter(a => a.key === idRole)
      setIcon(filterRole[0].icon)
      setRoleName(filterRole[0].name)
      setRoleDescription(filterRole[0].description)
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
  function HeroesMap() {
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
                      <RoleIcon>
                      <img src={icon} />
                      </RoleIcon>
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
        <DescriptionBox>
          <p>{roleDescription}</p>
        </DescriptionBox>
        <HeroesBox>
          <HeroesMap />
        </HeroesBox>
      </Content>
    </>
  );
}