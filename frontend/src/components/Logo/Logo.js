import styled from "styled-components";
export function Logo() {
  return (
    <>
      <LogoBox>
        <Typography>overstatus</Typography>
      </LogoBox>
    </>
  );
}

const LogoBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;
const Typography = styled.p`
  font-size: 30px;
  color: #218ffe;
  font-family: "Terminator";
`;