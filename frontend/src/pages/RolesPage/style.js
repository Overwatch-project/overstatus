import styled from "styled-components";
import { theme } from "../../assets/Colors";

export const TopBox = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    color: ${theme.white};
  }
`;
export const HeroesBox = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  &&:last-child {
    justify-content: flex-start;
  }
`;
export const HeroCardWrapper = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const HeroCard = styled.div`
  background-color: ${theme.gray};
  border-radius: 9px;
  border: 1px solid white;
  width: 170px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;
export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 85%;
  }
`;
export const HeroName = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    margin-right: 15px;
    text-align: center;
  }
`;
export const Content = styled.div`
  margin-top: 110px;
  width: 95vw;
  height: 100%;
  padding-bottom: 30px;
  margin-bottom: 20px;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
`;
export const CentralizeDots = styled.div`
  width: 95vw;
  height: 100vh;
  margin-bottom: 20px;
  background-color: #337fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RoleIcon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: black;
  padding: 3%;
  border-radius: 50%;
  margin-left: 15px;
  img {
    width: 20px;
    padding: 2px;
  }
`;
export const DescriptionBox = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;
  p{
    color: ${theme.white};
  }
`