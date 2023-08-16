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
  display: flex;
  align-items: center;
  color: #218FFE;
  justify-content: center;
  cursor: pointer;
`;
const Typography = styled.p`
  font-size: 20px;
  color: #218FFE;
  font-family: 'Terminator';
`;