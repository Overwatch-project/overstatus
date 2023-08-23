import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyled";
import { UserProvider } from "./context/useContext";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components";
import SuportPage from "./pages/SuportPage/SuportPage";

function App() {
  return (
    <BrowserRouter>
    <Content>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/suporte" element={<SuportPage />} />
        </Routes>
      </UserProvider>
      </Content>
    </BrowserRouter>
  );
}
const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export default App;
