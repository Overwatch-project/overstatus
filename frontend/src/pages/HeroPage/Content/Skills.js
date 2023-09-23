import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ContentBox } from "./styles";

export default function Skills({ abilities }) {
  const { keyHero } = useParams();

  return (
    <>
      <ContentBox bgcolor="#9B9999" height="auto">
        <h1>Habilidades</h1>
        <AbilitiesRow>
          {abilities.map((a, index) => {
            return (
              <SkillBox index={index}>
                <ImageBox>
                  <img src={a.icon} />
                </ImageBox>
                <Description>
                  <h1>{a.name}</h1>
                  <p>{a.description}</p>
                </Description>
                <VideoBox>
                  <video controls>
                    <source src={a.video.link.webm} type="video/webm" />
                  </video>
                </VideoBox>
              </SkillBox>
            );
          })}
        </AbilitiesRow>
      </ContentBox>
    </>
  );
}
const AbilitiesRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;
const SkillBox = styled.div`
  padding: 2%;
  margin: 2%;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Description = styled.div``;
const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 100%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    overflow: auto;
  }
`;
const VideoBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  video {
    width: 400px;
  }
`;
