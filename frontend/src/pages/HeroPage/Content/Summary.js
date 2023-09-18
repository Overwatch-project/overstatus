import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ContentBox } from "./styles";
import { IoLocationSharp } from "react-icons/io5";

export default function Summary({ hero }) {
  const { keyHero } = useParams();
  console.log(hero);
  return (
    <>
      <ContentBox bgcolor="#337fff" height="400px">
        <ItemBox>
          <Portrait>
            <h1>{hero.name}</h1>
            <img src={hero.portrait} alt={hero.name} />
          </Portrait>
          <HitPoints>
            <span>
              <h1>Armadura:</h1>
              <h2>{hero.hitpoints.armor}</h2>
            </span>
            <span>
              <h1>Vida:</h1>
              <h1>{hero.hitpoints.health}</h1>
            </span>
            <span>
              <h1>Escudo:</h1>
              <h1>{hero.hitpoints.shields}</h1>
            </span>
            <span>
              <h1>Total: </h1>
              <h1>{hero.hitpoints.total}</h1>
            </span>
          </HitPoints>
          <Description>
            <p>{hero.description}</p>
            <IoLocationSharp />
            <p>Localização: {hero.location}</p>
          </Description>
        </ItemBox>
      </ContentBox>
    </>
  );
}

const Portrait = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    position: absolute;
    border-bottom: 1px solid #f99e1a;
    top: 140px;
    font-size: 40px;
  }
  img {
    max-width: 85%;
  }
`;
const HitPoints = styled.div`
  width: 15%;
  height: 100%;
  line-height: normal;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2{
        color: white;
    }
  }
  span:nth-child(1) {
    margin-bottom: 5px;
    background-color: #c99100;
  }
  span:nth-child(2) {
    margin-bottom: 5px;
    background-color: #b6aba9;
  }
  span:nth-child(3) {
    background-color: #2e94b7;
  }
  span:nth-child(4) {
    margin-top: 10px;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
  width: 200px;
`;
const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
