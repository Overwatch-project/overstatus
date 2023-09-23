import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getHero } from "../../services/overfastApi/heroesService";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Summary from "./Content/Summary";
import Skills from "./Content/Skills";

export default function HeroPage() {
  const { keyHero } = useParams();
  const [hero, setHero] = useState(undefined);
  const [story, setStory] = useState(undefined);
  const [abilities, setAbilities] = useState(undefined);

  async function apiResponse() {
    try {
      const response = await getHero(keyHero);
      setStory(response.story);
      setAbilities(response.abilities);
      setHero(response);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);
  return (
    <>
      <NavBar />
      <Content>
        {hero ? (
          <>
          <Summary hero={hero} />
          <Skills abilities={abilities}/>
          </>
          
        ) : (
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
        )}
      </Content>
    </>
  );
}

const Content = styled.div`
  margin-top: 110px;
`;
