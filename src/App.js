import { Route, Routes } from 'react-router-dom';
import { LoginPage, JoinPage, MainPage } from 'pages';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <GlobalStyles />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="join" element={<JoinPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
