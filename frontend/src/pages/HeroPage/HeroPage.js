import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getHero } from "../../services/overfastApi/heroesService";
import { useEffect, useState } from "react";


export default function HeroPage() {
    const {keyHero} = useParams()
    console.log(keyHero)
    async function apiResponse() {
        try {
          const response = await getHero(keyHero);
          console.log(response)
        } catch (error) {
          console.log(error)
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
       
      </Content>
    </>
  );
}

const Content = styled.div`
    margin-top: 110px;
`
