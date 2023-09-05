import styled from "styled-components";

export const TopBox = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeroesBox = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  &&:last-child{
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
  background-color: #d9d9d9;
  border-radius: 9px;
  border: 1px solid white;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin:10px;
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