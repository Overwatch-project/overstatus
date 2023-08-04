import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyled";
import { UserProvider } from "./context/useContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
