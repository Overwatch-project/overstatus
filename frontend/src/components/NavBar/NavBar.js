import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { NavButton } from "../Button/NavButton";
import { NavInput } from "../Input/NavInput";

export default function NavBar() {
  return (
    <>
      <TopBar> 
        <Logo />
        <NavButton text="MODO DE JOGO" width="auto" height="50%" bgcolor={'#D9D9D9'}/>
        <NavButton text="HERÓIS" width="auto" height="50%" bgcolor={'#D9D9D9'}/>
        <NavButton text="MAPAS" width="auto" height="50%" bgcolor={'#D9D9D9'}/>
        <NavButton text="JOGADORES" width="auto" height="50%" bgcolor={'#D9D9D9'}/>
        <NavButton text="GUIAS" width="auto" height="50%" bgcolor={'#D9D9D9'}/>
        <NavInput />
        <NavButton text="LOGIN" width="auto" height="50%" bgcolor={'#F99E1A'}/>
      </TopBar>
    </>
  );
}
const TopBar = styled.div`
  position: fixed;
  top: 20px;
  bottom: 0;
  width: 95vw;
  height: 70px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
