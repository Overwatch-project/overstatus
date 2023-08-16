import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyled";
import { UserProvider } from "./context/useContext";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
    <Content>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </UserProvider>
      </Content>
    </BrowserRouter>
  );
}
const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #9B9999;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export default App;
