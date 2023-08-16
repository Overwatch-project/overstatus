import styled from "styled-components";
export const ContentBox = styled.div`
  width: 95vw;
  height: 300px;
  background-color:${(props) => props.bgcolor};;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0 10px 0;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
`;
