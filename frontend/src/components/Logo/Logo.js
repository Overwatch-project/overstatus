import styled from "styled-components";
import overstatus from "../../assets/overstatus.png"
export function Logo() {
  return (
    <>
      <LogoBox>
        <Img src={overstatus} alt="Overstatus Logo"/>
      </LogoBox>
    </>
  );
}

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Img = styled.img`
  width: 200px;
  height: 20px;
`;