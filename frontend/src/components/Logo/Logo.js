import styled from "styled-components";
export function Logo() {
  return (
    <>
      <LogoBox>
        <Typography>Overstatus</Typography>
      </LogoBox>
    </>
  );
}

const LogoBox = styled.div`
width: auto;
height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Typography = styled.p`
  font-size: 30px;
  color: #218FFE;
  font-family: 'Terminator';
`;