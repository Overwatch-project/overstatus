import styled from "styled-components";
import { NavInput } from "../../../components/Input/NavInput";
import { ContentBox, Description } from "./styles";
import { IoSearchSharp } from "react-icons/io5";

export default function Players() {
  return (
    <>
      <ContentBox bgcolor="#9B9999">
        <Description>
          <h1>JOGADORES</h1>
          <div></div>
        </Description>
        <SearchBox>
            <NavInput placeholder={"Nome do jogaddor"} width={"100%"} />
              <IconSearch>
                <div></div>
                <IoSearchSharp />
              </IconSearch>
        </SearchBox>
      </ContentBox>
    </>
  );
}


const IconSearch = styled.div`
  position: absolute;
  right: 0;
  left: 1520px;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: black;
  cursor: pointer;
  div:nth-child(1) {
    width:  3px;
    height: 20px;
    background-color: #EEEEEE;
    border-radius: 50px;
    margin: 0 1px 0 0;
  }
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
`;