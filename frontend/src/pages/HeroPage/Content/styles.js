import styled from "styled-components";

export const ContentBox = styled.div`
  width: 95vw;
  height: ${(props) => props.height};
  padding-bottom: 30px;
  margin-bottom: 20px;
  background-color:${(props) => props.bgcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.45);
  padding: 30px 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
  }
`;