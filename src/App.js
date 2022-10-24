import { IntroPage, JoinPage, LoginPage, MainPage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <GlobalStyles />
        <Routes>
          <Route index element={<IntroPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="join" element={<JoinPage />} />
          {/* <Route index element={<MainPage />} /> */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
