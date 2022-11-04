import { Route, Routes } from 'react-router-dom';
import { LoginPage, JoinPage, MainPage, TownAuthPage } from 'pages';
import { AppLayout } from 'components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="mytown" element={<TownAuthPage />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
