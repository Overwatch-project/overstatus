import styled from "styled-components";

export const TopBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
export const HeroesMap = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;
export const HeroCardWrapper = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const HeroCard = styled.div`
  background-color: #d9d9d9;
  border-radius: 9px;
  border: 1px solid white;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    margin: 10px;
  }
  img {
    width: 20px;
    padding: 2px;
  }
`;