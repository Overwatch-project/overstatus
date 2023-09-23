import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyled";
import { UserProvider } from "./context/useContext";
import HomePage from "./pages/HomePage/HomePage";
import RolePage from './pages/RolesPage/RolePage'
import styled from "styled-components";
import HeroPage from "./pages/HeroPage/HeroPage";
import { theme } from "./assets/Colors";

function App() {
  return (
    <BrowserRouter>
    <Content>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/role/:idRole" element={<RolePage />} />
          <Route path="/heroi/:keyHero" element={<HeroPage />} />
        </Routes>
      </UserProvider>
      </Content>
    </BrowserRouter>
  );
}
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.white};
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export default App;
